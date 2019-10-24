# 🐳 Docker zone

## Development `docker-compose` folders
These folders contain docker-compose setups with different scenarios.

## stateless-mysql
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


## stateful-map
This is similar to `stateless-mysql` but maps the filesystem to the actual project sources.
Be aware of this because after installing, `config.php`, `.htaccess` and other files might be created.
The database is persisted in the `db` folder inside `stateful-map`. 

The `db` folder is added to the `.gitignore` list to avoid committing.  