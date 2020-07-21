# Stateless SQLite
SQLite is the preferred way of using Fragment, because of portability.

## Prerequisite

This `docker-compose` uses a `fragment_local` image. Create one
if not present.
```bash
# Run this where the Dockerfile at the project root
docker image rm fragment_local; docker build --tag=fragment_local ../../.
```

Spin the instance by launching `docker-compose`:
```bash
docker-compose up
```
**Note**: The credentials for the `root` user on Fragment are:

Property | Value
---------|--------
User     | `root`
Password | `root`
