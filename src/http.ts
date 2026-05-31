#!/usr/bin/env node
import { createServer as createHttpServer } from 'node:http';
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { loadConfig } from './utils/config.js';
import { createServer } from './server.js';
import { handleOAuth, isValidToken, initTokenSecret } from './oauth.js';

const PORT = Number(process.env.PORT) || 3000;
const AUTH_TOKEN = process.env.MCP_AUTH_TOKEN;
const MCP_PATH = process.env.MCP_PATH || '/mcp';
const PUBLIC_URL = process.env.PUBLIC_URL || '';

if (!AUTH_TOKEN) { console.error('Fatal: MCP_AUTH_TOKEN env var required'); process.exit(1); }
if (process.env.MCP_ENABLED === 'false') { console.error('Fatal: MCP_ENABLED=false'); process.exit(1); }

const config = loadConfig(process.env.DOKPLOY_CONFIG);
const instanceIds = Object.keys(config.instances);
if (instanceIds.length === 0) { console.error('Fatal: no Dokploy instances configured (set DOKPLOY_URL+DOKPLOY_TOKEN)'); process.exit(1); }
initTokenSecret(AUTH_TOKEN);

function baseUrlFrom(req: any): string {
  if (PUBLIC_URL) return PUBLIC_URL.replace(/\/$/, '');
  const proto = (req.headers['x-forwarded-proto'] as string) || 'https';
  const host = (req.headers['x-forwarded-host'] as string) || req.headers['host'] || 'localhost';
  return `${proto}://${host}`;
}

function unauthorized(res: any, baseUrl: string) {
  res.writeHead(401, {
    'Content-Type': 'application/json',
    'WWW-Authenticate': `Bearer resource_metadata="${baseUrl}/.well-known/oauth-protected-resource"`,
  });
  res.end(JSON.stringify({ jsonrpc: '2.0', error: { code: -32001, message: 'Unauthorized' }, id: null }));
}

function checkAuth(req: any): boolean {
  const h = req.headers['authorization'];
  if (!h || typeof h !== 'string') return false;
  const token = h.startsWith('Bearer ') ? h.slice(7) : h;
  if (token === AUTH_TOKEN) return true;
  return isValidToken(token);
}

async function readBody(req: any): Promise<any> {
  const chunks: Buffer[] = [];
  for await (const c of req) chunks.push(c as Buffer);
  if (chunks.length === 0) return undefined;
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

const httpServer = createHttpServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://localhost`);
  const baseUrl = baseUrlFrom(req);

  if (url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', instances: instanceIds.length }));
    return;
  }

  if (await handleOAuth(req, res, url, baseUrl, AUTH_TOKEN!)) return;

  if (url.pathname !== MCP_PATH) {
    res.writeHead(404).end();
    return;
  }

  if (!checkAuth(req)) return unauthorized(res, baseUrl);

  // Stateless: each POST gets a fresh transport + server, no session state.
  if (req.method === 'POST') {
    const body = await readBody(req);
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    const mcp = createServer(config);
    res.on('close', () => { transport.close(); });
    try {
      await mcp.connect(transport);
      await transport.handleRequest(req, res, body);
    } catch (e) {
      console.error('Request error:', e);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ jsonrpc: '2.0', error: { code: -32603, message: 'Internal error' }, id: null }));
      }
    }
    return;
  }

  res.writeHead(405, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ jsonrpc: '2.0', error: { code: -32000, message: 'Method not allowed in stateless mode' }, id: null }));
});

httpServer.listen(PORT, () => {
  console.error(`mcp-dokploy-fullapi-proxy HTTP listening on :${PORT}${MCP_PATH} (stateless, oauth+bearer, ${instanceIds.length} instance(s))`);
});

process.on('SIGINT', () => { httpServer.close(); process.exit(0); });
process.on('SIGTERM', () => { httpServer.close(); process.exit(0); });
