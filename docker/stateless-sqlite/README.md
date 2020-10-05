# Stateless SQLite
SQLite is the preferred way of using Fragment, because of portability.

## Prerequisite

This `docker-compose` uses a `fragment_local` image. Create one
if not present.

Execute from this directory.

```bash
#
# Execute from this directory.
cd docker/stateless-sqlite

#
# Remove previous image and build a fragment_local
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
