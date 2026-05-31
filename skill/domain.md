# Domain & SSL

> **Note:** There is NO `domain.all`. To list domains, use `project.all` with `pick: ["domainId", "host", "applicationId"]`.


### domain.create
```
dokploy("domain.create", { host: "...", path?: "...", port?: "...", customEntrypoint?: "...", https?: "...", applicationId?: "...", certificateType?: "...", customCertResolver?: "...", composeId?: "...", serviceName?: "...", domainType?: "...", previewDeploymentId?: "...", internalPath?: "...", stripPath?: "...", middlewares?: "..." })
```

### domain.byApplicationId
```
dokploy("domain.byApplicationId", { applicationId: "..." })
```

### domain.byComposeId
```
dokploy("domain.byComposeId", { composeId: "..." })
```

### domain.generateDomain
```
dokploy("domain.generateDomain", { appName: "...", serverId?: "..." })
```

### domain.canGenerateTraefikMeDomains
```
dokploy("domain.canGenerateTraefikMeDomains", { serverId: "..." })
```

### domain.update
```
dokploy("domain.update", { host: "...", domainId: "...", path?: "...", port?: "...", customEntrypoint?: "...", https?: "...", certificateType?: "...", customCertResolver?: "...", serviceName?: "...", domainType?: "...", internalPath?: "...", stripPath?: "...", middlewares?: "..." })
```

### domain.one
```
dokploy("domain.one", { domainId: "..." })
```

### domain.delete
```
dokploy("domain.delete", { domainId: "..." })
```

### domain.validateDomain
```
dokploy("domain.validateDomain", { domain: "...", serverIp?: "..." })
```
