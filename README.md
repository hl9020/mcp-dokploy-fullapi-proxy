# mcp-dokploy-fullapi-proxy

> **Dokploy Version: `v0.28.8` - 473 Endpoints** _(last updated: 2026-03-27)_

Multi-instance Dokploy API proxy MCP. **1 tool, ~200 tokens** instead of 67+ tools consuming ~35,000 tokens per conversation. Supports multiple Dokploy instances via config file.

## How it works

A single MCP tool `dokploy(method, params?, instance?)` acts as a thin proxy to Dokploy's tRPC API. All intelligence lives in skill files that Claude reads on-demand via **Progressive Disclosure** - only the relevant API section is loaded into context, saving 77-92% tokens per request.

## Setup

```bash
npx -y mcp-dokploy-fullapi-proxy
```

## Configuration

### Multi-Instance (recommended)

Create a config file at `~/.mcp-dokploy/config.json`:

```json
{
  "instances": {
    "prod": {
      "url": "https://dokploy.example.com/api",
      "token": "your-api-token"
    },
    "staging": {
      "url": "https://staging.dokploy.dev/api",
      "token": "another-api-token"
    }
  },
  "defaultInstance": "prod"
}
```

The config file is searched in this order:
1. Path from `DOKPLOY_CONFIG` env var
2. `./config.json` (current working directory)
3. `~/.mcp-dokploy/config.json` (home directory)

### Single-Instance (env vars, backward-compatible)

For a single instance, env vars still work as before:

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `DOKPLOY_URL` | No | - | Dokploy API base URL |
| `DOKPLOY_TOKEN` | No | - | API authentication token |
| `DOKPLOY_CONFIG` | No | - | Path to config file |

When using env vars without a config file, a `default` instance is created automatically. Env vars are also merged as fallback into config-file setups.

Get your API token from Dokploy: **Settings -> Profile -> API/Token Section**.

### Usage with instances

```js
// Uses default instance
dokploy("project.all")

// Target a specific instance
dokploy("project.all", {}, { instance: "staging" })
```

> **Architecture:** This MCP uses a two-part setup:
> 1. **MCP Server** - gives the AI tool access to the `dokploy()` function
> 2. **Skill/Instructions** - teaches the AI *which* endpoints exist and *how* to call them
>
> Without the skill, the AI has the tool but doesn't know the API. Tools that support native skill files get Progressive Disclosure (on-demand loading). Tools without skill support need the SKILL.md content injected as instructions.

---

### Claude Desktop / Claude.ai

**MCP:** Native | **Skills:** Native (ZIP upload)

#### 1. MCP Server

Add to `claude_desktop_config.json`:
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

**With config file (multi-instance):**
```json
{
  "mcpServers": {
    "dokploy-fullapi-proxy": {
      "command": "npx",
      "args": ["-y", "mcp-dokploy-fullapi-proxy"]
    }
  }
}
```

**With env vars (single instance):**
```json
{
  "mcpServers": {
    "dokploy-fullapi-proxy": {
      "command": "npx",
      "args": ["-y", "mcp-dokploy-fullapi-proxy"],
      "env": {
        "DOKPLOY_URL": "https://your-dokploy-instance.com/api",
        "DOKPLOY_TOKEN": "your-api-token"
      }
    }
  }
}
```

#### 2. Skill Upload

1. Download `skill/dokploy-api.zip` from this repo
2. Go to **Claude.ai / Claude Desktop -> Customize -> Skills**
3. Click **+** and upload `dokploy-api.zip`

---

### Claude Code

**MCP:** Native | **Skills:** Native (`.claude/skills/` directory)

#### 1. MCP Server

```bash
claude mcp add dokploy-fullapi-proxy \
  -- npx -y mcp-dokploy-fullapi-proxy
```

Or with env vars for single instance:

```bash
claude mcp add dokploy-fullapi-proxy \
  -e DOKPLOY_URL=https://your-dokploy-instance.com/api \
  -e DOKPLOY_TOKEN=your-api-token \
  -- npx -y mcp-dokploy-fullapi-proxy
```

#### 2. Skills

```bash
mkdir -p .claude/skills/dokploy-api
cp skill/*.md .claude/skills/dokploy-api/
```

---

### Cursor

**MCP:** Native | **Skills:** Agent Skills (auto-discovered)

#### 1. MCP Server

Add to `~/.cursor/mcp.json` (global) or `.cursor/mcp.json` (project):

```json
{
  "mcpServers": {
    "dokploy-fullapi-proxy": {
      "command": "npx",
      "args": ["-y", "mcp-dokploy-fullapi-proxy"]
    }
  }
}
```

#### 2. Skills

```bash
mkdir -p .cursor/skills/dokploy-api
cp skill/*.md .cursor/skills/dokploy-api/
```

Or create a `.cursor/rules/dokploy.mdc` rule with SKILL.md contents.

---

### Windsurf

**MCP:** Native | **Skills:** No native support (use Rules workaround)

#### 1. MCP Server

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "dokploy-fullapi-proxy": {
      "command": "npx",
      "args": ["-y", "mcp-dokploy-fullapi-proxy"]
    }
  }
}
```

#### 2. Skill Workaround

Create `.windsurf/rules/dokploy.md` with SKILL.md contents.

---

### VS Code + GitHub Copilot

**MCP:** Native | **Skills:** No native support

#### 1. MCP Server

Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "dokploy-fullapi-proxy": {
      "command": "npx",
      "args": ["-y", "mcp-dokploy-fullapi-proxy"]
    }
  }
}
```

