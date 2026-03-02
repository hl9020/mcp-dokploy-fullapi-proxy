# Settings, Admin & Stripe

## Settings

### settings.getWebServerSettings
```
dokploy("settings.getWebServerSettings")
```

### settings.reloadServer
```
dokploy("settings.reloadServer")
```

### settings.cleanRedis
```
dokploy("settings.cleanRedis")
```

### settings.reloadRedis
```
dokploy("settings.reloadRedis")
```

### settings.cleanAllDeploymentQueue
```
dokploy("settings.cleanAllDeploymentQueue")
```

### settings.reloadTraefik
```
dokploy("settings.reloadTraefik", { serverId?: "..." })
```

### settings.toggleDashboard
```
dokploy("settings.toggleDashboard", { enableDashboard?: "...", serverId?: "..." })
```

### settings.cleanUnusedImages
```
dokploy("settings.cleanUnusedImages", { serverId?: "..." })
```

### settings.cleanUnusedVolumes
```
dokploy("settings.cleanUnusedVolumes", { serverId?: "..." })
```

### settings.cleanStoppedContainers
```
dokploy("settings.cleanStoppedContainers", { serverId?: "..." })
```

### settings.cleanDockerBuilder
```
dokploy("settings.cleanDockerBuilder", { serverId?: "..." })
```

### settings.cleanDockerPrune
```
dokploy("settings.cleanDockerPrune", { serverId?: "..." })
```

### settings.cleanAll
```
dokploy("settings.cleanAll", { serverId?: "..." })
```

### settings.cleanMonitoring
```
dokploy("settings.cleanMonitoring")
```

### settings.saveSSHPrivateKey
```
dokploy("settings.saveSSHPrivateKey", { sshPrivateKey: "..." })
```

### settings.assignDomainServer
```
dokploy("settings.assignDomainServer", { host: "...", certificateType: "...", letsEncryptEmail?: "...", https?: "..." })
```

### settings.cleanSSHPrivateKey
```
dokploy("settings.cleanSSHPrivateKey")
```

### settings.updateDockerCleanup
```
dokploy("settings.updateDockerCleanup", { enableDockerCleanup: "...", serverId?: "..." })
```

### settings.readTraefikConfig
```
dokploy("settings.readTraefikConfig")
```

### settings.updateTraefikConfig
```
dokploy("settings.updateTraefikConfig", { traefikConfig: "..." })
```

### settings.readWebServerTraefikConfig
```
dokploy("settings.readWebServerTraefikConfig")
```

### settings.updateWebServerTraefikConfig
```
dokploy("settings.updateWebServerTraefikConfig", { traefikConfig: "..." })
```

### settings.readMiddlewareTraefikConfig
```
dokploy("settings.readMiddlewareTraefikConfig")
```

### settings.updateMiddlewareTraefikConfig
```
dokploy("settings.updateMiddlewareTraefikConfig", { traefikConfig: "..." })
```

### settings.getUpdateData
```
dokploy("settings.getUpdateData")
```

### settings.updateServer
```
dokploy("settings.updateServer")
```

### settings.getDokployVersion
```
dokploy("settings.getDokployVersion")
```

### settings.getReleaseTag
```
dokploy("settings.getReleaseTag")
```

### settings.readDirectories
```
dokploy("settings.readDirectories", { serverId?: "..." })
```

### settings.updateTraefikFile
```
dokploy("settings.updateTraefikFile", { path: "...", traefikConfig: "...", serverId?: "..." })
```

### settings.readTraefikFile
```
dokploy("settings.readTraefikFile", { path: "...", serverId?: "..." })
```

### settings.getIp
```
dokploy("settings.getIp")
```

### settings.updateServerIp
```
dokploy("settings.updateServerIp", { serverIp: "..." })
```

### settings.getOpenApiDocument
```
dokploy("settings.getOpenApiDocument")
```

### settings.readTraefikEnv
```
dokploy("settings.readTraefikEnv", { serverId?: "..." })
```

### settings.writeTraefikEnv
```
dokploy("settings.writeTraefikEnv", { env: "...", serverId?: "..." })
```

