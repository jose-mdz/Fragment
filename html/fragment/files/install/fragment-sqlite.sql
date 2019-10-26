
CREATE TABLE `file` (
  `idfile` INTEGER PRIMARY KEY AUTOINCREMENT,
  `guid` varchar(50) DEFAULT NULL,
  `iduser` INTEGER DEFAULT '0',
  `idowner` INTEGER DEFAULT '0',
  `idparent` INTEGER DEFAULT '0',
  `owner` varchar(50) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `size` INTEGER DEFAULT '0',
  `bucket` varchar(30) DEFAULT NULL,
  `path` varchar(128) DEFAULT NULL,
  `uploaded` datetime DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `width` INTEGER DEFAULT '0',
  `height` INTEGER DEFAULT '0',
  `key` varchar(50) DEFAULT NULL
);

CREATE TABLE `fragment` (
  `idfragment` INTEGER PRIMARY KEY AUTOINCREMENT,
  `idpage` INTEGER DEFAULT '0',
  `value` longtext,
  `name` varchar(50) DEFAULT NULL
) ;

CREATE TABLE `group` (
  `idgroup` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` varchar(128) DEFAULT NULL
);

CREATE TABLE `group_user` (
  `idgroupuser` INTEGER PRIMARY KEY AUTOINCREMENT,
  `idgroup` INTEGER DEFAULT '0',
  `iduser` INTEGER DEFAULT '0'
) ;


CREATE TABLE `page` (
  `idpage` INTEGER PRIMARY KEY AUTOINCREMENT,
  `idparent` INTEGER DEFAULT '0',
  `idgroup` INTEGER DEFAULT '0',
  `iduser` INTEGER DEFAULT '0',
  `guid` varchar(50) DEFAULT NULL,
  `key` varchar(200) DEFAULT NULL,
  `trash` int(1) DEFAULT '0',
  `online` int(1) DEFAULT '0',
  `template` varchar(20) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `title` varchar(128) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `order` INTEGER DEFAULT '0',
  `sort` varchar(20) DEFAULT NULL,
  `powner` INTEGER DEFAULT '0',
  `pgroup` INTEGER DEFAULT '0',
  `pother` INTEGER DEFAULT '0',
  `pworld` INTEGER DEFAULT '0',
  `flags` INTEGER DEFAULT '0'
) ;


CREATE TABLE `setting` (
  `idsetting` INTEGER PRIMARY KEY AUTOINCREMENT,
  `idowner` INTEGER DEFAULT '0',
  `owner` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `value` longtext
) ;


CREATE TABLE `user` (
  `iduser` INTEGER PRIMARY KEY AUTOINCREMENT,
  `uname` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `flags` INTEGER DEFAULT '0'
);
