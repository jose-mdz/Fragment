# Docker Compose
Setup to run and test on Docker

How to Run Image

```bash
$ docker-compose up         # Run Docker containers

$ docker-compose up -d      # Run, but in detached mode

$ docker-compose ps         # List processes running

$ docker-compose stop       # Stop container
```

## Getting Started

1. Spin docker compose containers

```bash
$ docker-compose up         # Run Docker containers
```

2. Import schema into MySQL. Schema is located in

```
html/fragment/files/install/fragment.sql
```

3. Create `connection-cms.json` outside the install directory

```
{
  "user": "database_username",
  "password": "database_password",
  "database": "database_name",
  "host": "127.0.0.1"
}
```

