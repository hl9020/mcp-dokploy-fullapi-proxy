# Notifications

### notification.createSlack
```
dokploy("notification.createSlack", { appBuildError: "...", databaseBackup: "...", volumeBackup: "...", dokployRestart: "...", name: "...", appDeploy: "...", dockerCleanup: "...", serverThreshold: "...", webhookUrl: "...", channel: "..." })
```

### notification.updateSlack
```
dokploy("notification.updateSlack", { notificationId: "...", slackId: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "...", webhookUrl?: "...", channel?: "...", organizationId?: "..." })
```

### notification.testSlackConnection
```
dokploy("notification.testSlackConnection", { webhookUrl: "...", channel: "..." })
```

### notification.createTelegram
```
dokploy("notification.createTelegram", { appBuildError: "...", databaseBackup: "...", volumeBackup: "...", dokployRestart: "...", name: "...", appDeploy: "...", dockerCleanup: "...", serverThreshold: "...", botToken: "...", chatId: "...", messageThreadId: "..." })
```

### notification.updateTelegram
```
dokploy("notification.updateTelegram", { notificationId: "...", telegramId: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "...", botToken?: "...", chatId?: "...", messageThreadId?: "...", organizationId?: "..." })
```

### notification.testTelegramConnection
```
dokploy("notification.testTelegramConnection", { botToken: "...", chatId: "...", messageThreadId: "..." })
```

### notification.createDiscord
```
dokploy("notification.createDiscord", { appBuildError: "...", databaseBackup: "...", volumeBackup: "...", dokployRestart: "...", name: "...", appDeploy: "...", dockerCleanup: "...", serverThreshold: "...", webhookUrl: "...", decoration: "..." })
```

### notification.updateDiscord
```
dokploy("notification.updateDiscord", { notificationId: "...", discordId: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "...", webhookUrl?: "...", decoration?: "...", organizationId?: "..." })
```

### notification.testDiscordConnection
```
dokploy("notification.testDiscordConnection", { webhookUrl: "...", decoration?: "..." })
```

### notification.createEmail
```
dokploy("notification.createEmail", { appBuildError: "...", databaseBackup: "...", volumeBackup: "...", dokployRestart: "...", name: "...", appDeploy: "...", dockerCleanup: "...", serverThreshold: "...", smtpServer: "...", smtpPort: "...", username: "...", password: "...", fromAddress: "...", toAddresses: "..." })
```

### notification.updateEmail
```
dokploy("notification.updateEmail", { notificationId: "...", emailId: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "...", smtpServer?: "...", smtpPort?: "...", username?: "...", password?: "...", fromAddress?: "...", toAddresses?: "...", organizationId?: "..." })
```

### notification.testEmailConnection
```
dokploy("notification.testEmailConnection", { smtpServer: "...", smtpPort: "...", username: "...", password: "...", toAddresses: "...", fromAddress: "..." })
```

### notification.createResend
```
dokploy("notification.createResend", { appBuildError: "...", databaseBackup: "...", volumeBackup: "...", dokployRestart: "...", name: "...", appDeploy: "...", dockerCleanup: "...", serverThreshold: "...", apiKey: "...", fromAddress: "...", toAddresses: "..." })
```

### notification.updateResend
```
dokploy("notification.updateResend", { notificationId: "...", resendId: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "...", apiKey?: "...", fromAddress?: "...", toAddresses?: "...", organizationId?: "..." })
```

### notification.testResendConnection
```
dokploy("notification.testResendConnection", { apiKey: "...", fromAddress: "...", toAddresses: "..." })
```

### notification.remove
```
dokploy("notification.remove", { notificationId: "..." })
```

### notification.one
```
dokploy("notification.one", { notificationId: "..." })
```

### notification.all
```
dokploy("notification.all")
```

### notification.receiveNotification
```
dokploy("notification.receiveNotification", { Type: "...", Value: "...", Threshold: "...", Message: "...", Timestamp: "...", Token: "...", ServerType?: "..." })
```

