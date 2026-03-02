# Server, Cluster & Swarm

## Server

### server.create
```
dokploy("server.create", { name: "...", description: "...", ipAddress: "...", port: "...", username: "...", sshKeyId: "...", serverType: "..." })
```

### server.one
```
dokploy("server.one", { serverId: "..." })
```

### server.getDefaultCommand
```
dokploy("server.getDefaultCommand", { serverId: "..." })
```

### server.all
```
dokploy("server.all")
```

### server.count
```
dokploy("server.count")
```

### server.withSSHKey
```
dokploy("server.withSSHKey")
```

### server.buildServers
```
dokploy("server.buildServers")
```

### server.setup
```
dokploy("server.setup", { serverId: "..." })
```

### server.validate
```
dokploy("server.validate", { serverId: "..." })
```

### server.security
```
dokploy("server.security", { serverId: "..." })
```

### server.setupMonitoring
```
dokploy("server.setupMonitoring", { serverId: "...", metricsConfig: "..." })
```

### server.remove
```
dokploy("server.remove", { serverId: "..." })
```

### server.update
```
dokploy("server.update", { name: "...", description: "...", serverId: "...", ipAddress: "...", port: "...", username: "...", sshKeyId: "...", serverType: "...", command?: "..." })
```

### server.publicIp
```
dokploy("server.publicIp")
```

### server.getServerTime
```
dokploy("server.getServerTime")
```

### server.getServerMetrics
```
dokploy("server.getServerMetrics", { url: "...", token: "...", dataPoints: "..." })
```

## Cluster

### cluster.getNodes
```
dokploy("cluster.getNodes", { serverId?: "..." })
```

### cluster.removeWorker
```
dokploy("cluster.removeWorker", { nodeId: "...", serverId?: "..." })
```

### cluster.addWorker
```
dokploy("cluster.addWorker", { serverId?: "..." })
```

### cluster.addManager
```
dokploy("cluster.addManager", { serverId?: "..." })
```

## Swarm

### swarm.getNodes
```
dokploy("swarm.getNodes", { serverId?: "..." })
```

### swarm.getNodeInfo
```
dokploy("swarm.getNodeInfo", { nodeId: "...", serverId?: "..." })
```

### swarm.getNodeApps
```
dokploy("swarm.getNodeApps", { serverId?: "..." })
```
