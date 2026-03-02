# Infrastructure

> **Note:** There is NO `backup.all`, `port.all`, `redirect.all` etc. To find these, use `project.all` with pick or fetch via the parent resource (e.g. `mysql.one`, `application.one`).


## Mounts

### mounts.create
```
dokploy("mounts.create", { type: "...", mountPath: "...", serviceId: "...", hostPath?: "...", volumeName?: "...", content?: "...", serviceType?: "...", filePath?: "..." })
```

### mounts.remove
```
dokploy("mounts.remove", { mountId: "..." })
```

### mounts.one
```
dokploy("mounts.one", { mountId: "..." })
```

### mounts.update
```
dokploy("mounts.update", { mountId: "...", type?: "...", hostPath?: "...", volumeName?: "...", filePath?: "...", content?: "...", serviceType?: "...", mountPath?: "...", applicationId?: "...", postgresId?: "...", mariadbId?: "...", mongoId?: "...", mysqlId?: "...", redisId?: "...", composeId?: "..." })
```

### mounts.allNamedByApplicationId
```
dokploy("mounts.allNamedByApplicationId", { applicationId: "..." })
```

### mounts.listByServiceId
```
dokploy("mounts.listByServiceId", { serviceId: "...", serviceType: "..." })
```

## Redirects

### redirects.create
```
dokploy("redirects.create", { regex: "...", replacement: "...", permanent: "...", applicationId: "..." })
```

### redirects.one
```
dokploy("redirects.one", { redirectId: "..." })
```

### redirects.delete
```
dokploy("redirects.delete", { redirectId: "..." })
```

### redirects.update
```
dokploy("redirects.update", { redirectId: "...", regex: "...", replacement: "...", permanent: "..." })
```

## Security

### security.create
```
dokploy("security.create", { applicationId: "...", username: "...", password: "..." })
```

### security.one
```
dokploy("security.one", { securityId: "..." })
```

### security.delete
```
dokploy("security.delete", { securityId: "..." })
```

### security.update
```
dokploy("security.update", { securityId: "...", username: "...", password: "..." })
```

## Port

### port.create
```
dokploy("port.create", { publishedPort: "...", publishMode: "...", targetPort: "...", protocol: "...", applicationId: "..." })
```

### port.one
```
dokploy("port.one", { portId: "..." })
```

### port.delete
```
dokploy("port.delete", { portId: "..." })
```

### port.update
```
dokploy("port.update", { portId: "...", publishedPort: "...", publishMode: "...", targetPort: "...", protocol: "..." })
```

## Backup

### backup.create
```
dokploy("backup.create", { schedule: "...", prefix: "...", destinationId: "...", database: "...", databaseType: "...", enabled?: "...", keepLatestCount?: "...", mariadbId?: "...", mysqlId?: "...", postgresId?: "...", mongoId?: "...", userId?: "...", backupType?: "...", composeId?: "...", serviceName?: "...", metadata?: "..." })
```

### backup.one
```
dokploy("backup.one", { backupId: "..." })
```

### backup.update
```
dokploy("backup.update", { schedule: "...", enabled: "...", prefix: "...", backupId: "...", destinationId: "...", database: "...", keepLatestCount: "...", serviceName: "...", metadata: "...", databaseType: "..." })
```

### backup.remove
```
dokploy("backup.remove", { backupId: "..." })
```

### backup.manualBackupPostgres
```
dokploy("backup.manualBackupPostgres", { backupId: "..." })
```

### backup.manualBackupMySql
```
dokploy("backup.manualBackupMySql", { backupId: "..." })
```

### backup.manualBackupMariadb
```
dokploy("backup.manualBackupMariadb", { backupId: "..." })
```

### backup.manualBackupCompose
```
dokploy("backup.manualBackupCompose", { backupId: "..." })
```

### backup.manualBackupMongo
```
dokploy("backup.manualBackupMongo", { backupId: "..." })
```

### backup.manualBackupWebServer
```
dokploy("backup.manualBackupWebServer", { backupId: "..." })
```

### backup.listBackupFiles
```
dokploy("backup.listBackupFiles", { destinationId: "...", search: "...", serverId?: "..." })
```

