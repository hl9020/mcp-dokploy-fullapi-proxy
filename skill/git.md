# Git Providers

## Github

### github.one
```
dokploy("github.one", { githubId: "..." })
```

### github.getGithubRepositories
```
dokploy("github.getGithubRepositories", { githubId: "..." })
```

### github.getGithubBranches
```
dokploy("github.getGithubBranches", { repo: "...", owner: "...", githubId?: "..." })
```

### github.githubProviders
```
dokploy("github.githubProviders")
```

### github.testConnection
```
dokploy("github.testConnection", { githubId: "..." })
```

### github.update
```
dokploy("github.update", { githubId: "...", name: "...", gitProviderId: "...", githubAppName: "..." })
```

## Gitlab

### gitlab.create
```
dokploy("gitlab.create", { authId: "...", name: "...", gitlabUrl: "...", applicationId?: "...", secret?: "...", groupName?: "...", gitProviderId?: "...", redirectUri?: "...", gitlabInternalUrl?: "..." })
```

### gitlab.one
```
dokploy("gitlab.one", { gitlabId: "..." })
```

### gitlab.gitlabProviders
```
dokploy("gitlab.gitlabProviders")
```

### gitlab.getGitlabRepositories
```
dokploy("gitlab.getGitlabRepositories", { gitlabId: "..." })
```

### gitlab.getGitlabBranches
```
dokploy("gitlab.getGitlabBranches", { owner: "...", repo: "...", id?: "...", gitlabId?: "..." })
```

### gitlab.testConnection
```
dokploy("gitlab.testConnection", { gitlabId: "...", groupName?: "..." })
```

### gitlab.update
```
dokploy("gitlab.update", { name: "...", gitlabId: "...", gitlabUrl: "...", gitProviderId: "...", applicationId?: "...", secret?: "...", groupName?: "...", redirectUri?: "...", gitlabInternalUrl?: "..." })
```

## Bitbucket

### bitbucket.create
```
dokploy("bitbucket.create", { authId: "...", name: "...", bitbucketId?: "...", bitbucketUsername?: "...", bitbucketEmail?: "...", appPassword?: "...", apiToken?: "...", bitbucketWorkspaceName?: "...", gitProviderId?: "..." })
```

### bitbucket.one
```
dokploy("bitbucket.one", { bitbucketId: "..." })
```

### bitbucket.bitbucketProviders
```
dokploy("bitbucket.bitbucketProviders")
```

### bitbucket.getBitbucketRepositories
```
dokploy("bitbucket.getBitbucketRepositories", { bitbucketId: "..." })
```

### bitbucket.getBitbucketBranches
```
dokploy("bitbucket.getBitbucketBranches", { owner: "...", repo: "...", bitbucketId?: "..." })
```

### bitbucket.testConnection
```
dokploy("bitbucket.testConnection", { bitbucketId: "...", bitbucketUsername?: "...", bitbucketEmail?: "...", workspaceName?: "...", apiToken?: "...", appPassword?: "..." })
```

### bitbucket.update
```
dokploy("bitbucket.update", { bitbucketId: "...", gitProviderId: "...", name: "...", bitbucketUsername?: "...", bitbucketEmail?: "...", appPassword?: "...", apiToken?: "...", bitbucketWorkspaceName?: "...", organizationId?: "..." })
```

## Gitea

### gitea.create
```
dokploy("gitea.create", { giteaUrl: "...", name: "...", giteaId?: "...", giteaInternalUrl?: "...", redirectUri?: "...", clientId?: "...", clientSecret?: "...", gitProviderId?: "...", accessToken?: "...", refreshToken?: "...", expiresAt?: "...", scopes?: "...", lastAuthenticatedAt?: "...", giteaUsername?: "...", organizationName?: "..." })
```

### gitea.one
```
dokploy("gitea.one", { giteaId: "..." })
```

### gitea.giteaProviders
```
dokploy("gitea.giteaProviders")
```

### gitea.getGiteaRepositories
```
dokploy("gitea.getGiteaRepositories", { giteaId: "..." })
```

### gitea.getGiteaBranches
```
dokploy("gitea.getGiteaBranches", { owner: "...", repositoryName: "...", giteaId?: "..." })
```

### gitea.testConnection
```
dokploy("gitea.testConnection", { giteaId?: "...", organizationName?: "..." })
```

### gitea.update
```
dokploy("gitea.update", { giteaId: "...", giteaUrl: "...", gitProviderId: "...", name: "...", giteaInternalUrl?: "...", redirectUri?: "...", clientId?: "...", clientSecret?: "...", accessToken?: "...", refreshToken?: "...", expiresAt?: "...", scopes?: "...", lastAuthenticatedAt?: "...", giteaUsername?: "...", organizationName?: "..." })
```

### gitea.getGiteaUrl
```
dokploy("gitea.getGiteaUrl", { giteaId: "..." })
```

## Gitprovider

### gitProvider.getAll
```
dokploy("gitProvider.getAll")
```

### gitProvider.remove
```
dokploy("gitProvider.remove", { gitProviderId: "..." })
```
