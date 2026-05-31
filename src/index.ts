import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { loadConfig } from "./utils/config.js";
import { createServer } from "./server.js";
import type { ServerConfig } from "./types/config.js";

const config: ServerConfig = loadConfig(process.env.DOKPLOY_CONFIG);

const instanceIds = Object.keys(config.instances);
if (instanceIds.length === 0) {
  console.error("No Dokploy instances configured. Set DOKPLOY_URL+DOKPLOY_TOKEN env vars or provide a config.json");
  process.exit(1);
}

console.error(`Loaded ${instanceIds.length} instance(s): ${instanceIds.join(", ")} (default: ${config.defaultInstance})`);

const server = createServer(config);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
