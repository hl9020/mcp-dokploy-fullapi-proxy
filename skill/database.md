# Databases (Postgres, MySQL, MariaDB, MongoDB, Redis)

> **Note:** There is NO `mysql.all`, `postgres.all`, etc. To list DB instances, use `project.all` with `pick: ["mysqlId", "name"]`.


## Postgres

### postgres.create
```
dokploy("postgres.create", { name: "...", databaseName: "...", databaseUser: "...", databasePassword: "...", environmentId: "...", appName?: "...", dockerImage?: "...", description?: "...", serverId?: "..." })
```

### postgres.one
```
dokploy("postgres.one", { postgresId: "..." })
```

### postgres.start
```
dokploy("postgres.start", { postgresId: "..." })
```

### postgres.stop
```
dokploy("postgres.stop", { postgresId: "..." })
```

### postgres.saveExternalPort
```
dokploy("postgres.saveExternalPort", { postgresId: "...", externalPort: "..." })
```

### postgres.deploy
```
dokploy("postgres.deploy", { postgresId: "..." })
```

### postgres.changeStatus
```
dokploy("postgres.changeStatus", { postgresId: "...", applicationStatus: "..." })
```

### postgres.remove
```
dokploy("postgres.remove", { postgresId: "..." })
```

### postgres.saveEnvironment
```
dokploy("postgres.saveEnvironment", { postgresId: "...", env: "..." })
```

### postgres.reload
```
dokploy("postgres.reload", { postgresId: "...", appName: "..." })
```

### postgres.update
```
dokploy("postgres.update", { postgresId: "...", name?: "...", appName?: "...", databaseName?: "...", databaseUser?: "...", databasePassword?: "...", description?: "...", dockerImage?: "...", command?: "...", args?: "...", env?: "...", memoryReservation?: "...", externalPort?: "...", memoryLimit?: "...", cpuReservation?: "...", cpuLimit?: "...", applicationStatus?: "...", healthCheckSwarm?: "...", restartPolicySwarm?: "...", placementSwarm?: "...", updateConfigSwarm?: "...", rollbackConfigSwarm?: "...", modeSwarm?: "...", labelsSwarm?: "...", networkSwarm?: "...", stopGracePeriodSwarm?: "...", endpointSpecSwarm?: "...", ulimitsSwarm?: "...", replicas?: "...", createdAt?: "...", environmentId?: "..." })
```

### postgres.move
```
dokploy("postgres.move", { postgresId: "...", targetEnvironmentId: "..." })
```

### postgres.rebuild
```
dokploy("postgres.rebuild", { postgresId: "..." })
```

### postgres.search
```
dokploy("postgres.search", { q?: "...", name?: "...", appName?: "...", description?: "...", projectId?: "...", environmentId?: "...", limit?: "...", offset?: "..." })
```

## Mysql

### mysql.create
```
dokploy("mysql.create", { name: "...", environmentId: "...", databaseName: "...", databaseUser: "...", databasePassword: "...", appName?: "...", dockerImage?: "...", description?: "...", databaseRootPassword?: "...", serverId?: "..." })
```

### mysql.one
```
dokploy("mysql.one", { mysqlId: "..." })
```

### mysql.start
```
dokploy("mysql.start", { mysqlId: "..." })
```

### mysql.stop
```
dokploy("mysql.stop", { mysqlId: "..." })
```

### mysql.saveExternalPort
```
dokploy("mysql.saveExternalPort", { mysqlId: "...", externalPort: "..." })
```

### mysql.deploy
```
dokploy("mysql.deploy", { mysqlId: "..." })
```

### mysql.changeStatus
```
dokploy("mysql.changeStatus", { mysqlId: "...", applicationStatus: "..." })
```

### mysql.reload
```
dokploy("mysql.reload", { mysqlId: "...", appName: "..." })
```

### mysql.remove
```
dokploy("mysql.remove", { mysqlId: "..." })
```

### mysql.saveEnvironment
```
dokploy("mysql.saveEnvironment", { mysqlId: "...", env: "..." })
```

