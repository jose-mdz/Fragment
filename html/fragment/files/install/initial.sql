-- jmmp 2016
-- Initial empty database for Fragment
--

-- Create root user (Empty password)
-- Password should be assigned from the script who executes, immediately after this.
INSERT INTO user(iduser, uname, password, flags)
VALUES(1, 'root', '', 3);

--
-- Create system group
-- By default all files belong to this group
--
INSERT INTO `group`(idgroup, name)
VALUES(1, 'System');

--
-- Create Home Page
--
INSERT INTO page(idpage,
  idgroup, iduser, guid, `key`, online,
  template, created, modified, title,
  powner, pgroup, pother, pworld
  )
VALUES(1,
  1, 1, 'home', 'home', 1,
  'index', now(), now(), 'Home',
  63, 19, 17, 17
  );

--
-- Create Body Fragment for Homepage
--
INSERT INTO fragment(`idpage`, `value`, `name`)
VALUES(1, 'Lorem Ipsum', 'body');

--
-- Crate Body Empty Configuration
--
INSERT INTO `setting`(idowner, owner, `name`, `value`)
VALUES(1, 'Page', 'page-configuration', '');