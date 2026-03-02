---
name: dokploy-api
description: >
  Use this skill when the user asks to manage Dokploy infrastructure: deploy apps,
  manage compose services, configure domains, databases, servers, notifications,
  users, git providers, or any Dokploy administration task. Provides complete API
  reference for all 445 Dokploy tRPC endpoints accessible via the dokploy MCP tool.
---

# Dokploy MCP Light - API Skill

## Tool
One single MCP tool: `dokploy(method, params?)`
- `method`: tRPC path like `project.all`, `application.deploy`
- `params`: JSON object with parameters (optional for GET endpoints)

## Routing
Read the matching reference file for the task:

| Task | File | Endpoints |
|------|------|-----------|
| Projects & Environments | `project.md` | 14 |
| Applications (Deploy, Config, Git, Traefik) | `app.md` | 29 |
| Compose Services | `compose.md` | 28 |
| Domains & SSL | `domain.md` | 9 |
| Databases (PG, MySQL, MariaDB, Mongo, Redis) | `database.md` | 70 |
| Deployments, Preview, Rollback | `deployment.md` | 12 |
| Docker Container | `docker.md` | 7 |
| Server, Cluster, Swarm | `server.md` | 23 |
| Notifications (Slack, Discord, Telegram, Email, ...) | `notification.md` | 38 |
| Settings, Admin, Stripe | `settings.md` | 73 |
| User & Organization | `user.md` | 27 |
| Git Providers (GitHub, GitLab, Bitbucket, Gitea) | `git.md` | 30 |
| Mounts, Redirects, Security, Ports, Backups, Schedule, Certs, Registry, SSH, Destinations, Patches, Volume Backups, AI | `infra.md` | 85 |

## Examples
```
dokploy("project.all")
dokploy("application.deploy", { applicationId: "abc123" })
dokploy("compose.update", { composeId: "xyz", composeFile: "..." })
dokploy("postgres.create", { name: "mydb", environmentId: "..." })
```

## Notes
- GET endpoints (*.all, *.one, etc.): no params or query params required
- POST endpoints (*.create, *.update, *.deploy, etc.): params as JSON body
- IDs are always strings
- Environment variables as multiline string: "KEY=val\nKEY2=val2"
- On errors: read the API error message and correct params

## pick - Response Filter (Token Optimization)
Optional `pick` parameter filters the API response clientside to specific fields.
Use this to avoid token waste on large responses like `project.all`.

**Syntax:** `pick: ["field1", "field2"]`

**How it works:** Recursively traverses the entire JSON structure and retains only objects/arrays
containing the specified field names. Empty objects/arrays are removed.

**Typical use cases:**
```
// Extract only MySQL instances from all projects
dokploy("project.all", {}, pick: ["mysqlId", "name", "appName", "externalPort", "applicationStatus"])

// Only Postgres IDs and names
dokploy("project.all", {}, pick: ["postgresId", "name"])

// Backups of a MySQL instance - only essential fields
dokploy("mysql.one", { mysqlId: "..." }, pick: ["backupId", "schedule", "enabled", "database", "deployments"])
```

**When to use pick:**
- `project.all` -> ALWAYS use pick when looking for a specific resource type (mysql, postgres, redis, etc.)
- There is NO `mysql.all`, `postgres.all` etc. — `project.all` with pick is the only way to list DB instances
- `mysql.one` / `postgres.one` -> when only a sub-section (backups, mounts, etc.) is needed
- Any endpoint returning large nested objects