## Schedule

### schedule.create
```
dokploy("schedule.create", { name: "...", cronExpression: "...", command: "...", scheduleId?: "...", appName?: "...", serviceName?: "...", shellType?: "...", scheduleType?: "...", script?: "...", applicationId?: "...", composeId?: "...", serverId?: "...", userId?: "...", enabled?: "...", timezone?: "...", createdAt?: "..." })
```

### schedule.update
```
dokploy("schedule.update", { scheduleId: "...", name: "...", cronExpression: "...", command: "...", appName?: "...", serviceName?: "...", shellType?: "...", scheduleType?: "...", script?: "...", applicationId?: "...", composeId?: "...", serverId?: "...", userId?: "...", enabled?: "...", timezone?: "...", createdAt?: "..." })
```

### schedule.delete
```
dokploy("schedule.delete", { scheduleId: "..." })
```

### schedule.list
```
dokploy("schedule.list", { id: "...", scheduleType: "..." })
```

### schedule.one
```
dokploy("schedule.one", { scheduleId: "..." })
```

### schedule.runManually
```
dokploy("schedule.runManually", { scheduleId: "..." })
```

## Certificates

### certificates.create
```
dokploy("certificates.create", { name: "...", certificateData: "...", privateKey: "...", organizationId: "...", certificateId?: "...", certificatePath?: "...", autoRenew?: "...", serverId?: "..." })
```

### certificates.one
```
dokploy("certificates.one", { certificateId: "..." })
```

### certificates.remove
```
dokploy("certificates.remove", { certificateId: "..." })
```

### certificates.all
```
dokploy("certificates.all")
```

## Registry

### registry.create
```
dokploy("registry.create", { registryName: "...", username: "...", password: "...", registryUrl: "...", registryType: "...", imagePrefix: "...", serverId?: "..." })
```

### registry.remove
```
dokploy("registry.remove", { registryId: "..." })
```

### registry.update
```
dokploy("registry.update", { registryId: "...", registryName?: "...", imagePrefix?: "...", username?: "...", password?: "...", registryUrl?: "...", createdAt?: "...", registryType?: "...", organizationId?: "...", serverId?: "..." })
```

### registry.all
```
dokploy("registry.all")
```

### registry.one
```
dokploy("registry.one", { registryId: "..." })
```

### registry.testRegistry
```
dokploy("registry.testRegistry", { username: "...", password: "...", registryUrl: "...", registryType: "...", registryName?: "...", imagePrefix?: "...", serverId?: "..." })
```

### registry.testRegistryById
```
dokploy("registry.testRegistryById", { registryId?: "...", serverId?: "..." })
```

## Sshkey

### sshKey.create
```
dokploy("sshKey.create", { name: "...", privateKey: "...", publicKey: "...", organizationId: "...", description?: "..." })
```

### sshKey.remove
```
dokploy("sshKey.remove", { sshKeyId: "..." })
```

### sshKey.one
```
dokploy("sshKey.one", { sshKeyId: "..." })
```

### sshKey.all
```
dokploy("sshKey.all")
```

### sshKey.generate
```
dokploy("sshKey.generate", { type?: "..." })
```

### sshKey.update
```
dokploy("sshKey.update", { sshKeyId: "...", name?: "...", description?: "...", lastUsedAt?: "..." })
```

## Destination

### destination.create
```
dokploy("destination.create", { name: "...", provider: "...", accessKey: "...", bucket: "...", region: "...", endpoint: "...", secretAccessKey: "...", serverId?: "..." })
```

### destination.testConnection
```
dokploy("destination.testConnection", { name: "...", provider: "...", accessKey: "...", bucket: "...", region: "...", endpoint: "...", secretAccessKey: "...", serverId?: "..." })
```

### destination.one
```
dokploy("destination.one", { destinationId: "..." })
```

### destination.all
```
dokploy("destination.all")
```

### destination.remove
```
dokploy("destination.remove", { destinationId: "..." })
```

### destination.update
```
dokploy("destination.update", { name: "...", accessKey: "...", bucket: "...", region: "...", endpoint: "...", secretAccessKey: "...", destinationId: "...", provider: "...", serverId?: "..." })
```

