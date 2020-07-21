# 🐳 Docker zone
This folder provides 4 ways of using Fragment with docker.

When it comes to persistence, Fragment can use either MySQL
or SQLite out the box. 

- `MySQL` is used for huge projects as well
for legacy projects. 

- The preferred way of using Fragment is `SQLite`, which can serve
a site with thousands of pages without any problem. 

Folder          | Use to test
----------------|--------
stateful-mysql  | Live source code, MySQL setup
stateful-sqlite | Live source code, SQLite setup
stateless-mysql | Fresh image, MySQL setup
stateless-sqlite| Fresh image, SQLite setup

If you don't know where to begin, go to `stateless-sqlite`
