![Fragment Logo](https://cloud.githubusercontent.com/assets/1178107/17912245/08dc126e-6958-11e6-8eeb-ae223b2d190f.png)

# Install Now
Check our [3 Minute Install Guide](https://github.com/menendezpoo/Fragment/wiki/3-Minute-Install)

## Features
- Lightning Fast Website Development
- Incredibly Versatile
- Awesome Backend
- Instant Deploy

## Why Fragment?
- One word: Ultramegaconfigurability.

## Technology
- PHP / MySQL
- Kickass HTML5 Backend.

## Know Everything About It
- You sould start on our [wiki](https://github.com/menendezpoo/Fragment/wiki)


## Dev Shortcuts
```bash
# Build and create image
 xlatte --release fragment && docker build --tag=fragment .
```

```bash
# Kill containers and Spin up docker compose
killcontainers  && docker-compose up
```

```bash
# Kill containers, compile release, build image and spin docker compose
killcontainers && \
xlatte --release fragment && \
docker build --tag=fragment . && \
cd docker/stateless-sqlite && \
docker-compose up ; \
cd ../..

```