### notification.createGotify
```
dokploy("notification.createGotify", { appBuildError: "...", databaseBackup: "...", volumeBackup: "...", dokployRestart: "...", name: "...", appDeploy: "...", dockerCleanup: "...", serverUrl: "...", appToken: "...", priority: "...", decoration: "..." })
```

### notification.updateGotify
```
dokploy("notification.updateGotify", { notificationId: "...", gotifyId: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverUrl?: "...", appToken?: "...", priority?: "...", decoration?: "...", organizationId?: "..." })
```

### notification.testGotifyConnection
```
dokploy("notification.testGotifyConnection", { serverUrl: "...", appToken: "...", priority: "...", decoration?: "..." })
```

### notification.createNtfy
```
dokploy("notification.createNtfy", { appBuildError: "...", databaseBackup: "...", volumeBackup: "...", dokployRestart: "...", name: "...", appDeploy: "...", dockerCleanup: "...", serverUrl: "...", topic: "...", accessToken: "...", priority: "..." })
```

### notification.updateNtfy
```
dokploy("notification.updateNtfy", { notificationId: "...", ntfyId: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverUrl?: "...", topic?: "...", accessToken?: "...", priority?: "...", organizationId?: "..." })
```

### notification.testNtfyConnection
```
dokploy("notification.testNtfyConnection", { serverUrl: "...", topic: "...", accessToken: "...", priority: "..." })
```

### notification.createCustom
```
dokploy("notification.createCustom", { name: "...", endpoint: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "...", headers?: "..." })
```

### notification.updateCustom
```
dokploy("notification.updateCustom", { notificationId: "...", customId: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "...", endpoint?: "...", headers?: "...", organizationId?: "..." })
```

### notification.testCustomConnection
```
dokploy("notification.testCustomConnection", { endpoint: "...", headers?: "..." })
```

### notification.createLark
```
dokploy("notification.createLark", { appBuildError: "...", databaseBackup: "...", volumeBackup: "...", dokployRestart: "...", name: "...", appDeploy: "...", dockerCleanup: "...", serverThreshold: "...", webhookUrl: "..." })
```

### notification.updateLark
```
dokploy("notification.updateLark", { notificationId: "...", larkId: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "...", webhookUrl?: "...", organizationId?: "..." })
```

### notification.testLarkConnection
```
dokploy("notification.testLarkConnection", { webhookUrl: "..." })
```

### notification.createTeams
```
dokploy("notification.createTeams", { appBuildError: "...", databaseBackup: "...", volumeBackup: "...", dokployRestart: "...", name: "...", appDeploy: "...", dockerCleanup: "...", serverThreshold: "...", webhookUrl: "..." })
```

### notification.updateTeams
```
dokploy("notification.updateTeams", { notificationId: "...", teamsId: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "...", webhookUrl?: "...", organizationId?: "..." })
```

### notification.testTeamsConnection
```
dokploy("notification.testTeamsConnection", { webhookUrl: "..." })
```

### notification.createPushover
```
dokploy("notification.createPushover", { name: "...", userKey: "...", apiToken: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "...", priority?: "...", retry?: "...", expire?: "..." })
```

### notification.updatePushover
```
dokploy("notification.updatePushover", { notificationId: "...", pushoverId: "...", organizationId?: "...", userKey?: "...", apiToken?: "...", priority?: "...", retry?: "...", expire?: "...", appBuildError?: "...", databaseBackup?: "...", volumeBackup?: "...", dokployRestart?: "...", name?: "...", appDeploy?: "...", dockerCleanup?: "...", serverThreshold?: "..." })
```

### notification.testPushoverConnection
```
dokploy("notification.testPushoverConnection", { userKey: "...", apiToken: "...", priority: "...", retry?: "...", expire?: "..." })
```

### notification.getEmailProviders
```
dokploy("notification.getEmailProviders")
```
