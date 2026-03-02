import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const DOKPLOY_URL = process.env.DOKPLOY_URL ?? "http://localhost:3000/api";
const DOKPLOY_TOKEN = process.env.DOKPLOY_TOKEN ?? process.env.DOKPLOY_API_KEY ?? "";

if (!DOKPLOY_TOKEN) {
  console.error("DOKPLOY_TOKEN env var required");
  process.exit(1);
}

const server = new McpServer({
  name: "mcp-dokploy-fullapi-proxy",
  version: "1.0.0",
});

function pickFields(data: unknown, fields: string[]): unknown {
  if (!data || typeof data !== "object") return data;
  if (Array.isArray(data)) return data.map(item => pickFields(item, fields));
  const obj = data as Record<string, unknown>;
  const result: Record<string, unknown> = {};
  for (const key of Object.keys(obj)) {
    if (fields.includes(key)) {
      result[key] = obj[key];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      const nested = pickFields(obj[key], fields);
      // nur hinzufügen wenn nested nicht leer ist
      if (Array.isArray(nested) ? (nested as unknown[]).length > 0 : Object.keys(nested as object).length > 0) {
        result[key] = nested;
      }
    }
  }
  return result;
}

server.tool(
  "dokploy",
  "Universal Dokploy API proxy. Calls any tRPC endpoint. " +
    "Use method like 'project.all', 'application.deploy', 'compose.update'. " +
    "Params are passed as JSON body to the API. " +
    "Optional 'pick' filters the response to only include specified field names (e.g. pick: ['mysql'] on project.all returns only mysql arrays).",
  { method: z.string(), params: z.record(z.string(), z.unknown()).optional(), pick: z.array(z.string()).optional() },
  async ({ method, params, pick }) => {
    const baseUrl = `${DOKPLOY_URL}/trpc/${method}`;
    const hasParams = params && Object.keys(params).length > 0;

    try {
      let res: Response;
      if (hasParams) {
        // tRPC GET queries: params as ?input=<JSON>
        const qs = new URLSearchParams({ input: JSON.stringify({ json: params }) });
        res = await fetch(`${baseUrl}?${qs}`, {
          method: "GET",
          headers: { "x-api-key": DOKPLOY_TOKEN },
        });
        // Fallback to POST for mutations
        if (res.status === 405) {
          res = await fetch(baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-api-key": DOKPLOY_TOKEN },
            body: JSON.stringify({ json: params }),
          });
        }
      } else {
        res = await fetch(baseUrl, {
          method: "GET",
          headers: { "x-api-key": DOKPLOY_TOKEN },
        });
        if (res.status === 405) {
          res = await fetch(baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-api-key": DOKPLOY_TOKEN },
            body: "{}",
          });
        }
      }

      const text = await res.text();
      let data: unknown;
      try { data = JSON.parse(text); } catch { data = text; }

      if (!res.ok) {
        const msg = typeof data === "object" ? JSON.stringify(data, null, 2) : String(data);
        return { content: [{ type: "text" as const, text: `❌ ${res.status} ${res.statusText}\n${msg}` }], isError: true };
      }

      const result = typeof data === "object" && data !== null && "result" in data
        ? (data as Record<string, unknown>).result
        : data;
      const output = typeof result === "object" && result !== null && "data" in result
        ? (result as Record<string, unknown>).data
        : result;

      const filtered = pick && pick.length > 0 ? pickFields(output, pick) : output;
      return { content: [{ type: "text" as const, text: JSON.stringify(filtered, null, 2) }] };
    } catch (e) {
      return { content: [{ type: "text" as const, text: `❌ Network error: ${e instanceof Error ? e.message : String(e)}` }], isError: true };
    }
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
