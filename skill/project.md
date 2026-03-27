# Project, Environment & Tags

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

### project.allForPermissions
```
dokploy("project.allForPermissions")
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

## Tag

### tag.create
```
dokploy("tag.create", { name: "...", color?: "..." })
```

### tag.all
```
dokploy("tag.all")
```

### tag.one
```
dokploy("tag.one", { tagId: "..." })
```

### tag.update
```
dokploy("tag.update", { tagId: "...", name?: "...", color?: "...", createdAt?: "...", organizationId?: "..." })
```

### tag.remove
```
dokploy("tag.remove", { tagId: "..." })
```

### tag.assignToProject
```
dokploy("tag.assignToProject", { projectId: "...", tagId: "..." })
```

### tag.removeFromProject
```
dokploy("tag.removeFromProject", { projectId: "...", tagId: "..." })
```

### tag.bulkAssign
```
dokploy("tag.bulkAssign", { projectId: "...", tagIds: "..." })
```
