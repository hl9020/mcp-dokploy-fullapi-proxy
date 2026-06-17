---
name: dokploy-api
description: >
  Use this skill when the user asks to manage Dokploy infrastructure: deploy apps,
  manage compose services, configure domains, databases, servers, notifications,
  users, git providers, or any Dokploy administration task. Provides complete API
  reference for all 526 Dokploy tRPC endpoints accessible via the dokploy MCP tool.
---

# Dokploy MCP Light - API Skill

## Tool
One single MCP tool: `dokploy(method, params?, pick?, instance?)`
- `method`: tRPC path like `project.all`, `application.deploy`
- `params`: JSON object with parameters (optional for GET endpoints)
- `pick`: optional array of field names to filter the response (see below)
- `instance`: optional target instance id (multi-instance setups, see below)

## Multi-Instance
The proxy can serve multiple Dokploy instances at once. When more than one is
configured, the tool description lists the available instance ids and the default.
- Omit `instance` -> the configured default instance is used.
- Pass `instance: "<id>"` to target a specific one.
- With a single instance configured, `instance` can be ignored entirely.
- Responses from a multi-instance setup are prefixed with `[<id>]`.
- Some setups require an explicit `instance` (no default). The tool description
  says so and a call without `instance` will error - always check the description
  and pass `instance` when targeting such a proxy.

## Routing
Read the matching reference file for the task:

| Task | File | Endpoints |
|------|------|-----------|
| Projects, Environments & Tags | `project.md` | 24 |
| Applications (Deploy, Config, Git, Traefik) | `app.md` | 31 |
| Compose Services | `compose.md` | 31 |
| Domains & SSL | `domain.md` | 9 |
| Databases (PG, MySQL, MariaDB, Mongo, Redis) | `database.md` | 94 |
| Deployments, Preview, Rollback | `deployment.md` | 15 |
| Docker Container | `docker.md` | 12 |
| Server, Cluster, Swarm | `server.md` | 25 |
| Notifications (Slack, Discord, Telegram, Email, ...) | `notification.md` | 41 |
| Settings, Admin, Stripe, Whitelabeling, Audit Log | `settings.md` | 81 |
| User, Organization & Custom Roles | `user.md` | 40 |
| Git Providers (GitHub, GitLab, Bitbucket, Gitea) | `git.md` | 32 |
| Mounts, Redirects, Security, Ports, Backups, Schedule, Certs, Registry, SSH, Destinations, Patches, Volume Backups, AI | `infra.md` | 91 |

## Examples
```
dokploy("project.all")
dokploy("application.deploy", { applicationId: "abc123" })
dokploy("compose.update", { composeId: "xyz", composeFile: "..." })
dokploy("postgres.create", { name: "mydb", environmentId: "..." })
dokploy("project.all", {}, undefined, "<instance-id>")   // target a specific instance
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
