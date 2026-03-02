# mcp-dokploy-fullapi-proxy

> **Dokploy Version: `v0.28.2` — 445 Endpoints** _(last updated: 2026-03-02)_

Full API proxy MCP for the entire Dokploy API. **1 tool, ~200 tokens** instead of 67+ tools consuming ~35,000 tokens per conversation.

## How it works

A single MCP tool `dokploy(method, params?)` acts as a thin proxy to Dokploy's tRPC API. All intelligence lives in skill files that Claude reads on-demand via **Progressive Disclosure** – only the relevant API section is loaded into context, saving 77–92% tokens per request.

## Setup

```bash
npx -y mcp-dokploy-fullapi-proxy
```

## Configuration

> **Architecture:** This MCP uses a two-part setup:
> 1. **MCP Server** – gives the AI tool access to the `dokploy()` function
> 2. **Skill/Instructions** – teaches the AI *which* endpoints exist and *how* to call them
>
> Without the skill, the AI has the tool but doesn't know the API. Tools that support native skill files get Progressive Disclosure (on-demand loading). Tools without skill support need the SKILL.md content injected as instructions (higher baseline token cost but still far better than 67 individual tools).

---

### Claude Desktop / Claude.ai

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ✅ Native (ZIP upload)

#### 1. MCP Server

Add to `claude_desktop_config.json`:
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

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
2. Go to **Claude.ai / Claude Desktop → Customize → Skills**
3. Click **+** and upload `dokploy-api.zip`


Get your API token from Dokploy: **Settings → Profile → API/Token Section**.

---

### Claude Code

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ✅ Native (`.claude/skills/` directory)

#### 1. MCP Server

```bash
claude mcp add dokploy-fullapi-proxy \
  -e DOKPLOY_URL=https://your-dokploy-instance.com/api \
  -e DOKPLOY_TOKEN=your-api-token \
  -- npx -y mcp-dokploy-fullapi-proxy
```

Or add to `.mcp.json` in your project root (Windows: use `cmd /c` wrapper):

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

#### 2. Skills

Copy the `skill/` directory into your project's Claude Code skills folder:

```bash
mkdir -p .claude/skills/dokploy-api
cp skill/*.md .claude/skills/dokploy-api/
```

Claude Code uses Progressive Disclosure from `.claude/skills/` automatically – it reads `SKILL.md` first, then loads the relevant reference file on demand.

---

### Cursor

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ✅ Agent Skills (auto-discovered)

#### 1. MCP Server

Add to `~/.cursor/mcp.json` (global) or `.cursor/mcp.json` (project):

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

#### 2. Skills

Cursor supports **Agent Skills** – an open standard for extending AI agents. Copy the skill files into your project:

```bash
mkdir -p .cursor/skills/dokploy-api
cp skill/*.md .cursor/skills/dokploy-api/
```

Cursor auto-discovers skills and applies them as agent-decided rules. Enable under **Settings → Rules → Import Settings → Agent Skills**.

Alternatively, create a `.cursor/rules/dokploy.mdc` rule:

```markdown
---
description: Use when managing Dokploy infrastructure
alwaysApply: false
---
[Paste contents of skill/SKILL.md here]
```

---

### Windsurf

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ❌ No native support (use Rules workaround)

#### 1. MCP Server

Add to `~/.codeium/windsurf/mcp_config.json` (Windows: `%USERPROFILE%\.codeium\windsurf\mcp_config.json`):

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


#### 2. Skill Workaround (Global Rule)

Create a global or workspace rule via **Settings → Rules, Memories & Workflows → Rules → + Global** (or `+ Workspace`), or create `.windsurf/rules/dokploy.md`:

```markdown
## Dokploy MCP API Reference

When managing Dokploy infrastructure, use the `dokploy(method, params?)` MCP tool.

[Paste contents of skill/SKILL.md here]
```

---

### VS Code + GitHub Copilot

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ❌ No native support (use Instructions workaround)

#### 1. MCP Server

