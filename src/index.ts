import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { loadConfig, resolveInstance } from "./utils/config.js";
import type { ServerConfig } from "./types/config.js";

const config: ServerConfig = loadConfig(process.env.DOKPLOY_CONFIG);

const instanceIds = Object.keys(config.instances);
if (instanceIds.length === 0) {
  console.error("No Dokploy instances configured. Set DOKPLOY_URL+DOKPLOY_TOKEN env vars or provide a config.json");
  process.exit(1);
}

console.error(`Loaded ${instanceIds.length} instance(s): ${instanceIds.join(", ")} (default: ${config.defaultInstance})`);

const server = new McpServer({
  name: "mcp-dokploy-fullapi-proxy",
  version: "1.1.0",
});

function pickFields(data: unknown, fields: string[]): unknown {
  if (!data || typeof data !== "object") return data;
  if (Array.isArray(data)) return data.map(item => pickFields(item, fields));
  const obj = data as Record<string, unknown>;
  const r: Record<string, unknown> = {};
  for (const k of Object.keys(obj)) {
    if (fields.includes(k)) {
      r[k] = obj[k];
    } else if (typeof obj[k] === "object" && obj[k] !== null) {
      const nested = pickFields(obj[k], fields);
      if (Array.isArray(nested) ? (nested as unknown[]).length > 0 : Object.keys(nested as object).length > 0) {
        r[k] = nested;
      }
    }
  }
  return r;
}

const instanceDesc = instanceIds.length > 1
  ? ` Use 'instance' to target a specific Dokploy instance (available: ${instanceIds.join(", ")}). Default: ${config.defaultInstance}.`
  : "";

server.tool(
  "dokploy",
  "Universal Dokploy API proxy. Calls any tRPC endpoint. " +
    "Use method like 'project.all', 'application.deploy', 'compose.update'. " +
    "Params are passed as JSON body to the API. " +
    "Optional 'pick' filters the response to only include specified field names." +
    instanceDesc,
  {
    method: z.string(),
    params: z.record(z.string(), z.unknown()).optional(),
    pick: z.array(z.string()).optional(),
    instance: z.string().optional().describe("Target Dokploy instance ID"),
  },
  async ({ method, params, pick, instance }) => {
    const resolved = resolveInstance(config, instance);
    if (!resolved) {
      const msg = instance
        ? `Unknown instance '${instance}'. Available: ${instanceIds.join(", ")}`
        : "No default instance configured";
      return { content: [{ type: "text" as const, text: `❌ ${msg}` }], isError: true };
    }

    const { id, instance: inst } = resolved;
    const baseUrl = `${inst.url}/trpc/${method}`;
    const hasParams = params && Object.keys(params).length > 0;
    const prefix = instanceIds.length > 1 ? `[${id}] ` : "";

    try {
      let res: Response;
      if (hasParams) {
        const qs = new URLSearchParams({ input: JSON.stringify({ json: params }) });
        res = await fetch(`${baseUrl}?${qs}`, {
          method: "GET",
          headers: { "x-api-key": inst.token },
        });
        if (res.status === 405) {
          res = await fetch(baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-api-key": inst.token },
            body: JSON.stringify({ json: params }),
          });
        }
      } else {
        res = await fetch(baseUrl, {
          method: "GET",
          headers: { "x-api-key": inst.token },
        });
        if (res.status === 405) {
          res = await fetch(baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-api-key": inst.token },
            body: "{}",
          });
        }
      }

      const text = await res.text();
      let data: unknown;
      try { data = JSON.parse(text); } catch { data = text; }

      if (!res.ok) {
        const msg = typeof data === "object" ? JSON.stringify(data, null, 2) : String(data);
        return { content: [{ type: "text" as const, text: `${prefix}❌ ${res.status} ${res.statusText}\n${msg}` }], isError: true };
      }

      const result = typeof data === "object" && data !== null && "result" in data
        ? (data as Record<string, unknown>).result
        : data;
      const output = typeof result === "object" && result !== null && "data" in result
        ? (result as Record<string, unknown>).data
        : result;

      const filtered = pick && pick.length > 0 ? pickFields(output, pick) : output;
      return { content: [{ type: "text" as const, text: `${prefix}${JSON.stringify(filtered, null, 2)}` }] };
    } catch (e) {
      return { content: [{ type: "text" as const, text: `${prefix}❌ Network error: ${e instanceof Error ? e.message : String(e)}` }], isError: true };
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
