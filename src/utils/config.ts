import fs from "fs";
import path from "path";
import os from "os";
import type { ServerConfig, DokployInstance } from "../types/config.js";

const CONFIG_LOCATIONS = [
  path.join(process.cwd(), "config.json"),
  path.join(os.homedir(), ".mcp-dokploy", "config.json"),
];

export function loadConfig(configPath?: string): ServerConfig {
  const locations = configPath ? [configPath, ...CONFIG_LOCATIONS] : CONFIG_LOCATIONS;

  for (const loc of locations) {
    try {
      if (fs.existsSync(loc)) {
        const raw = JSON.parse(fs.readFileSync(loc, "utf8")) as ServerConfig;
        console.error(`Config loaded from ${loc}`);
        return validate(raw);
      }
    } catch (e) {
      console.error(`Error loading config from ${loc}:`, e);
    }
  }

  return fromEnv();
}

function fromEnv(): ServerConfig {
  const url = process.env.DOKPLOY_URL ?? "";
  const token = process.env.DOKPLOY_TOKEN ?? process.env.DOKPLOY_API_KEY ?? "";
  if (!url || !token) return { instances: {} };
  return { instances: { default: { url, token } }, defaultInstance: "default" };
}

function validate(cfg: ServerConfig): ServerConfig {
  if (!cfg.instances || typeof cfg.instances !== "object") cfg.instances = {};

  const invalid: string[] = [];
  for (const [id, inst] of Object.entries(cfg.instances)) {
    if (!inst.url || !inst.token) {
      console.error(`Skipping instance '${id}': missing url or token`);
      invalid.push(id);
    }
  }
  for (const id of invalid) delete cfg.instances[id];

  // Merge env vars as fallback instance
  const env = fromEnv();
  if (env.instances.default && !cfg.instances.default) {
    cfg.instances.default = env.instances.default;
    if (!cfg.defaultInstance) cfg.defaultInstance = "default";
  }

  const keys = Object.keys(cfg.instances);
  if (keys.length > 0 && (!cfg.defaultInstance || !cfg.instances[cfg.defaultInstance])) {
    cfg.defaultInstance = keys[0];
  }

  return cfg;
}

export function resolveInstance(cfg: ServerConfig, name?: string): { id: string; instance: DokployInstance } | undefined {
  const id = name ?? cfg.defaultInstance;
  if (!id || !cfg.instances[id]) return undefined;
  return { id, instance: cfg.instances[id] };
}