Add to `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
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

#### 2. Skill Workaround (Copilot Instructions)

Create `.github/copilot-instructions.md` in your project root and paste the contents of `skill/SKILL.md`.

---

### Cline (VS Code Extension)

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ❌ No native support (use .clinerules workaround)

#### 1. MCP Server

Open Cline → **MCP Servers** icon → **Edit MCP Settings**, then add:

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

#### 2. Skill Workaround (.clinerules)

Create a `.clinerules` file in your project root and paste the contents of `skill/SKILL.md`. Cline injects this into every conversation as custom instructions.

---

### Continue.dev

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ❌ No native support (use Rules workaround)

#### 1. MCP Server

Create `.continue/mcpServers/dokploy.json`:

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

#### 2. Skill Workaround (Rules)

Add a `.continue/rules/dokploy.md` rule with the contents of `skill/SKILL.md`. Continue applies rules as persistent context for the model.

---

### OpenAI Codex CLI

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ✅ Native (`.agents/skills/` directory)

#### 1. MCP Server

```bash
codex mcp add dokploy-fullapi-proxy \
  --env DOKPLOY_URL=https://your-dokploy-instance.com/api \
  --env DOKPLOY_TOKEN=your-api-token \
  -- npx -y mcp-dokploy-fullapi-proxy
```

Or add to `~/.codex/config.toml` (global) or `.codex/config.toml` (project):

```toml
[mcp_servers.dokploy-fullapi-proxy]
command = "npx"
args = ["-y", "mcp-dokploy-fullapi-proxy"]