### mysql.update
```
dokploy("mysql.update", { mysqlId: "...", name?: "...", appName?: "...", description?: "...", databaseName?: "...", databaseUser?: "...", databasePassword?: "...", databaseRootPassword?: "...", dockerImage?: "...", command?: "...", args?: "...", env?: "...", memoryReservation?: "...", memoryLimit?: "...", cpuReservation?: "...", cpuLimit?: "...", externalPort?: "...", applicationStatus?: "...", healthCheckSwarm?: "...", restartPolicySwarm?: "...", placementSwarm?: "...", updateConfigSwarm?: "...", rollbackConfigSwarm?: "...", modeSwarm?: "...", labelsSwarm?: "...", networkSwarm?: "...", stopGracePeriodSwarm?: "...", endpointSpecSwarm?: "...", ulimitsSwarm?: "...", replicas?: "...", createdAt?: "...", environmentId?: "..." })
```

### mysql.move
```
dokploy("mysql.move", { mysqlId: "...", targetEnvironmentId: "..." })
```

### mysql.rebuild
```
dokploy("mysql.rebuild", { mysqlId: "..." })
```

### mysql.search
```
dokploy("mysql.search", { q?: "...", name?: "...", appName?: "...", description?: "...", projectId?: "...", environmentId?: "...", limit?: "...", offset?: "..." })
```

## Mariadb

### mariadb.create
```
dokploy("mariadb.create", { name: "...", environmentId: "...", databaseName: "...", databaseUser: "...", databasePassword: "...", appName?: "...", dockerImage?: "...", databaseRootPassword?: "...", description?: "...", serverId?: "..." })
```

### mariadb.one
```
dokploy("mariadb.one", { mariadbId: "..." })
```

### mariadb.start
```
dokploy("mariadb.start", { mariadbId: "..." })
```

### mariadb.stop
```
dokploy("mariadb.stop", { mariadbId: "..." })
```

### mariadb.saveExternalPort
```
dokploy("mariadb.saveExternalPort", { mariadbId: "...", externalPort: "..." })
```

### mariadb.deploy
```
dokploy("mariadb.deploy", { mariadbId: "..." })
```

### mariadb.changeStatus
```
dokploy("mariadb.changeStatus", { mariadbId: "...", applicationStatus: "..." })
```

### mariadb.remove
```
dokploy("mariadb.remove", { mariadbId: "..." })
```

### mariadb.saveEnvironment
```
dokploy("mariadb.saveEnvironment", { mariadbId: "...", env: "..." })
```

### mariadb.reload
```
dokploy("mariadb.reload", { mariadbId: "...", appName: "..." })
```

### mariadb.update
```
dokploy("mariadb.update", { mariadbId: "...", name?: "...", appName?: "...", description?: "...", databaseName?: "...", databaseUser?: "...", databasePassword?: "...", databaseRootPassword?: "...", dockerImage?: "...", command?: "...", args?: "...", env?: "...", memoryReservation?: "...", memoryLimit?: "...", cpuReservation?: "...", cpuLimit?: "...", externalPort?: "...", applicationStatus?: "...", healthCheckSwarm?: "...", restartPolicySwarm?: "...", placementSwarm?: "...", updateConfigSwarm?: "...", rollbackConfigSwarm?: "...", modeSwarm?: "...", labelsSwarm?: "...", networkSwarm?: "...", stopGracePeriodSwarm?: "...", endpointSpecSwarm?: "...", ulimitsSwarm?: "...", replicas?: "...", createdAt?: "...", environmentId?: "..." })
```

### mariadb.move
```
dokploy("mariadb.move", { mariadbId: "...", targetEnvironmentId: "..." })
```

### mariadb.rebuild
```
dokploy("mariadb.rebuild", { mariadbId: "..." })
```

### mariadb.search
```
dokploy("mariadb.search", { q?: "...", name?: "...", appName?: "...", description?: "...", projectId?: "...", environmentId?: "...", limit?: "...", offset?: "..." })
```

## Mongo

### mongo.create
```
dokploy("mongo.create", { name: "...", environmentId: "...", databaseUser: "...", databasePassword: "...", appName?: "...", dockerImage?: "...", description?: "...", serverId?: "...", replicaSets?: "..." })
```

### mongo.one
```
dokploy("mongo.one", { mongoId: "..." })
```

### mongo.start
```
dokploy("mongo.start", { mongoId: "..." })
```

### mongo.stop
```
dokploy("mongo.stop", { mongoId: "..." })
```

