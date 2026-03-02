# Project & Environment

## Project

### project.create
```
dokploy("project.create", { name: "...", description?: "...", env?: "..." })
```

### project.one
```
dokploy("project.one", { projectId: "..." })
```

### project.all
```
dokploy("project.all")
```

### project.search
```
dokploy("project.search", { q?: "...", name?: "...", description?: "...", limit?: "...", offset?: "..." })
```

### project.remove
```
dokploy("project.remove", { projectId: "..." })
```

### project.update
```
dokploy("project.update", { projectId: "...", name?: "...", description?: "...", createdAt?: "...", organizationId?: "...", env?: "..." })
```

### project.duplicate
```
dokploy("project.duplicate", { sourceEnvironmentId: "...", name: "...", description?: "...", includeServices?: "...", selectedServices?: "...", duplicateInSameProject?: "..." })
```

## Environment

### environment.create
```
dokploy("environment.create", { name: "...", projectId: "...", description?: "..." })
```

### environment.one
```
dokploy("environment.one", { environmentId: "..." })
```

### environment.byProjectId
```
dokploy("environment.byProjectId", { projectId: "..." })
```

### environment.remove
```
dokploy("environment.remove", { environmentId: "..." })
```

### environment.update
```
dokploy("environment.update", { environmentId: "...", name?: "...", description?: "...", projectId?: "...", env?: "..." })
```

### environment.duplicate
```
dokploy("environment.duplicate", { environmentId: "...", name: "...", description?: "..." })
```

### environment.search
```
dokploy("environment.search", { q?: "...", name?: "...", description?: "...", projectId?: "...", limit?: "...", offset?: "..." })
```