[mcp_servers.dokploy-fullapi-proxy.env]
DOKPLOY_URL = "https://your-dokploy-instance.com/api"
DOKPLOY_TOKEN = "your-api-token"
```

#### 2. Skills

Copy the `skill/` directory into `.agents/skills/`:

```bash
mkdir -p .agents/skills/dokploy-api
cp skill/*.md .agents/skills/dokploy-api/
```

Codex discovers skills from `.agents/skills/` automatically via `AGENTS.md`.


---

### Zed

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ❌ No native support (use AGENTS.md workaround)

#### 1. MCP Server

Add to Zed `settings.json` (via **Agent Panel → Settings**):

```json
{
  "context_servers": {
    "dokploy-fullapi-proxy": {
      "command": {
        "path": "npx",
        "args": ["-y", "mcp-dokploy-fullapi-proxy"],
        "env": {
          "DOKPLOY_URL": "https://your-dokploy-instance.com/api",
          "DOKPLOY_TOKEN": "your-api-token"
        }
      }
    }
  }
}
```

#### 2. Skill Workaround

Create an `AGENTS.md` file in your project root and include the contents of `skill/SKILL.md`. Zed's agent reads `AGENTS.md` for project instructions.

---

### Google Antigravity

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ❌ No native support (use Rules workaround)

#### 1. MCP Server

Add to `~/.gemini/settings.json` or via **Antigravity Settings → MCP**:

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

#### 2. Skill Workaround

Create a `GEMINI.md` or project rules file and include the contents of `skill/SKILL.md`.

---

### Roo Code (VS Code Extension)

**MCP:** ✅ Native &nbsp;|&nbsp; **Skills:** ❌ No native support (use Custom Instructions workaround)

#### 1. MCP Server

Configure via Roo Code's MCP settings panel, same JSON format as Cline:

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

#### 2. Skill Workaround

Add the contents of `skill/SKILL.md` to Roo Code's custom system prompt or `.roo/rules/` directory.

---

## Compatibility Matrix

| Tool | MCP Server | Native Skills | Skill Workaround | Config Location |
|------|:---:|:---:|:---:|---|
| **Claude Desktop / Claude.ai** | ✅ | ✅ ZIP Upload | – | `claude_desktop_config.json` |
| **Claude Code** | ✅ | ✅ `.claude/skills/` | – | `.mcp.json` |
| **Cursor** | ✅ | ✅ Agent Skills | `.cursor/rules/*.mdc` | `.cursor/mcp.json` |
| **Codex CLI** | ✅ | ✅ `.agents/skills/` | – | `.codex/config.toml` |
| **Windsurf** | ✅ | ❌ | `.windsurf/rules/` | `~/.codeium/windsurf/mcp_config.json` |
| **VS Code + Copilot** | ✅ | ❌ | `.github/copilot-instructions.md` | `.vscode/mcp.json` |
| **Cline** | ✅ | ❌ | `.clinerules` | MCP Settings JSON |
| **Continue.dev** | ✅ | ❌ | `.continue/rules/` | `.continue/mcpServers/*.json` |
| **Zed** | ✅ | ❌ | `AGENTS.md` | `settings.json` |
| **Google Antigravity** | ✅ | ❌ | `GEMINI.md` / Rules | `~/.gemini/settings.json` |
| **Roo Code** | ✅ | ❌ | `.roo/rules/` | MCP Settings JSON |

> **Legend:** Tools with native skill support get Progressive Disclosure (on-demand file loading, ~500–2,000 tokens per request). Tools without skills load the full SKILL.md as instructions (~500 tokens always-on, without the granular per-resource files).

---

## Skill files

The `skill/` directory contains API documentation split by resource (auto-generated from Dokploy's OpenAPI spec). Claude reads only the relevant section when needed:

| File | Endpoints | Coverage |
|------|-----------|----------|
| `SKILL.md` | – | Entry point, routing table |
| `project.md` | 14 | Projects & Environments |
| `app.md` | 29 | Applications |
| `compose.md` | 28 | Compose services |
| `domain.md` | 9 | Domains & SSL |
| `database.md` | 70 | PostgreSQL, MySQL, MariaDB, MongoDB, Redis |
| `deployment.md` | 12 | Deployments, Preview, Rollback |
| `docker.md` | 7 | Docker containers |
| `server.md` | 23 | Server, Cluster, Swarm |
| `notification.md` | 38 | Notifications (Slack, Discord, Telegram, Email, Teams, Resend, ...) |
| `settings.md` | 73 | Settings, Admin, Stripe, SSO, LicenseKey |
| `user.md` | 27 | User & Organization |
| `git.md` | 30 | Git Providers (GitHub, GitLab, Bitbucket, Gitea) |
| `infra.md` | 85 | Mounts, Redirects, Security, Ports, Backups, Schedule, Certs, Registry, SSH, AI |

## Token comparison

| | Official Dokploy MCP | mcp-dokploy-fullapi-proxy |
|---|---|---|
| Tools registered | 67 | 1 |
| Permanent context tokens | ~35,000 | ~200 |
| API coverage | ~16% (67 of 436 endpoints) | 100% (445 endpoints) |
| On-demand tokens per request | 0 | ~500–2,000 (1 skill file) |
| Typical savings | – | **77–92% fewer tokens** |


## How the skill system works

```
User: "Deploy my app"
  ↓
Claude reads SKILL.md routing table (~500 tokens)
  ↓
Claude reads app.md (~1,600 tokens)
  ↓
Claude calls: dokploy("application.deploy", { applicationId: "..." })
```

Instead of loading all 445 endpoint definitions (~15,500 tokens) into every conversation, Claude loads only what's needed. A typical request costs ~2,100 tokens instead of ~15,500.

## Building the skill ZIP

```bash
# Windows (PowerShell)
Compress-Archive -Path skill\* -DestinationPath dokploy-api.zip -Force

# macOS / Linux
cd skill && zip -r ../dokploy-api.zip . && cd ..
```

## Environment variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `DOKPLOY_URL` | No | `http://localhost:3000/api` | Dokploy API base URL |
| `DOKPLOY_TOKEN` | Yes | – | API authentication token |

Get your API token from Dokploy: **Settings → Profile → API/Token Section**.

## pick - Response Filter

The `pick` parameter filters large API responses clientside to only the fields you need — drastically reducing token usage on endpoints like `project.all`.

```js
// Without pick: returns entire project tree (~50KB, ~10,000 tokens)
dokploy("project.all")

// With pick: returns only MySQL instances (~200 tokens)
dokploy("project.all", {}, pick: ["mysqlId", "name", "appName", "applicationStatus"])

// Get backup info without noise
dokploy("mysql.one", { mysqlId: "..." }, pick: ["backupId", "schedule", "enabled", "database"])
```

**How it works:** Recursively traverses the JSON response and retains only nodes that contain the specified field names. Empty objects/arrays are removed automatically.

**When to use it:**
- `project.all` → always use `pick` when looking for a specific resource type
- `*.one` endpoints → when only a sub-section (backups, mounts, etc.) is needed
- Any endpoint returning large nested objects

## Verify

Start a new conversation and ask:
```
Show me all Dokploy projects
```
The AI should call `dokploy("project.all")`.

## License

MIT
