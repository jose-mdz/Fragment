![Fragment Logo](https://cloud.githubusercontent.com/assets/1178107/17912245/08dc126e-6958-11e6-8eeb-ae223b2d190f.png)

# Install Now
Check our [3 Minute Install Guide](https://github.com/menendezpoo/Fragment/wiki/3-Minute-Install)

## Follow Development
We have a project for the [first release of Fragment](https://github.com/menendezpoo/Fragment/projects/1).

## Docker
```bash
# Delete old images
docker image rm -f fragment

docker rm -f fragment && \
docker build --tag=fragment . && \
docker \
run \
--name=fragment \
-e APPLICATION_ENV=development \
-p 80:80 \
fragment

```

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

0.3
