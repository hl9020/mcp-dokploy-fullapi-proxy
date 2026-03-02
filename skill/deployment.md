# Deployments, Preview & Rollback

## Deployment

### deployment.all
```
dokploy("deployment.all", { applicationId: "..." })
```

### deployment.allByCompose
```
dokploy("deployment.allByCompose", { composeId: "..." })
```

### deployment.allByServer
```
dokploy("deployment.allByServer", { serverId: "..." })
```

### deployment.allByType
```
dokploy("deployment.allByType", { id: "...", type: "..." })
```

### deployment.killProcess
```
dokploy("deployment.killProcess", { deploymentId: "..." })
```

### deployment.removeDeployment
```
dokploy("deployment.removeDeployment", { deploymentId: "..." })
```

## Previewdeployment

### previewDeployment.all
```
dokploy("previewDeployment.all", { applicationId: "..." })
```

### previewDeployment.delete
```
dokploy("previewDeployment.delete", { previewDeploymentId: "..." })
```

### previewDeployment.one
```
dokploy("previewDeployment.one", { previewDeploymentId: "..." })
```

### previewDeployment.redeploy
```
dokploy("previewDeployment.redeploy", { previewDeploymentId: "...", title?: "...", description?: "..." })
```

## Rollback

### rollback.delete
```
dokploy("rollback.delete", { rollbackId: "..." })
```

### rollback.rollback
```
dokploy("rollback.rollback", { rollbackId: "..." })
```