### mongo.saveExternalPort
```
dokploy("mongo.saveExternalPort", { mongoId: "...", externalPort: "..." })
```

### mongo.deploy
```
dokploy("mongo.deploy", { mongoId: "..." })
```

### mongo.changeStatus
```
dokploy("mongo.changeStatus", { mongoId: "...", applicationStatus: "..." })
```

### mongo.reload
```
dokploy("mongo.reload", { mongoId: "...", appName: "..." })
```

### mongo.remove
```
dokploy("mongo.remove", { mongoId: "..." })
```

### mongo.saveEnvironment
```
dokploy("mongo.saveEnvironment", { mongoId: "...", env: "..." })
```

### mongo.update
```
dokploy("mongo.update", { mongoId: "...", name?: "...", appName?: "...", description?: "...", databaseUser?: "...", databasePassword?: "...", dockerImage?: "...", command?: "...", args?: "...", env?: "...", memoryReservation?: "...", memoryLimit?: "...", cpuReservation?: "...", cpuLimit?: "...", externalPort?: "...", applicationStatus?: "...", healthCheckSwarm?: "...", restartPolicySwarm?: "...", placementSwarm?: "...", updateConfigSwarm?: "...", rollbackConfigSwarm?: "...", modeSwarm?: "...", labelsSwarm?: "...", networkSwarm?: "...", stopGracePeriodSwarm?: "...", endpointSpecSwarm?: "...", ulimitsSwarm?: "...", replicas?: "...", createdAt?: "...", environmentId?: "...", replicaSets?: "..." })
```

### mongo.move
```
dokploy("mongo.move", { mongoId: "...", targetEnvironmentId: "..." })
```

### mongo.rebuild
```
dokploy("mongo.rebuild", { mongoId: "..." })
```

### mongo.search
```
dokploy("mongo.search", { q?: "...", name?: "...", appName?: "...", description?: "...", projectId?: "...", environmentId?: "...", limit?: "...", offset?: "..." })
```

## Redis

### redis.create
```
dokploy("redis.create", { name: "...", databasePassword: "...", environmentId: "...", appName?: "...", dockerImage?: "...", description?: "...", serverId?: "..." })
```

### redis.one
```
dokploy("redis.one", { redisId: "..." })
```

### redis.start
```
dokploy("redis.start", { redisId: "..." })
```

### redis.reload
```
dokploy("redis.reload", { redisId: "...", appName: "..." })
```

### redis.stop
```
dokploy("redis.stop", { redisId: "..." })
```

### redis.saveExternalPort
```
dokploy("redis.saveExternalPort", { redisId: "...", externalPort: "..." })
```

### redis.deploy
```
dokploy("redis.deploy", { redisId: "..." })
```

### redis.changeStatus
```
dokploy("redis.changeStatus", { redisId: "...", applicationStatus: "..." })
```

### redis.remove
```
dokploy("redis.remove", { redisId: "..." })
```

### redis.saveEnvironment
```
dokploy("redis.saveEnvironment", { redisId: "...", env: "..." })
```

### redis.update
```
dokploy("redis.update", { redisId: "...", name?: "...", appName?: "...", description?: "...", databasePassword?: "...", dockerImage?: "...", command?: "...", args?: "...", env?: "...", memoryReservation?: "...", memoryLimit?: "...", cpuReservation?: "...", cpuLimit?: "...", externalPort?: "...", createdAt?: "...", applicationStatus?: "...", healthCheckSwarm?: "...", restartPolicySwarm?: "...", placementSwarm?: "...", updateConfigSwarm?: "...", rollbackConfigSwarm?: "...", modeSwarm?: "...", labelsSwarm?: "...", networkSwarm?: "...", stopGracePeriodSwarm?: "...", endpointSpecSwarm?: "...", ulimitsSwarm?: "...", replicas?: "...", environmentId?: "..." })
```

### redis.move
```
dokploy("redis.move", { redisId: "...", targetEnvironmentId: "..." })
```

### redis.rebuild
```
dokploy("redis.rebuild", { redisId: "..." })
```

### redis.search
```
dokploy("redis.search", { q?: "...", name?: "...", appName?: "...", description?: "...", projectId?: "...", environmentId?: "...", limit?: "...", offset?: "..." })
```
