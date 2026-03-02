# Application

> **Note:** There is NO `application.all`. To list applications, use `project.all` with `pick: ["applicationId", "name", "appName", "applicationStatus"]`.


### application.create
```
dokploy("application.create", { name: "...", environmentId: "...", appName?: "...", description?: "...", serverId?: "..." })
```

### application.one
```
dokploy("application.one", { applicationId: "..." })
```

### application.reload
```
dokploy("application.reload", { appName: "...", applicationId: "..." })
```

### application.delete
```
dokploy("application.delete", { applicationId: "..." })
```

### application.stop
```
dokploy("application.stop", { applicationId: "..." })
```

### application.start
```
dokploy("application.start", { applicationId: "..." })
```

### application.redeploy
```
dokploy("application.redeploy", { applicationId: "...", title?: "...", description?: "..." })
```

### application.saveEnvironment
```
dokploy("application.saveEnvironment", { applicationId: "...", env: "...", buildArgs: "...", buildSecrets: "...", createEnvFile: "..." })
```

### application.saveBuildType
```
dokploy("application.saveBuildType", { applicationId: "...", buildType: "...", dockerfile: "...", dockerContextPath: "...", dockerBuildStage: "...", herokuVersion: "...", railpackVersion: "...", publishDirectory?: "...", isStaticSpa?: "..." })
```

### application.saveGithubProvider
```
dokploy("application.saveGithubProvider", { applicationId: "...", repository: "...", branch: "...", owner: "...", buildPath: "...", githubId: "...", watchPaths: "...", enableSubmodules: "...", triggerType?: "..." })
```

### application.saveGitlabProvider
```
dokploy("application.saveGitlabProvider", { applicationId: "...", gitlabBranch: "...", gitlabBuildPath: "...", gitlabOwner: "...", gitlabRepository: "...", gitlabId: "...", gitlabProjectId: "...", gitlabPathNamespace: "...", watchPaths: "...", enableSubmodules: "..." })
```

### application.saveBitbucketProvider
```
dokploy("application.saveBitbucketProvider", { bitbucketBranch: "...", bitbucketBuildPath: "...", bitbucketOwner: "...", bitbucketRepository: "...", bitbucketRepositorySlug: "...", bitbucketId: "...", applicationId: "...", watchPaths: "...", enableSubmodules: "..." })
```

### application.saveGiteaProvider
```
dokploy("application.saveGiteaProvider", { applicationId: "...", giteaBranch: "...", giteaBuildPath: "...", giteaOwner: "...", giteaRepository: "...", giteaId: "...", watchPaths: "...", enableSubmodules: "..." })
```

### application.saveDockerProvider
```
dokploy("application.saveDockerProvider", { dockerImage: "...", applicationId: "...", username: "...", password: "...", registryUrl: "..." })
```

### application.saveGitProvider
```
dokploy("application.saveGitProvider", { customGitBranch: "...", applicationId: "...", customGitBuildPath: "...", customGitUrl: "...", watchPaths: "...", enableSubmodules: "...", customGitSSHKeyId?: "..." })
```

### application.disconnectGitProvider
```
dokploy("application.disconnectGitProvider", { applicationId: "..." })
```

### application.markRunning
```
dokploy("application.markRunning", { applicationId: "..." })
```

### application.update
```
dokploy("application.update", { applicationId: "...", name?: "...", appName?: "...", description?: "...", env?: "...", previewEnv?: "...", watchPaths?: "...", previewBuildArgs?: "...", previewBuildSecrets?: "...", previewLabels?: "...", previewWildcard?: "...", previewPort?: "...", previewHttps?: "...", previewPath?: "...", previewCertificateType?: "...", previewCustomCertResolver?: "...", previewLimit?: "...", isPreviewDeploymentsActive?: "...", previewRequireCollaboratorPermissions?: "...", rollbackActive?: "...", buildArgs?: "...", buildSecrets?: "...", memoryReservation?: "...", memoryLimit?: "...", cpuReservation?: "...", cpuLimit?: "...", title?: "...", enabled?: "...", subtitle?: "...", command?: "...", args?: "...", refreshToken?: "...", sourceType?: "...", cleanCache?: "...", repository?: "...", owner?: "...", branch?: "...", buildPath?: "...", triggerType?: "...", autoDeploy?: "...", gitlabProjectId?: "...", gitlabRepository?: "...", gitlabOwner?: "...", gitlabBranch?: "...", gitlabBuildPath?: "...", gitlabPathNamespace?: "...", giteaRepository?: "...", giteaOwner?: "...", giteaBranch?: "...", giteaBuildPath?: "...", bitbucketRepository?: "...", bitbucketRepositorySlug?: "...", bitbucketOwner?: "...", bitbucketBranch?: "...", bitbucketBuildPath?: "...", username?: "...", password?: "...", dockerImage?: "...", registryUrl?: "...", customGitUrl?: "...", customGitBranch?: "...", customGitBuildPath?: "...", customGitSSHKeyId?: "...", enableSubmodules?: "...", dockerfile?: "...", dockerContextPath?: "...", dockerBuildStage?: "...", dropBuildPath?: "...", healthCheckSwarm?: "...", restartPolicySwarm?: "...", placementSwarm?: "...", updateConfigSwarm?: "...", rollbackConfigSwarm?: "...", modeSwarm?: "...", labelsSwarm?: "...", networkSwarm?: "...", stopGracePeriodSwarm?: "...", endpointSpecSwarm?: "...", ulimitsSwarm?: "...", replicas?: "...", applicationStatus?: "...", buildType?: "...", railpackVersion?: "...", herokuVersion?: "...", publishDirectory?: "...", isStaticSpa?: "...", createEnvFile?: "...", createdAt?: "...", registryId?: "...", rollbackRegistryId?: "...", environmentId?: "...", githubId?: "...", gitlabId?: "...", giteaId?: "...", bitbucketId?: "...", buildServerId?: "...", buildRegistryId?: "..." })
```

### application.refreshToken
```
dokploy("application.refreshToken", { applicationId: "..." })
```

### application.deploy
```
dokploy("application.deploy", { applicationId: "...", title?: "...", description?: "..." })
```

### application.cleanQueues
```
dokploy("application.cleanQueues", { applicationId: "..." })
```

### application.clearDeployments
```
dokploy("application.clearDeployments", { applicationId: "..." })
```

### application.killBuild
```
dokploy("application.killBuild", { applicationId: "..." })
```

### application.readTraefikConfig
```
dokploy("application.readTraefikConfig", { applicationId: "..." })
```

### application.updateTraefikConfig
```
dokploy("application.updateTraefikConfig", { applicationId: "...", traefikConfig: "..." })
```

### application.readAppMonitoring
```
dokploy("application.readAppMonitoring", { appName: "..." })
```

### application.move
```
dokploy("application.move", { applicationId: "...", targetEnvironmentId: "..." })
```

### application.cancelDeployment
```
dokploy("application.cancelDeployment", { applicationId: "..." })
```

### application.search
```
dokploy("application.search", { q?: "...", name?: "...", appName?: "...", description?: "...", repository?: "...", owner?: "...", dockerImage?: "...", projectId?: "...", environmentId?: "...", limit?: "...", offset?: "..." })
```
