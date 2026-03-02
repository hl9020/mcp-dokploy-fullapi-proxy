# User & Organization

## User

### user.all
```
dokploy("user.all")
```

### user.one
```
dokploy("user.one", { userId: "..." })
```

### user.get
```
dokploy("user.get")
```

### user.haveRootAccess
```
dokploy("user.haveRootAccess")
```

### user.getBackups
```
dokploy("user.getBackups")
```

### user.getServerMetrics
```
dokploy("user.getServerMetrics")
```

### user.update
```
dokploy("user.update", { id?: "...", firstName?: "...", lastName?: "...", isRegistered?: "...", expirationDate?: "...", createdAt2?: "...", createdAt?: "...", twoFactorEnabled?: "...", email?: "...", emailVerified?: "...", image?: "...", banned?: "...", banReason?: "...", banExpires?: "...", updatedAt?: "...", enablePaidFeatures?: "...", allowImpersonation?: "...", enableEnterpriseFeatures?: "...", licenseKey?: "...", stripeCustomerId?: "...", stripeSubscriptionId?: "...", serversQuantity?: "...", password?: "...", currentPassword?: "..." })
```

### user.getUserByToken
```
dokploy("user.getUserByToken", { token: "..." })
```

### user.getMetricsToken
```
dokploy("user.getMetricsToken")
```

### user.remove
```
dokploy("user.remove", { userId: "..." })
```

### user.assignPermissions
```
dokploy("user.assignPermissions", { id: "...", accessedProjects: "...", accessedEnvironments: "...", accessedServices: "...", canCreateProjects: "...", canCreateServices: "...", canDeleteProjects: "...", canDeleteServices: "...", canAccessToDocker: "...", canAccessToTraefikFiles: "...", canAccessToAPI: "...", canAccessToSSHKeys: "...", canAccessToGitProviders: "...", canDeleteEnvironments: "...", canCreateEnvironments: "..." })
```

### user.getInvitations
```
dokploy("user.getInvitations")
```

### user.getContainerMetrics
```
dokploy("user.getContainerMetrics", { url: "...", token: "...", appName: "...", dataPoints: "..." })
```

### user.generateToken
```
dokploy("user.generateToken")
```

### user.deleteApiKey
```
dokploy("user.deleteApiKey", { apiKeyId: "..." })
```

### user.createApiKey
```
dokploy("user.createApiKey", { name: "...", metadata: "...", prefix?: "...", expiresIn?: "...", rateLimitEnabled?: "...", rateLimitTimeWindow?: "...", rateLimitMax?: "...", remaining?: "...", refillAmount?: "...", refillInterval?: "..." })
```

### user.checkUserOrganizations
```
dokploy("user.checkUserOrganizations", { userId: "..." })
```

### user.sendInvitation
```
dokploy("user.sendInvitation", { invitationId: "...", notificationId: "..." })
```

## Organization

### organization.create
```
dokploy("organization.create", { name: "...", logo?: "..." })
```

### organization.all
```
dokploy("organization.all")
```

### organization.one
```
dokploy("organization.one", { organizationId: "..." })
```

### organization.update
```
dokploy("organization.update", { organizationId: "...", name: "...", logo?: "..." })
```

### organization.delete
```
dokploy("organization.delete", { organizationId: "..." })
```

### organization.allInvitations
```
dokploy("organization.allInvitations")
```

### organization.removeInvitation
```
dokploy("organization.removeInvitation", { invitationId: "..." })
```

### organization.updateMemberRole
```
dokploy("organization.updateMemberRole", { memberId: "...", role: "..." })
```

### organization.setDefault
```
dokploy("organization.setDefault", { organizationId: "..." })
```
