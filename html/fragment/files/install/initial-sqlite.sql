
INSERT INTO user(iduser, uname, password, flags)
VALUES(1, 'root', '', 3);

INSERT INTO `group`(idgroup, name)
VALUES(1, 'System');

INSERT INTO page(idpage,
  idgroup, iduser, guid, `key`, online,
  template, created, modified, title,
  powner, pgroup, pother, pworld
  )
VALUES(1,
  1, 1, 'home', 'home', 1,
  'index', datetime(), datetime(), 'Home',
  63, 19, 17, 17
  );

INSERT INTO fragment(`idpage`, `value`, `name`)
VALUES(1, 'Lorem Ipsum', 'body');

INSERT INTO `setting`(idowner, owner, `name`, `value`)
VALUES(1, 'Page', 'page-configuration', '' ||
 '{' ||
  '"children":{' ||
   '"fragments":[' ||
    '{"key":"intro","name":"Introduction","type":"html"},' ||
    '{"key":"illustration","name":"Illustration","type":"image"},' ||
    '{"key":"body","name":"Article","type":"html"}' ||
   ']' ||
  '}' ||
 '}');

INSERT INTO `setting`(idowner, owner, `name`, `value`)
VALUES(0, 'global', 'home', 'home');

INSERT INTO `setting`(idowner, owner, `name`, `value`)
VALUES(0, 'global', 'theme', 'default');