### settings.haveTraefikDashboardPortEnabled
```
dokploy("settings.haveTraefikDashboardPortEnabled", { serverId?: "..." })
```

### settings.haveActivateRequests
```
dokploy("settings.haveActivateRequests")
```

### settings.toggleRequests
```
dokploy("settings.toggleRequests", { enable: "..." })
```

### settings.isCloud
```
dokploy("settings.isCloud")
```

### settings.isUserSubscribed
```
dokploy("settings.isUserSubscribed")
```

### settings.health
```
dokploy("settings.health")
```

### settings.setupGPU
```
dokploy("settings.setupGPU", { serverId?: "..." })
```

### settings.checkGPUStatus
```
dokploy("settings.checkGPUStatus", { serverId?: "..." })
```

### settings.updateTraefikPorts
```
dokploy("settings.updateTraefikPorts", { additionalPorts: "...", serverId?: "..." })
```

### settings.getTraefikPorts
```
dokploy("settings.getTraefikPorts", { serverId?: "..." })
```

### settings.updateLogCleanup
```
dokploy("settings.updateLogCleanup", { cronExpression: "..." })
```

### settings.getLogCleanupStatus
```
dokploy("settings.getLogCleanupStatus")
```

### settings.getDokployCloudIps
```
dokploy("settings.getDokployCloudIps")
```

## Admin

### admin.setupMonitoring
```
dokploy("admin.setupMonitoring", { metricsConfig: "..." })
```

## Stripe

### stripe.getCurrentPlan
```
dokploy("stripe.getCurrentPlan")
```

### stripe.getProducts
```
dokploy("stripe.getProducts")
```

### stripe.createCheckoutSession
```
dokploy("stripe.createCheckoutSession", { tier: "...", productId: "...", serverQuantity: "...", isAnnual: "..." })
```

### stripe.createCustomerPortalSession
```
dokploy("stripe.createCustomerPortalSession")
```

### stripe.upgradeSubscription
```
dokploy("stripe.upgradeSubscription", { tier: "...", serverQuantity: "...", isAnnual: "..." })
```

### stripe.canCreateMoreServers
```
dokploy("stripe.canCreateMoreServers")
```

### stripe.getInvoices
```
dokploy("stripe.getInvoices")
```

## Sso

### sso.showSignInWithSSO
```
dokploy("sso.showSignInWithSSO")
```

### sso.listProviders
```
dokploy("sso.listProviders")
```

### sso.getTrustedOrigins
```
dokploy("sso.getTrustedOrigins")
```

### sso.one
```
dokploy("sso.one", { providerId: "..." })
```

### sso.update
```
dokploy("sso.update", { providerId: "...", issuer: "...", domains: "...", oidcConfig?: "...", samlConfig?: "...", organizationId?: "...", overrideUserInfo?: "..." })
```

### sso.deleteProvider
```
dokploy("sso.deleteProvider", { providerId: "..." })
```

### sso.register
```
dokploy("sso.register", { providerId: "...", issuer: "...", domains: "...", oidcConfig?: "...", samlConfig?: "...", organizationId?: "...", overrideUserInfo?: "..." })
```

### sso.addTrustedOrigin
```
dokploy("sso.addTrustedOrigin", { origin: "..." })
```

### sso.removeTrustedOrigin
```
dokploy("sso.removeTrustedOrigin", { origin: "..." })
```

### sso.updateTrustedOrigin
```
dokploy("sso.updateTrustedOrigin", { oldOrigin: "...", newOrigin: "..." })
```

## Licensekey

### licenseKey.activate
```
dokploy("licenseKey.activate", { licenseKey: "..." })
```

### licenseKey.validate
```
dokploy("licenseKey.validate")
```

### licenseKey.deactivate
```
dokploy("licenseKey.deactivate")
```

### licenseKey.getEnterpriseSettings
```
dokploy("licenseKey.getEnterpriseSettings")
```

### licenseKey.haveValidLicenseKey
```
dokploy("licenseKey.haveValidLicenseKey")
```

### licenseKey.updateEnterpriseSettings
```
dokploy("licenseKey.updateEnterpriseSettings", { enableEnterpriseFeatures?: "..." })
```
