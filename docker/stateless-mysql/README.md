# Stateless MySQL
Use MySQL when the contents of the site are massive, 
or for backwards compatibility. The preferred configuration of
Fragment is using SQLite.

## Prerequisite
This `docker-compose` uses a `fragment_local` image. Create one
if not present.
```bash
# Run this where the Dockerfile at the project root
docker image rm fragment_local ; docker build --tag=fragment_local ../../.
```

Spin the instance by launching `docker-compose`:
```bash
docker-compose up
```
This setup spins a fresh:

- mysql instance
- apache/php fragment instance

Proceed to install `fragment` by navigating to `localhost/fragment`
Use these database settings:

Property|Value
---|---
User|`root`
Password|`docker`
Database|`fragment`
Host|`db`
