# Docker

### docker.getContainers
```
dokploy("docker.getContainers", { serverId?: "..." })
```

### docker.restartContainer
```
dokploy("docker.restartContainer", { containerId: "...", serverId?: "..." })
```

### docker.startContainer
```
dokploy("docker.startContainer", { containerId: "...", serverId?: "..." })
```

### docker.stopContainer
```
dokploy("docker.stopContainer", { containerId: "...", serverId?: "..." })
```

### docker.killContainer
```
dokploy("docker.killContainer", { containerId: "...", serverId?: "..." })
```

### docker.removeContainer
```
dokploy("docker.removeContainer", { containerId: "...", serverId?: "..." })
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

### docker.uploadFileToContainer
```
dokploy("docker.uploadFileToContainer")
```
