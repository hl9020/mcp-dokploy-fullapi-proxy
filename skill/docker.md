# Docker

### docker.getContainers
```
dokploy("docker.getContainers", { serverId?: "..." })
```

### docker.restartContainer
```
dokploy("docker.restartContainer", { containerId: "..." })
```

### docker.getConfig
```
dokploy("docker.getConfig", { containerId: "...", serverId?: "..." })
```

### docker.getContainersByAppNameMatch
```
dokploy("docker.getContainersByAppNameMatch", { appName: "...", appType?: "...", serverId?: "..." })
```

### docker.getContainersByAppLabel
```
dokploy("docker.getContainersByAppLabel", { appName: "...", type: "...", serverId?: "..." })
```

### docker.getStackContainersByAppName
```
dokploy("docker.getStackContainersByAppName", { appName: "...", serverId?: "..." })
```

### docker.getServiceContainersByAppName
```
dokploy("docker.getServiceContainersByAppName", { appName: "...", serverId?: "..." })
```
