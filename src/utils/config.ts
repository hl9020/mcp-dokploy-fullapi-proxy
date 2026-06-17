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

const ID_REGEX = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,63}$/;
export function isValidInstanceId(id: string): boolean { return ID_REGEX.test(id); }

function instancesFromPrefixedEnv(): Record<string, DokployInstance> {
  const acc: Record<string, { url?: string; token?: string }> = {};
  const re = /^DOKPLOY_(.+)_(URL|TOKEN|API_KEY)$/;
  const reserved = new Set(["URL", "TOKEN", "API", "CONFIG", "INSTANCES"]);
  for (const [key, val] of Object.entries(process.env)) {
    if (!val) continue;
    const m = key.match(re);
    if (!m) continue;
    if (reserved.has(m[1])) continue;
    const id = m[1].toLowerCase();
    const c = acc[id] ??= {};
    if (m[2] === "URL") c.url = val; else c.token = val;
  }
  const out: Record<string, DokployInstance> = {};
  for (const [id, c] of Object.entries(acc)) if (c.url && c.token) out[id] = { url: c.url, token: c.token };
  return out;
}

function fromEnv(): ServerConfig {
  const jsonRaw = process.env.DOKPLOY_INSTANCES;
  if (jsonRaw) {
    let parsed: Record<string, DokployInstance>;
    try { parsed = JSON.parse(jsonRaw); }
    catch (e) { throw new Error(`DOKPLOY_INSTANCES is not valid JSON: ${e instanceof Error ? e.message : String(e)}`); }
    const def = process.env.DOKPLOY_DEFAULT_INSTANCE;
    return { instances: parsed, defaultInstance: def && parsed[def] ? def : Object.keys(parsed)[0] };
  }

  const prefixed = instancesFromPrefixedEnv();
  const single = process.env.DOKPLOY_URL ?? "";
  const singleToken = process.env.DOKPLOY_TOKEN ?? process.env.DOKPLOY_API_KEY ?? "";
  if (single && singleToken) prefixed.default ??= { url: single, token: singleToken };

  if (Object.keys(prefixed).length === 0) return { instances: {} };
  const def = process.env.DOKPLOY_DEFAULT_INSTANCE;
  const defaultInstance = def && prefixed[def] ? def : (prefixed.default ? "default" : Object.keys(prefixed)[0]);
  return { instances: prefixed, defaultInstance };
}

function validate(cfg: ServerConfig): ServerConfig {
  if (!cfg.instances || typeof cfg.instances !== "object") cfg.instances = {};

  const invalid: string[] = [];
  for (const [id, inst] of Object.entries(cfg.instances)) {
    if (!isValidInstanceId(id)) {
      console.error(`Skipping instance '${id}': invalid ID (use alphanumeric, dots, hyphens, underscores)`);
      invalid.push(id);
      continue;
    }
    if (!inst.url || !inst.token) {
      console.error(`Skipping instance '${id}': missing url or token`);
      invalid.push(id);
    }
  }
  for (const id of invalid) delete cfg.instances[id];

  // Merge env vars as fallback instances
  const env = fromEnv();
  for (const [id, inst] of Object.entries(env.instances)) {
    cfg.instances[id] ??= inst;
  }
  if (!cfg.defaultInstance && env.defaultInstance) cfg.defaultInstance = env.defaultInstance;

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
