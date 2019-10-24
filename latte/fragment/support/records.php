<?php 
class userBase extends DataRecord{
	public $iduser, $uname, $password, $flags;
	public static function all($t = "user"){ return array("$t.iduser AS '$t.iduser'", "$t.uname AS '$t.uname'", "$t.password AS '$t.password'", "$t.flags AS '$t.flags'"); }
	public static function gettable(){ return "user"; }
	public function getAutoKey(){ return array( "iduser" => $this->iduser ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "uname" => $this->uname, "password" => $this->password, "flags" => $this->flags ); }
	public function getModule(){ return 'fragment'; }
	public function isInserted(){ return isset($this->iduser); }
}
class fragmentBase extends DataRecord{
	public $idfragment, $idpage, $value, $name;
	public static function all($t = "fragment"){ return array("$t.idfragment AS '$t.idfragment'", "$t.idpage AS '$t.idpage'", "$t.value AS '$t.value'", "$t.name AS '$t.name'"); }
	public static function gettable(){ return "fragment"; }
	public function getAutoKey(){ return array( "idfragment" => $this->idfragment ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "idpage" => $this->idpage, "value" => $this->value, "name" => $this->name ); }
	public function getModule(){ return 'fragment'; }
	public function isInserted(){ return isset($this->idfragment); }
}
class groupBase extends DataRecord{
	public $idgroup, $name;
	public static function all($t = "group"){ return array("$t.idgroup AS '$t.idgroup'", "$t.name AS '$t.name'"); }
	public static function gettable(){ return "group"; }
	public function getAutoKey(){ return array( "idgroup" => $this->idgroup ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "name" => $this->name ); }
	public function getModule(){ return 'fragment'; }
	public function isInserted(){ return isset($this->idgroup); }
}
class settingBase extends DataRecord{
	public $idsetting, $idowner, $owner, $name, $value;
	public static function all($t = "setting"){ return array("$t.idsetting AS '$t.idsetting'", "$t.idowner AS '$t.idowner'", "$t.owner AS '$t.owner'", "$t.name AS '$t.name'", "$t.value AS '$t.value'"); }
	public static function gettable(){ return "setting"; }
	public function getAutoKey(){ return array( "idsetting" => $this->idsetting ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "idowner" => $this->idowner, "owner" => $this->owner, "name" => $this->name, "value" => $this->value ); }
	public function getModule(){ return 'fragment'; }
	public function isInserted(){ return isset($this->idsetting); }
}
class pageBase extends DataRecord{
	public $idpage, $idparent, $idgroup, $iduser, $guid, $key, $trash, $online, $template, $created, $modified, $title, $description, $order, $sort, $powner, $pgroup, $pother, $pworld, $flags;
	public static function all($t = "page"){ return array("$t.idpage AS '$t.idpage'", "$t.idparent AS '$t.idparent'", "$t.idgroup AS '$t.idgroup'", "$t.iduser AS '$t.iduser'", "$t.guid AS '$t.guid'", "$t.key AS '$t.key'", "$t.trash AS '$t.trash'", "$t.online AS '$t.online'", "$t.template AS '$t.template'", "$t.created AS '$t.created'", "$t.modified AS '$t.modified'", "$t.title AS '$t.title'", "$t.description AS '$t.description'", "$t.order AS '$t.order'", "$t.sort AS '$t.sort'", "$t.powner AS '$t.powner'", "$t.pgroup AS '$t.pgroup'", "$t.pother AS '$t.pother'", "$t.pworld AS '$t.pworld'", "$t.flags AS '$t.flags'"); }
	public static function gettable(){ return "page"; }
	public function getAutoKey(){ return array( "idpage" => $this->idpage ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "idparent" => $this->idparent, "idgroup" => $this->idgroup, "iduser" => $this->iduser, "guid" => $this->guid, "key" => $this->key, "trash" => $this->trash, "online" => $this->online, "template" => $this->template, "created" => $this->created, "modified" => $this->modified, "title" => $this->title, "description" => $this->description, "order" => $this->order, "sort" => $this->sort, "powner" => $this->powner, "pgroup" => $this->pgroup, "pother" => $this->pother, "pworld" => $this->pworld, "flags" => $this->flags ); }
	public function getModule(){ return 'fragment'; }
	public function isInserted(){ return isset($this->idpage); }
}
class groupUserBase extends DataRecord{
	public $idgroupuser, $idgroup, $iduser;
	public static function all($t = "group_user"){ return array("$t.idgroupuser AS '$t.idgroupuser'", "$t.idgroup AS '$t.idgroup'", "$t.iduser AS '$t.iduser'"); }
	public static function gettable(){ return "group_user"; }
	public function getAutoKey(){ return array( "idgroupuser" => $this->idgroupuser ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "idgroup" => $this->idgroup, "iduser" => $this->iduser ); }
	public function getModule(){ return 'fragment'; }
	public function isInserted(){ return isset($this->idgroupuser); }
}
class fileBase extends DataRecord{
	public $idfile, $guid, $iduser, $idowner, $idparent, $owner, $name, $size, $bucket, $path, $uploaded, $description, $width, $height, $key;
	public static function all($t = "file"){ return array("$t.idfile AS '$t.idfile'", "$t.guid AS '$t.guid'", "$t.iduser AS '$t.iduser'", "$t.idowner AS '$t.idowner'", "$t.idparent AS '$t.idparent'", "$t.owner AS '$t.owner'", "$t.name AS '$t.name'", "$t.size AS '$t.size'", "$t.bucket AS '$t.bucket'", "$t.path AS '$t.path'", "$t.uploaded AS '$t.uploaded'", "$t.description AS '$t.description'", "$t.width AS '$t.width'", "$t.height AS '$t.height'", "$t.key AS '$t.key'"); }
	public static function gettable(){ return "file"; }
	public function getAutoKey(){ return array( "idfile" => $this->idfile ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "guid" => $this->guid, "iduser" => $this->iduser, "idowner" => $this->idowner, "idparent" => $this->idparent, "owner" => $this->owner, "name" => $this->name, "size" => $this->size, "bucket" => $this->bucket, "path" => $this->path, "uploaded" => $this->uploaded, "description" => $this->description, "width" => $this->width, "height" => $this->height, "key" => $this->key ); }
	public function getModule(){ return 'fragment'; }
	public function isInserted(){ return isset($this->idfile); }
}