## Patch

### patch.create
```
dokploy("patch.create", { filePath: "...", content: "...", type?: "...", enabled?: "...", applicationId?: "...", composeId?: "..." })
```

### patch.one
```
dokploy("patch.one", { patchId: "..." })
```

### patch.byEntityId
```
dokploy("patch.byEntityId", { id: "...", type: "..." })
```

### patch.update
```
dokploy("patch.update", { patchId: "...", type?: "...", filePath?: "...", enabled?: "...", content?: "...", createdAt?: "...", updatedAt?: "..." })
```

### patch.delete
```
dokploy("patch.delete", { patchId: "..." })
```

### patch.toggleEnabled
```
dokploy("patch.toggleEnabled", { patchId: "...", enabled: "..." })
```

### patch.ensureRepo
```
dokploy("patch.ensureRepo", { id: "...", type: "..." })
```

### patch.readRepoDirectories
```
dokploy("patch.readRepoDirectories", { id: "...", type: "...", repoPath: "..." })
```

### patch.readRepoFile
```
dokploy("patch.readRepoFile", { id: "...", type: "...", filePath: "..." })
```

### patch.saveFileAsPatch
```
dokploy("patch.saveFileAsPatch", { id: "...", type: "...", filePath: "...", content: "...", patchType?: "..." })
```

### patch.markFileForDeletion
```
dokploy("patch.markFileForDeletion", { id: "...", type: "...", filePath: "..." })
```

### patch.cleanPatchRepos
```
dokploy("patch.cleanPatchRepos", { serverId?: "..." })
```

## Volumebackups

### volumeBackups.list
```
dokploy("volumeBackups.list", { id: "...", volumeBackupType: "..." })
```

### volumeBackups.create
```
dokploy("volumeBackups.create", { name: "...", volumeName: "...", prefix: "...", cronExpression: "...", destinationId: "...", serviceType?: "...", appName?: "...", serviceName?: "...", turnOff?: "...", keepLatestCount?: "...", enabled?: "...", applicationId?: "...", postgresId?: "...", mariadbId?: "...", mongoId?: "...", mysqlId?: "...", redisId?: "...", composeId?: "...", createdAt?: "..." })
```

### volumeBackups.one
```
dokploy("volumeBackups.one", { volumeBackupId: "..." })
```

### volumeBackups.delete
```
dokploy("volumeBackups.delete", { volumeBackupId: "..." })
```

### volumeBackups.update
```
dokploy("volumeBackups.update", { name: "...", volumeName: "...", prefix: "...", cronExpression: "...", destinationId: "...", volumeBackupId: "...", serviceType?: "...", appName?: "...", serviceName?: "...", turnOff?: "...", keepLatestCount?: "...", enabled?: "...", applicationId?: "...", postgresId?: "...", mariadbId?: "...", mongoId?: "...", mysqlId?: "...", redisId?: "...", composeId?: "...", createdAt?: "..." })
```

### volumeBackups.runManually
```
dokploy("volumeBackups.runManually", { volumeBackupId: "..." })
```

## Ai

### ai.one
```
dokploy("ai.one", { aiId: "..." })
```

### ai.getModels
```
dokploy("ai.getModels", { apiUrl: "...", apiKey: "..." })
```

### ai.create
```
dokploy("ai.create", { name: "...", apiUrl: "...", apiKey: "...", model: "...", isEnabled: "..." })
```

### ai.update
```
dokploy("ai.update", { aiId: "...", name?: "...", apiUrl?: "...", apiKey?: "...", model?: "...", isEnabled?: "...", createdAt?: "..." })
```

### ai.getAll
```
dokploy("ai.getAll")
```

### ai.get
```
dokploy("ai.get", { aiId: "..." })
```

### ai.delete
```
dokploy("ai.delete", { aiId: "..." })
```

### ai.suggest
```
dokploy("ai.suggest", { aiId: "...", input: "...", serverId?: "..." })
```

### ai.deploy
```
dokploy("ai.deploy", { environmentId: "...", id: "...", dockerCompose: "...", envVariables: "...", name: "...", description: "...", serverId?: "...", domains?: "...", configFiles?: "..." })
```
