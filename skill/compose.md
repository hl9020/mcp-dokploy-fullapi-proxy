# Compose

> **Note:** There is NO `compose.all`. To list compose services, use `project.all` with `pick: ["composeId", "name", "appName"]`.


### compose.create
```
dokploy("compose.create", { name: "...", environmentId: "...", description?: "...", composeType?: "...", appName?: "...", serverId?: "...", composeFile?: "..." })
```

### compose.one
```
dokploy("compose.one", { composeId: "..." })
```

### compose.update
```
dokploy("compose.update", { composeId: "...", name?: "...", appName?: "...", description?: "...", env?: "...", composeFile?: "...", refreshToken?: "...", sourceType?: "...", composeType?: "...", repository?: "...", owner?: "...", branch?: "...", autoDeploy?: "...", gitlabProjectId?: "...", gitlabRepository?: "...", gitlabOwner?: "...", gitlabBranch?: "...", gitlabPathNamespace?: "...", bitbucketRepository?: "...", bitbucketRepositorySlug?: "...", bitbucketOwner?: "...", bitbucketBranch?: "...", giteaRepository?: "...", giteaOwner?: "...", giteaBranch?: "...", customGitUrl?: "...", customGitBranch?: "...", customGitSSHKeyId?: "...", command?: "...", enableSubmodules?: "...", composePath?: "...", suffix?: "...", randomize?: "...", isolatedDeployment?: "...", isolatedDeploymentsVolume?: "...", triggerType?: "...", composeStatus?: "...", environmentId?: "...", createdAt?: "...", watchPaths?: "...", githubId?: "...", gitlabId?: "...", bitbucketId?: "...", giteaId?: "..." })
```

### compose.delete
```
dokploy("compose.delete", { composeId: "...", deleteVolumes: "..." })
```

### compose.cleanQueues
```
dokploy("compose.cleanQueues", { composeId: "..." })
```

### compose.clearDeployments
```
dokploy("compose.clearDeployments", { composeId: "..." })
```

### compose.killBuild
```
dokploy("compose.killBuild", { composeId: "..." })
```

### compose.loadServices
```
dokploy("compose.loadServices", { composeId: "...", type?: "..." })
```

### compose.loadMountsByService
```
dokploy("compose.loadMountsByService", { composeId: "...", serviceName: "..." })
```

### compose.fetchSourceType
```
dokploy("compose.fetchSourceType", { composeId: "..." })
```

### compose.randomizeCompose
```
dokploy("compose.randomizeCompose", { composeId: "...", suffix?: "..." })
```

### compose.isolatedDeployment
```
dokploy("compose.isolatedDeployment", { composeId: "...", suffix?: "..." })
```

### compose.getConvertedCompose
```
dokploy("compose.getConvertedCompose", { composeId: "..." })
```

### compose.deploy
```
dokploy("compose.deploy", { composeId: "...", title?: "...", description?: "..." })
```

### compose.redeploy
```
dokploy("compose.redeploy", { composeId: "...", title?: "...", description?: "..." })
```

### compose.stop
```
dokploy("compose.stop", { composeId: "..." })
```

### compose.start
```
dokploy("compose.start", { composeId: "..." })
```

### compose.getDefaultCommand
```
dokploy("compose.getDefaultCommand", { composeId: "..." })
```

### compose.refreshToken
```
dokploy("compose.refreshToken", { composeId: "..." })
```

### compose.deployTemplate
```
dokploy("compose.deployTemplate", { environmentId: "...", id: "...", serverId?: "...", baseUrl?: "..." })
```

### compose.templates
```
dokploy("compose.templates", { baseUrl?: "..." })
```

### compose.getTags
```
dokploy("compose.getTags", { baseUrl?: "..." })
```

### compose.disconnectGitProvider
```
dokploy("compose.disconnectGitProvider", { composeId: "..." })
```

### compose.move
```
dokploy("compose.move", { composeId: "...", targetEnvironmentId: "..." })
```

### compose.processTemplate
```
dokploy("compose.processTemplate", { base64: "...", composeId: "..." })
```

### compose.import
```
dokploy("compose.import", { base64: "...", composeId: "..." })
```

### compose.cancelDeployment
```
dokploy("compose.cancelDeployment", { composeId: "..." })
```

### compose.search
```
dokploy("compose.search", { q?: "...", name?: "...", appName?: "...", description?: "...", projectId?: "...", environmentId?: "...", limit?: "...", offset?: "..." })
```
