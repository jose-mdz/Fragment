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


# Dev examples
If you are modifying latte code, the steps to launch an image are

- Compile latte
- Create Image
- Run Docker Compose

```bash
pushd ../../. && \
xlatte --release fragment && \
docker build --tag=fragment_local . && \
popd && \
docker-compose up
```