#### 2. Skill Workaround

Paste SKILL.md contents into `.github/copilot-instructions.md`.

---

### Cline

**MCP:** Native | **Skills:** No native support

Add MCP via Cline -> MCP Servers -> Edit. Paste SKILL.md into `.clinerules`.

---

### Continue.dev

**MCP:** Native | **Skills:** No native support

Create `.continue/mcpServers/dokploy.json` with MCP config. Add SKILL.md to `.continue/rules/dokploy.md`.

---

### OpenAI Codex CLI

**MCP:** Native | **Skills:** Native (`.agents/skills/`)

```bash
codex mcp add dokploy-fullapi-proxy \
  -- npx -y mcp-dokploy-fullapi-proxy
```

Copy skills: `cp skill/*.md .agents/skills/dokploy-api/`

---

### Zed

**MCP:** Native | **Skills:** No native support

Add to Zed `settings.json` under `context_servers`. Use `AGENTS.md` for skill workaround.

---

### Google Antigravity

**MCP:** Native | **Skills:** No native support

Add to `~/.gemini/settings.json`. Use `GEMINI.md` for skill workaround.

---

### Roo Code

**MCP:** Native | **Skills:** No native support

Configure via MCP settings panel. Add SKILL.md to `.roo/rules/`.


---

## Compatibility Matrix

| Tool | MCP | Native Skills | Skill Workaround | Config Location |
|------|:---:|:---:|:---:|---|
| **Claude Desktop / Claude.ai** | Yes | ZIP Upload | - | `claude_desktop_config.json` |
| **Claude Code** | Yes | `.claude/skills/` | - | `.mcp.json` |
| **Cursor** | Yes | Agent Skills | `.cursor/rules/*.mdc` | `.cursor/mcp.json` |
| **Codex CLI** | Yes | `.agents/skills/` | - | `.codex/config.toml` |
| **Windsurf** | Yes | No | `.windsurf/rules/` | `~/.codeium/windsurf/mcp_config.json` |
| **VS Code + Copilot** | Yes | No | `.github/copilot-instructions.md` | `.vscode/mcp.json` |
| **Cline** | Yes | No | `.clinerules` | MCP Settings JSON |
| **Continue.dev** | Yes | No | `.continue/rules/` | `.continue/mcpServers/*.json` |
| **Zed** | Yes | No | `AGENTS.md` | `settings.json` |
| **Google Antigravity** | Yes | No | `GEMINI.md` / Rules | `~/.gemini/settings.json` |
| **Roo Code** | Yes | No | `.roo/rules/` | MCP Settings JSON |

---

## Skill files

The `skill/` directory contains API docs split by resource (auto-generated from Dokploy's OpenAPI spec):

| File | Endpoints | Coverage |
|------|-----------|----------|
| `SKILL.md` | - | Entry point, routing table |
| `project.md` | 14 | Projects & Environments |
| `app.md` | 29 | Applications |
| `compose.md` | 28 | Compose services |
| `domain.md` | 9 | Domains & SSL |
| `database.md` | 70 | PostgreSQL, MySQL, MariaDB, MongoDB, Redis |
| `deployment.md` | 12 | Deployments, Preview, Rollback |
| `docker.md` | 7 | Docker containers |
| `server.md` | 23 | Server, Cluster, Swarm |
| `notification.md` | 38 | Notifications |
| `settings.md` | 73 | Settings, Admin, Stripe, SSO |
| `user.md` | 27 | User & Organization |
| `git.md` | 30 | Git Providers |
| `infra.md` | 85 | Mounts, Redirects, Security, Ports, Backups, Certs, Registry, SSH, AI |

## Token comparison

| | Official Dokploy MCP | mcp-dokploy-fullapi-proxy |
|---|---|---|
| Tools registered | 67 | 1 |
| Permanent context tokens | ~35,000 | ~200 |
| API coverage | ~16% (67 of 436) | 100% (473 endpoints) |
| On-demand tokens per request | 0 | ~500-2,000 (1 skill file) |
| Typical savings | - | **77-92% fewer tokens** |

## How the skill system works

```
User: "Deploy my app"
  -> Claude reads SKILL.md routing table (~500 tokens)
  -> Claude reads app.md (~1,600 tokens)
  -> Claude calls: dokploy("application.deploy", { applicationId: "..." })
```

## pick - Response Filter

The `pick` parameter filters large API responses to only the fields you need:

```js
// Without pick: entire project tree (~50KB, ~10,000 tokens)
dokploy("project.all")

// With pick: only MySQL instances (~200 tokens)
dokploy("project.all", {}, { pick: ["mysqlId", "name", "appName"] })
```

Recursively traverses the JSON response, retains only matching field names, removes empty objects/arrays.

## Building the skill ZIP

```bash
# Windows
Compress-Archive -Path skill\* -DestinationPath dokploy-api.zip -Force

# macOS / Linux
cd skill && zip -r ../dokploy-api.zip . && cd ..
```

## Verify

Start a new conversation and ask:
```
Show me all Dokploy projects
```

With multi-instance:
```
Show me all projects on staging
```

## License

MIT
