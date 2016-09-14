<?php



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
class userBase extends DataRecord{
	public $iduser, $uname, $password, $flags;
	public static function all($t = "user"){ return array("$t.iduser AS '$t.iduser'", "$t.uname AS '$t.uname'", "$t.password AS '$t.password'", "$t.flags AS '$t.flags'"); }
	public static function gettable(){ return "user"; }
	public function getAutoKey(){ return array( "iduser" => $this->iduser ); }
	public function getKeys(){ return array(  ); }
	public function getFields(){ return array( "uname" => $this->uname, "password" => $this->password, "flags" => $this->flags ); }
	public function getModule(){ return 'fragment'; }
	public function isInserted(){ return isset($this->iduser); }
}/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/1/16
 * Time: 21:11
 */
class CmsConfig{

    private static $_fileUploadIsS3 = null;
    private static $_s3Key = null;
    private static $_s3Pass = null;
    private static $_s3Bucket = null;
    private static $_filesPath = null;

    /**
     * @return null|string
     */
    public static function getFilesPath(){
        if(self::$_filesPath === null){
            self::$_s3Key = Setting::getValue('cms', 0, 'files-path');

            if (!self::$_filesPath){
                self::$_filesPath = 'fragment/files';
            }
        }
        return self::$_filesPath;
    }

    /**
     * Gets a value indicating if the upload is configured to be S3
     * @return boolean
     */
    public static function getFileUploadIsS3(){
        if(self::$_fileUploadIsS3 === null){
            self::$_fileUploadIsS3 = intval(Setting::getValue('cms', 0, 'file-upload-s3')) === 1;
        }

        return self::$_fileUploadIsS3;
    }

    /**
     * Gets the configured S3 key
     * @return string
     */
    public static function getS3Key(){
        if (self::$_s3Key === null){
            self::$_s3Key = Setting::getValue('cms', 0, 's3-key');
        }
        return self::$_s3Key;
    }

    /**
     * Gets the configured S3 Pass phrase
     * @return string
     */
    public static function getS3Pass(){
        if (self::$_s3Pass === null){
            self::$_s3Pass = Setting::getValue('cms', 0, 's3-pass');
        }
        return self::$_s3Pass;
    }

    /**
     * Gets the configured S3 Bucket
     * @return string
     */
    public static function getS3Bucket(){
        if (self::$_s3Bucket === null){
            self::$_s3Bucket = Setting::getValue('cms', 0, 's3-bucket');
        }
        return self::$_s3Bucket;
    }

    /**
     * Stores a value indicating if the upload of files is configured to S3
     * @param $value
     */
    public static function setFileUploadIsS3($value){
        self::$_fileUploadIsS3 = $value;
        Setting::setValue('cms', 0, 'file-upload-s3', $value ? 1 : 0);
    }

}
/**
 * Represents a file. Files are stored on Amazon's S3 service.
 * 
 * Files are linked to objects by the `owner`and `idowner` fields. This fields represents
 * other records in the database, but owner name is the name of its representing class in code.
 * 
 * If `idowner` is set to a negative value, it means the file has been previously inserted,
 * and files needs to be linked. Its up to each class specification how to handle unlinked files.
 * 
 */
class File extends fileBase{

    const GUID_LENGTH = 10;
    
    public static $normalizeChars = array(
        'Š'=>'S', 'š'=>'s', 'Ð'=>'Dj','Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 
        'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E', 'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 
        'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U', 'Ú'=>'U', 
        'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss','à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 
        'å'=>'a', 'æ'=>'a', 'ç'=>'c', 'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 
        'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 
        'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y', 'ƒ'=>'f'
    );

    /**
     * Generates a unique GUID
     *
     * @return string
     */
    public static function generateGUID(){
        $chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890_-";
        $max = strlen($chars) - 1;
        $guid = "";

        do{
            while(strlen($guid) != self::GUID_LENGTH){
                $guid .= substr($chars, rand(0, $max), 1);
            }
        }while(DL::getSingle("SELECT COUNT(*) FROM file WHERE guid = '$guid'") > 0);

        return $guid;
    }

    /**
     * Generates SQL to retrieve files of the specified names and ids
     * $names and $ids arrays must be the same length
     * @param array $names
     * @param array $ids
     * @return string
     */
    private static function sqlRetriever(array $names, array $ids){

        $all = implode(', ', array_merge(File::all('file'), File::all('child')));

        $restrictions = array();

        foreach($names as $i => $name){
            $restrictions[] = "(file.owner = '$name' AND file.idowner = '$ids[$i]')";
        }

        if(sizeof($restrictions) > 0)
            $where = 'WHERE ' . implode(' OR ', $restrictions);
        else
            $where = '';

        $sql = "
          SELECT $all
          FROM file
           LEFT JOIN file child ON child.idparent = file.idfile
          $where
          ORDER BY file.uploaded desc
          ";

        return $sql;
    }
    /**
     * Generates SQL to retrieve files of the specified guids
     *
     * @param array $guids
     * @return string
     */
    private static function sqlRetrieverByGuid(array $guids){

        $all = implode(', ', array_merge(File::all('file'), File::all('child')));

        $restrictions = array();

        foreach($guids as $i => $guid){
            $guid = trim($guid);
            $restrictions[] = "(file.guid = '$guid')";
        }

        if(sizeof($restrictions) > 0)
            $where = 'WHERE ' . implode(' OR ', $restrictions);
        else
            $where = '';

        $sql = "
          SELECT $all
          FROM file
           LEFT JOIN file child ON child.idparent = file.idfile
          $where
          ORDER BY file.uploaded desc
          ";

        return $sql;
    }

    /**
     * Retrieves a list of files by searching by the specified, comma separated guids
     *
     * @remote
     * @param string $guids
     * @return File[]
     */
    public static function byGuids($guids){

        $arr = DataLatte::getCache(self::sqlRetrieverByGuid(explode(',', $guids)));

//        ajaxLog("Cache: " . sizeof($arr));

        $files = array();

        foreach($arr as $row){
//            ajaxLog(var_export($row, true));
            $file = new File();
            DataLatte::recognize($row, $file, 'file');
//            ajaxLog(var_export($file, true));
            $child = new File();
            DataLatte::recognize($row, $child, 'child');

            if(!$file->idfile) continue;

            if(!isset($files[$file->idfile])){
                $files[$file->idfile] = $file;
            }

            if(!$child->idfile) continue;

//            ajaxLog("{Child Assigned}");
            $files[$child->idparent]->children[] = $child;
        }

        return array_values($files);
    }
    
    /**
     * Gets the files of the specified record (if any)
     * 
     * @param Array<string> $names
     * @param Array<string> $ids
     * @return Array<File>
     */
    public static function byOwners(array $names, array $ids){

        $all = implode(', ', array_merge(File::all('file'), File::all('child')));

        $arr = DataLatte::getCache(self::sqlRetriever($names, $ids));

//        ajaxLog("Cache: " . sizeof($arr));

        $files = array();

        foreach($arr as $row){
//            ajaxLog(var_export($row, true));
            $file = new File();
            DataLatte::recognize($row, $file, 'file');
//            ajaxLog(var_export($file, true));
            $child = new File();
            DataLatte::recognize($row, $child, 'child');

            if(!$file->idfile) continue;

            if(!isset($files[$file->idfile])){
                $files[$file->idfile] = $file;
            }

            if(!$child->idfile) continue;

//            ajaxLog("{Child Assigned}");
            $files[$child->idparent]->children[] = $child;
        }

        return array_values($files);
    }

    /**
     * Gets the files of the specified records.  Files contains all children.
     *
     * @remote
     * @param string $name
     * @param int $id
     * @return Array<File>
     */
    public static function byOwner($name, $id){
        return self::byOwners(array($name), array($id));
    }

    /**
     * Gets the files of the specified records. Files contains all children.
     * @param array $records
     * @return Array
     */
    public static function byRecords(array $records){
        $names = array();
        $ids = array();

        foreach($records as $r){
            $names[] = get_class($r);
            $ids[] = $r->getIdValue();
        }

        return self::byOwners($names, $ids);
    }

    /**
     * Gets the files of the specified record. File contains all children.
     * @param DataRecord $record 
     * @return array
     */
    public static function byRecord($record){
        $owner = get_class($record);
        $id = $record->getIdValue();
        
        return self::byOwner($owner, $id);
    }

    /**
     * Creates a file from the <c>$_FILES</c> array.
     *
     * Two methods on the owner object may be called if they exist:
     *
     * <ul>
     * <li><c>onFilesLinking</c> - Before making connection to S3. You may alter the files by directly accessing the <c>$_FILES</c> array </li>
     * <li><c>onFilesLinked</c>(<c>$files</c>) - After files are uploaded. The passed array contains <c>File</c> objects</li>
     * </ul>
     *
     * @global $strings
     * @param any $owner
     * @param int $idowner
     * @return array
     * @throws Exception
     */
    public static function createFiles($owner, $idowner, $data, $unlinkTempFiles = true){
        global $strings;

        function microtime_float() { list($usec, $sec) = explode(" ", microtime()); return ((float)$usec + (float)$sec); }

        $files = array();
        $ownerObject = null;

        try{
            $ownerObject = $owner::byAuto($idowner);

            // Call linking
            if(method_exists($ownerObject, 'onFilesLinking')){
                $ownerObject->onFilesLinking();
            }
        }catch(Exception $e){

        }

        foreach($_FILES as $f){

            if($f['error']){
                if($f['name'])
                    throw new Exception(sprintf($strings['errorHandlingS'], $f['name']), "Code: " . $f['error']);
                continue;
            }

            // Create the file
            $files[] = self::createFile($f['tmp_name'], $f['name'], $owner, $idowner, $data, $unlinkTempFiles);

        }

        // Call linking
        if($ownerObject && method_exists($ownerObject, 'onFilesLinked')){
            $ownerObject->onFilesLinked($files);
        }

        return $files;

    }

    /**
     * Creates the file by using the specified data
     *
     * @param $tmp_path
     * @param $name
     * @param $owner
     * @param $idowner
     * @param $data
     * @param bool $unlinkTempFiles
     * @return File|null
     * @throws Exception
     */
    public static function createFile($tmp_path, $name, $owner, $idowner, $data = null, $unlinkTempFiles = true){

        // Shorten name if necessary
        if(strlen($name) > 80) $name = substr($name, strlen($name) - 80);

        // File name
        $fileName = self::cleanForURL(uniqid() . '-' . $name);

        // tmp file
        $fileTempName = $tmp_path;

        // Flag to success of operation
        $success = false;

        // Create file record
        $file = new File();
        $file->iduser = Session::idUser();
        $file->name = $name;
        $file->size = filesize($tmp_path);


        if(CmsConfig::getFileUploadIsS3()){

            // Create S3 connection
            $s3 = new S3(CmsConfig::getS3Key(), CmsConfig::getS3Pass());

            if($s3->putObjectFile($fileTempName, CmsConfig::getS3Bucket(), $fileName, S3::ACL_PUBLIC_READ)){

                $success = true;
                $file->bucket = CmsConfig::getS3Bucket();
                $file->path = $fileName;

            }else{
                throw new Exception("Error copying file to S3");
            }
        }else{

            $base_path = String::combinePath(__DIR__,'../../../html');
            $path = String::combinePath($base_path, CmsConfig::getFilesPath());
            $filePath = String::combinePath($path, $fileName);

            // Copy file
            if (copy($fileTempName, $filePath) === true){
                $file->path = String::combineUrl(CmsConfig::getFilesPath(), $fileName);
                $success = true;
            }else{
                $errors = error_get_last();
                throw new Exception("Error copying file from path: $fileTempName to path: $filePath (" . var_export($errors, true)  .")");
            }


        }

        if ($success){
            $file->owner = $owner;
            $file->idowner = $idowner;

            if(is_array($data)){
                foreach($data as $k => $value){
                    $file->{$k} = $value;
                }
            }

            $file->insert();

            // Delete tmp file
            if($unlinkTempFiles){
                unlink($fileTempName);
            }else{
                $file->tempPath = $fileTempName;
            }

            // Return file
            return $file;
        }


        return null;

    }

    /**
     * Creates the file by using the specified data
     *
     * @param $base64data
     * @param $name
     * @param $owner
     * @param $idowner
     * @param $path
     * @param $data
     * @return File|null
     * @throws Exception
     */
    public static function createFileFromBase64($base64data, $name, $owner, $idowner, &$path = null, $data = null){

        // Decode file from data
        $decoded = base64_decode($base64data);

        // Decide path for temp file
        $path = tempnam(sys_get_temp_dir(), 'fragment-');



        // Write data to temporary file
        if(file_put_contents($path, $decoded) === false){
            $err = var_export(error_get_last(), true);
            throw new Exception("Can't write base64 tmp file at: $path ($err)");
        }

        $hasPath = isset($path);

        return self::createFile($path, $name, $owner, $idowner, $data, !$hasPath);

    }
    
    /**
     * Gets an array unlinked File objects inserted by the logged user.
     * 
     * @remote
     * @param string $ownerName
     * @return Array<File>
     */
    public static function myUnlinked($ownerName){
        $iduser = Session::idUser();
        
        return DataLatte::arrayOf(get_class(), "
            SELECT * 
            FROM   file
            WHERE  iduser = '$iduser'
              AND  owner = '$ownerName'
              AND  idowner < 0
        ");
    }
    
    /**
     * Links unlinked files to object
     * 
     * @param DataRecord $owner
     */
    public static function linkUnlinkedTo(DataRecord $owner){
        $files = File::myUnlinked(get_class($owner));
        
        foreach($files as $file){
            $file->idowner = $owner->getIdValue();
            $file->save();
        }
    }

    /**
     * @remote
     * @param int $idfile
     * @param string $name
     * @param string $description
     */
    public static function changeNameDescription($idfile, $name, $description){
        $file = File::byAuto($idfile);

        $file->name = $name;
        $file->description = $description;

        $file->update();
    }

    /**
     * Cleans a string to be used in an URL
     *
     * @param string $toClean
     * @return string
     */
    public static function cleanForURL($toClean) {
        $allowed = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM.-_';

        $toClean     =     str_replace('&', '-and-', $toClean);
        $toClean     =    trim(preg_replace('/[^\w\d_ -\.]/si', '', $toClean));//remove all illegal chars
        $toClean     =     str_replace(' ', '-', $toClean);
        $toClean     =     str_replace('--', '-', $toClean);

        $toClean = strtr($toClean, self::$normalizeChars);

        $fileName = null;

        // Filter valid chars
        foreach(str_split($toClean) as $char)
            if(strpos($allowed, $char) !== false)
                $fileName .= $char;

        return $fileName;
    }

    /**
     * Path to temp file position (When uploading)
     * @var string
     */
    public $tempPath;

    /**
     * Downloads the file to the specified path.
     * If no path specified, will create one in temp files.
     * Always returns the path where file was saved.
     *
     * @param $path
     * @return string
     */
    public function download($path = null){

        if($path == null){

            // Decide path for temp file
            $path = sys_get_temp_dir() . '/' . uniqid() . $this->name;
        }

        // Create S3 connection
        $s3 = new S3(self::S3KEY, self::S3PASS);

        $s3->getObject($this->bucket, $this->path, $path);

        return $path;

    }

    /**
     * 
     * @global array $strings
     * @return any
     */
    public function metadata(){
        global $strings;
        
        return array(
            'title' => $strings['file'],
            'name' => $this->name,
            
            
            'relationships' => array(
                'iduser' => array(
                    'title' => $strings['owner'],
                    'type' => 'User',
                    'cardinality' => '1,1',
                ),
            ),
             
            'fields' => array(
                'name' => array(
                    'text' => $strings['name'],
                    'readonly' => true,
                ),
                
                'size' => array(
                    'text' => $strings['size'],
                    'type' => 'number',
                    'readonly' => true,
                ),
                
                'bucket' => array(
                    'text' => $strings['bucket'],
                    'readonly' => true,
                    'grid-visible' => false,
                ),
                
                'path' => array(
                    'text' => $strings['path'],
                    'readonly' => true,
                    'grid-visible' => false,
                    'is-visible' => false,
                ),
                
                'uploaded' => array(
                    'text' => $strings['uploaded'],
                    'type'=> 'datetime',
                    'grid-visible' => true,
                    'readonly' => true,
                ),
                
                'description' => array(
                    'text' => $strings['description'],
                    'type' => 'text',
                    'max-length' => 128,
                    'grid-visible' => false,
                ),
            ),
            
            
        );
    }


    /**
     * Gets the public url to reach file.
     * @return string 
     */
    public function getUrl(){
        return "http://" . $this->bucket . ".s3.amazonaws.com/" . $this->path;
    }
    
    /**
     * 
     * @global array $strings
     * @return boolean
     * @throws Exception
     */
    public function onDeleting(){
        global $strings;
        
        // Delete file on S3
        $s3 = new S3(self::S3KEY, self::S3PASS);
        
        if(!$s3->deleteObject($this->bucket, $this->path)){
            throw new Exception($strings['error'], $strings['errCantDeleteOnS3']);
            return false;
        }
    }
    
    /**
     * 
     */
    public function onInserting(){
        $this->guid = self::generateGUID();
        $this->uploaded = DataLatte::datetime();
    }
    
    /**
     * 
     * @param type $tag
     */
    public function onRenderFields($tag){
        
        $tag->add( Conversation::renderOf($this) ); 
        
    }
    
    /**
     * Renames the file on local DB and on S3
     * 
     * @global array $strings
     * @param string $newname New name for file
     * @throws Exception
     */
    public function rename($newname){
        
        global $strings;
        
        // Create S3 connection
        $s3 = new S3(self::S3KEY, self::S3PASS);
        
        $newname = self::cleanForURL($newname);
        $newpath = uniqid() . "-" . $newname;
        
        // Copy object
        if($s3->copyObject($this->bucket, $this->path, $this->bucket, $newpath, S3::ACL_PUBLIC_READ)){
            if($s3->deleteObject($this->bucket, $this->path)){
                $this->path = $newpath;
                $this->name = $newname;
                $this->save();
            }else{
                throw new Exception($strings['errCantDeleteOnS3']);
            }
        }else{
            throw new Exception($strings['errCopyingInS3']);
        }
        
    }
    
    /**
     * Removes the registry of file and its contents from S3.
     *
     * @remote
     * @global array $strings
     * @throws SecurityException
     * @throws Exception
     */
    public function physicalRemove(){
        
        global $strings;

        if($this->idparent == 0 && !Grant::hasGrantOf('inplek-delete-files')){
            throw new SecurityException();
        }
        
        // Create S3 connection
        $s3 = new S3(self::S3KEY, self::S3PASS);
        
        if(!$s3->deleteObject($this->bucket, $this->path)){
            throw new Exception($strings['cantDeleteFileS3']);
        }
        
        $this->delete();
    }

    /**
     * User of the File
     * @var
     */
    public $user;

    /**
     * Array of children files (Thumbs)
     * @var Array
     */
    public $children = array();

    /**
     * @throws Exception
     * @throws SecurityException
     */
    public function pack(){
        $arr= parent::pack();

        $arr['properties']['children'] = $this->packArray($this->children);

        return $arr;
    }
}
/**
 * Stub generated by xlatte
 */
class Fragment extends fragmentBase{

    /**
     * Gets the attributes of a DOM element like: <element attr="something">
     * @param string $html
     * @return mixed
     */
    public static function elementAttributes($html) {
        if (!$html) {
            return false;
        }

        // Grab the string of attributes inside an element tag.
        $found = preg_match('#'.
            '\s+([^>]+(?:"|\'))#',
            $html, $matches);
        if ($found == 1) {
            $attribute_array = array();
            $attribute_string = $matches[1];
            // Match attribute-name attribute-value pairs.
            $found = preg_match_all(
                '#([^\s=]+)\s*=\s*(\'[^<\']*\'|"[^<"]*")#',
                $attribute_string, $matches, PREG_SET_ORDER);
            if ($found != 0) {
                // Create an associative array that matches attribute
                // names to attribute values.
                foreach ($matches as $attribute) {
                    $attribute_array[$attribute[1]] =
                        substr($attribute[2], 1, -1);
                }
                return $attribute_array;
            }
        }
        // Attributes either weren't found, or couldn't be extracted
        // by the regular expression.
        return false;
    }

    /**
     * Finds the position of the first ocourrence of specified tag
     * @param string $tagname
     * @param string $haystack
     * @return array
     */
    public static function findTagIn($tagname, $haystack){

        $group = array();

        preg_match("/<" . $tagname . '[\w]*[^>]*>/', $haystack, $group, PREG_OFFSET_CAPTURE);

        if(sizeof($group))
            return $group[0];

        return array();
    }

    /**
     * Finds the position of the first ocourrence of specified tag
     * @param string $tagname
     * @param string $haystack
     * @return array
     */
    public static function findTagsIn($tagname, $haystack){

        $group = array();

        preg_match_all("/<" . $tagname . '[\w]*[^>]*>/', $haystack, $group);


        if(sizeof($group))
            return $group[0];

        return array();
    }

    public function getTagsByName($name){
        return self::findTagsIn($name, $this->value);
    }

    public function getImages(){
        return $this->getTagsByName('img');
    }

    public function getImagesSrc(){
        $imgs = $this->getImages();
        $r = array();

        foreach($imgs as $img){
            $attr = self::elementAttributes($img);
            $src = $attr['src'];
            if($src){
                $r[] = $src;
            }
        }

        return $r;
    }

    public function getFirstImage(){
        $img = self::findTagsIn('img', $this->value);

        if (sizeof($img)){
            return $img[0];
        }else{
            return false;
        }
    }

    public function getFirstImageSrc(){
        $img = $this->getFirstImage();

        if ($img){
            $atts = self::elementAttributes($img);
            return $atts['src'];
        }

        return false;
    }

}/**
 * Stub generated by xlatte
 */
class Group extends groupBase{

    /**
     * @return Group[]
     */
    public static function byUser($iduser){
        return DL::arrayOf('Group', "
            SELECT #COLUMNS
            FROM `group`
             INNER JOIN group_user USING (idgroup)
            WHERE group_user.iduser = '$iduser'
        ");
    }

    /**
     *
     * @remote
     * @return Group[]
     */
    public static function catalog(){
        return DL::arrayOf('Group', "
            SELECT #COLUMNS
            FROM `group`
        ");
    }

    /**
     * @remote
     * @param string $text
     * @return Group[]
     */
    public static function search($text){
        return DL::arrayOf('Group', "
            SELECT #COLUMNS
            FROM `group`
            WHERE name LIKE '$text%'
        ");
    }

}/**
 * Stub generated by xlatte
 */
class GroupUser extends groupUserBase{

    /**
     * @remote
     * @param int $idgroup
     * @return GroupUser[]
     */
    public static function byGroup($idgroup){
        return DL::arrayOf('GroupUser,User', "
            SELECT #COLUMNS
            FROM group_user
             LEFT JOIN `user` USING (iduser)
            WHERE idgroup = '$idgroup'
        ");
    }

    /**
     * @var User
     */
    public $user;

}/**
 * Stub generated by xlatte
 */
class Page extends pageBase{

    /**
     * Length to use in GUIDs
     */
    const GUID_LENGTH = 10;

    /**
     * Key used to store the page configuration settings
     */
    const CONFIGURATION_SETTINGS_KEY = 'page-configuration';

    /**
     * Flag to indicate page is homepage
     */
    const FLAG_HOMEPAGE = 1;

    /**
     * Flag to indicate page is in trash
     */
    const FLAG_TRASH = 1024;

    /**
     * Allows the user to see the page and access the fragments of the page
     */
    const PERMISSION_READ = 1;

    /**
     * Allows the user to modify the page
     */
    const PERMISSION_WRITE = 2;

    /**
     * Allows the user to delete the page
     */
    const PERMISSION_DELETE = 4;

    /**
     * Allows user to insert new children to the page
     */
    const PERMISSION_INSERT_CHILD = 8;

    /**
     * Allows the user to read children of the page. User gets to know the children he owns.
     */
    const PERMISSION_READ_CHILDREN = 16;

    const SEARCH_MAX_PAGESIZE = 100;

    /**
     * Dictionary of casts for search algorithms
     * @var array
     */
    private static $search_casts = array(
        'string' => null,
        'int' => 'SIGNED',
        'integer' => 'SIGNED',
        'float' => 'DECIMAL',
        'date' => 'DATE',
        'datetime' => 'DATETIME'
    );

    /**
     * Map of character normalization for URLS
     * @var array
     */
    public static $normalizeChars = array(
        'Š'=>'S', 'š'=>'s', 'Ð'=>'Dj','Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A',
        'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E', 'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I',
        'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U', 'Ú'=>'U',
        'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss','à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a',
        'å'=>'a', 'æ'=>'a', 'ç'=>'c', 'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i',
        'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'ø'=>'o', 'ù'=>'u',
        'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y', 'ƒ'=>'f'
    );

    /**
     * Returns a page from the specified URL query token.
     * The q variable may be the guid or the key of the page.
     *
     * @remote
     * @param string $q
     * @return Page
     * @throws SecurityException
     */
    public static function byUrlQ($q){

        if (strpos($q, '"') !== false || strpos($q, "'") !== false){
            throw new SecurityException('Suspicious $q');
        }

        return DL::oneOf('Page', "
            SELECT #COLUMNS
            FROM page
            WHERE (guid = '$q' OR `key` = '$q')
            AND (flags & 1024) != 1024
        ");
    }

    /**
     * Generates a unique GUID
     *
     * @return string
     */
    public static function generateGUID(){
        $chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890_-";
        $max = strlen($chars) - 1;
        $guid = "";

        do{
            while(strlen($guid) != self::GUID_LENGTH){
                $guid .= substr($chars, rand(0, $max), 1);
            }
        }while(DL::getSingle("SELECT COUNT(*) FROM page WHERE guid = '$guid'") > 0);

        return $guid;
    }

    /**
     * Return a value indicating if the key is valid for the specified page
     *
     * @remote
     * @param int $idpage
     * @param string $key
     * @return boolean
     */
    public static function isValidURLKey($idpage, $key){
        // Pages
        $pages = DL::arrayOf('Page', "
            SELECT *
            FROM page
            WHERE `key` = '$key'
        ");

        if (sizeof($pages) > 1){
            return false;
        }else if (sizeof($pages) == 0){
            return true;
        }else{
            return $pages[0]->idpage == $idpage;
        }


    }

    /**
     * Cleans a string to be used in an URL
     *
     * @param string $toClean
     * @return string
     */
    public static function normalizeForURL($toClean) {
        $allowed = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM.-_';

        $toClean     =      strtolower($toClean);
        $toClean     =     str_replace('&', '-and-', $toClean);
        $toClean     =    trim(preg_replace('/[^\w\d_ -\.]/si', '', $toClean));//remove all illegal chars
        $toClean     =     str_replace(' ', '-', $toClean);
        $toClean     =     str_replace('--', '-', $toClean);

        $toClean = strtr($toClean, self::$normalizeChars);

        $fileName = null;

        // Filter valid chars
        foreach(str_split($toClean) as $char)
            if(strpos($allowed, $char) !== false)
                $fileName .= $char;

        return $fileName;
    }

    /**
     * @remote
     * @return Page[]
     */
    public static function rootPages(){
        return DL::arrayOf('Page, Setting configurationSetting', "
            SELECT #COLUMNS
            FROM page
             INNER JOIN setting configurationSetting ON (configurationSetting.idowner = page.idpage AND owner = 'Page' AND configurationSetting.name = 'page-configuration')
            WHERE idparent = '0'
        ");
    }

    /**
     * Support for search method
     * @param $field
     */
    private static function search_validate_field($field){

    }

    /**
     * Support for search method
     * @param $field
     */
    private static function search_validate_constant($field){

    }

    /**
     * Creates SQL from specified filter of search
     * @param $f
     * @param $page_fields
     * @return string
     * @throws Exception
     */
    private static function search_create_filter($f, $page_fields){
        $filter_string = var_export($f, true);

        if(!is_array($f))
        throw new Exception("Filter is not an array: " . $filter_string);


        $count = sizeof($f);

        // Check if filter is a group
        if ($count == 1 && isset($f['group'])){
//            echo "[ENTERING group]";
            $sentences = array();

            foreach($f['group'] as $sub_filter){
                $sentences[] = self::search_create_filter($sub_filter, $page_fields);
            }



            return '(' . implode(' OR ', $sentences) . ')';
//        }else{
//            echo "[NOT A GROUP: " . var_export($f, true) . "]";
        }

        if($count < 1) {
            throw new Exception('Incorrect filter: ' . $filter_string);
        }

        $isAssoc = array_keys($f) !== range(0, $count - 1);
        $c = '';
        $operator = '=';
        $type = 'string';
        $typeSet = false;

        // Reconstruct information in filter
        if ($isAssoc){

            if (isset($f['a'])){
                $a = $f['a'];
            }else{
                throw new Exception('Missing "a" operand in filter: ' . $filter_string);
            }

            if (isset($f['b'])){
                $b = $f['b'];
            }else{
                throw new Exception('Missing "b" in filter: ' . $filter_string);
            }

            if (isset($f['c'])){
                $c = $f['c'];
            }else{
                $c = $b;
            }

            if (isset($f['operator'])){
                $operator = $f['operator'];
            }

            if (isset($f['type'])){
                $typeSet = true;
                $type = $f['type'];
            }

        }else{
            if($count == 2){
                $a = $f[0];
                $b = $f[1];

            }else{
                $a = $f[0];
                $operator = $f[1];
                $b =  $f[2];

                if ($count > 3){
                    $c = $f[3];
                }

                if ($count > 4){
                    $typeSet = true;
                    $type = $f[4];
                }
            }
        }

        // Validate
        self::search_validate_field($a);
        self::search_validate_constant($b);
        self::search_validate_constant($c);

        // Check if a is a setting
        $isSetting = !in_array($a, $page_fields);

        // Casts dictionary
        $casts = self::$search_casts;

        // Check if cast is ok
        if(!in_array(strtolower($type), array_keys($casts)))
            throw new Exception('Filter type not recognized: ' . $type);

        if($isSetting){
            $aToUse = 'setting.value';
        }else{
            $aToUse = "page.$a";
        }

        // Check if cast needed
        if(($isSetting || $typeSet) && $type != 'string'){

            if($isSetting){
                $aToUse = "CAST(setting.value AS " . $casts[strtolower($type)] . ")";
            }else{
                $aToUse = "CAST(page.$a AS " . $casts[strtolower($type)] . ")";
            }

        }

        // Filter SQL sentence
        $sentence = '';

        if ($isSetting){

            $lock = "setting.name = '$a' AND";

            switch(strtolower($operator)){
                case '=':
                case '<':
                case '>':
                case '<=':
                case '>=':
                    $sentence = "( $lock $aToUse $operator '$b')"; break;
                case 'between':
                    $sentence = "( $lock ($aToUse $operator '$b' AND '$c'))"; break;
                case '&':
                case '|':
                    $sentence = "( $lock (($aToUse $operator $b) = $c))"; break;
                default:
                    throw new SecurityException("Unrecognized operator: $operator");
            }
        }else{

            if($typeSet){
                $a = "CAST(page.$a AS " . $casts[strtolower($type)] . ")";
            }

            switch(strtolower($operator)){
                case '=':
                case '<':
                case '>':
                case '<=':
                case '>=':
                    $sentence = "($a $operator '$b')"; break;
                case 'between':
                    $sentence = "($a $operator '$b' AND '$c')"; break;
                case '&':
                case '|':
                    $sentence = "(($a $operator $b) = $c)"; break;
                default:
                    throw new SecurityException("Unrecognized operator: $operator");
            }
        }

        return $sentence;

    }

    /**
     * Searches for pages with different options of retrieval
     * @param $options
     * @return PageResult
     * @throws Exception
     */
    public static function search($options){

        // Setup variables
        $settings = isset($options['settings']) ? $options['settings'] : array();
        $fragments = isset($options['fragments']) ? $options['fragments'] : array();
        $filters = isset($options['filters']) ? $options['filters'] : array();
        $pageFields = array_keys((new Page())->getFields());
        $sentences = array();
        $page = isset($options['page']) ? $options['page'] : 1;
        $pageSize = isset($options['pageSize']) ? $options['pageSize'] : 50;
        $sortBy = isset($options['sortBy']) ? $options['sortBy'] : 'created DESC';

        //region Default filters
        $filters = array_merge($filters, array(
            array("online", 1)
        ));

        //endregion

        //region Create Filters for idparent
        // Add idparent conditions
        if (isset($options['idparent'])){
            $idparents = is_array($options['idparent']) ? $options['idparent'] : array($options['idparent']);
            $group = array('group' => array());
            foreach($idparents as $idparent){
                $group['group'][] = array('idparent', $idparent);
            }

            $filters[] = $group;
        }
        //endregion

        //region Arrange Setting filters into a group
        $settingFilters = array();
        $columnFilters = array();
        $groupFilters = array();


//        print_r($filters);

        foreach($filters as $i => $filter){
            $size = sizeof($filter);
            $a = isset($filter['a']) ? $filter['a'] : $filter[0];

            if($size == 1 && isset($filter['group'])){
                $groupFilters[] = $filter;
            }elseif(!in_array($a, $pageFields)){
                $settingFilters[] = $filter;
            }else{
                $columnFilters[] =$filter;
            }

        }

//        print_r($settingFilters);

        if(sizeof($settingFilters) > 0){

            $settingFilters = array(array('group' => $settingFilters));
        }

        $filters = array_merge($settingFilters, $columnFilters, $groupFilters);
//        print_r($filters);
//        die();
        //endregion

        //region Convert filters into SQL

        foreach($filters as $i => $filter){
            $sentences[] = self::search_create_filter($filter, $pageFields);
        }

        // Tie together sentences
        $sentencesSQL = implode("\nAND ", $sentences);
        $sentencesSQL = $sentencesSQL ? 'AND ' . $sentencesSQL : $sentencesSQL;
        //endregion

        //region Convert sortBys into SQL
        // Sort result (Because of SQL
        if(isset($options['randomize']) && $options['randomize']){
            $sortBySQL = 'RAND()';
        }else{
            if(!is_array($sortBy)) $sortBy = array($sortBy);
            $sorts = array();

            foreach($sortBy as $instruction){
                $parts = explode(' ', $instruction);
                $field = $parts[0];
                $direction = sizeof($parts) > 1 ? $parts[1] : 'ASC';
                $casting = sizeof($parts) > 2 ? $parts[2] : null;
                $isSetting = !in_array($field, $pageFields);
                $casts = self::$search_casts;

                if($isSetting){
                    $sorts[] = "setting.name = '$field'";
                }

                if($casting && $casts[$casting]){
                    $castType = $casts[$casting];
                    $sorts[] = "CAST(setting.value AS $castType) $direction";
                }else{
                    $sorts[] = "page.$field $direction";
                }

            }
            $sortBySQL = implode(", ", $sorts);
        }

        //endregion

        //region Generate SQL Query for retrieving pages
        $pagesSQL = "
SELECT #COLUMNS
FROM page
 LEFT JOIN setting on (setting.owner = 'Page' AND setting.idowner = page.idpage)
WHERE (pworld & 1) = 1
AND (page.flags & 1024) != 1024
$sentencesSQL
GROUP BY page.idpage
ORDER BY $sortBySQL
        ";
//        print_r($options);
//        var_dump(debug_backtrace());
//        die($pagesSQL);

        //endregion

        // Go for pages
        $result = DL::pageOf('Page', $pagesSQL, $page, min($pageSize, self::SEARCH_MAX_PAGESIZE));

        // Get pages as associative array
        $pages = DL::associativeArray($result['records']);

        // Get array with ids of pages
        $pagesIds = array_keys($pages);

        //region Retrieve Fragments
        if(!is_array($fragments))
            $fragments = array($fragments);

        if(sizeof($fragments) > 0){

            // Gather ids
            $fids = implode("' OR idpage = '", $pagesIds);
            $fnames = implode("' OR name = '", $fragments);

            $fragmentRecords = DL::arrayOf('Fragment', "
                SELECT *
                FROM fragment
                WHERE (idpage = '$fids')
                AND (name = '$fnames')
            ");

            // Attach fragments to pages
            foreach($fragmentRecords as $f){
                $pages[$f->idpage]->fragments[$f->name] = $f;
            }

        }
        //endregion

        //region Retrieve Settings
        if(!is_array($settings))
            $settings = array($settings);

        // Get settings
        if(sizeof($settings) > 0){

            // Gather ids
            $ids = implode("' OR idowner = '", $pagesIds);
            $snames = implode("' OR name = '", $settings);

//            die("
//                SELECT *
//                FROM fragment
//                WHERE (idpage = '$ids')
//                AND (name = '$snames')
//            ");

            $settingRecords = DL::arrayOf('Setting', "
                SELECT *
                FROM setting
                WHERE owner = 'Page'  
                AND (idowner = '$ids')
                AND  (name = '$snames')
            ");

//            die(var_export($settingRecords));

            // Attach settings to pages
            foreach($settingRecords as $s){
                $pages[$s->idowner]->settings[$s->name] = $s;
            }
        }
        //endregion

        return $result;

    }

    /**
     * Configuration of page
     * @var Setting
     */
    var $configuration;

    /**
     * @var array
     */
    public $settings = array();

    /**
     * @var array
     */
    public $fragments = array();

    /**
     * @var Page
     */
    private $_parent = false;

    /**
     * @var Setting
     */
    private $_configuration = null;

    /**
     * @var array
     */
    private $_configurationArr = null;

    /**
     * Gets the default permissions for the children of the page
     * @return array
     */
    private function getDefaultChildrenPermissions(){
        $config = $this->getConfigurationArr();
        $owner = 59;
        $group = 17;
        $other = 0;
        $world = 17;

        if ($config['children'] && $config['children']['permissions']){

            $p = $config['children']['permissions'];

            if ($p['owner']){
                $owner = $p['owner'];
            }

            if ($p['group']){
                $group = $p['group'];
            }

            if ($p['other']){
                $other = $p['other'];
            }

            if ($p['world']){
                $world = $p['world'];
            }
        }

        return array(
            'owner' => $owner,
            'group' => $group,
            'other' => $other,
            'world' => $world
        );
    }

    /**
     * Checks if the logged user has the specified permission
     * @param int $p
     * @return bool
     */
    public function canI($p){

        if (!Session::isLogged()){
            return ($this->pworld & $p) == $p;
        }

        if(Session::me()->isRoot()){
            return true;
        }

        $owner = ($this->powner & $p) == $p;
        $group = ($this->pgroup & $p) == $p;
        $other = ($this->pother & $p) == $p;
        $can = false;

        if($other){
            return true;
        }

        if($owner || $group){

            // Owner check
            $can = $owner && $this->iduser == Session::idUser();

            // Other check
            if(!$can && Session::me()->inGroup($this->idgroup)){
                $can = true;
            }

        }

        return $can;
    }

    /**
     * Gets a value indicating if the user can write to the page at the moment
     * @return bool
     */
    public function canIWrite(){
        return $this->canI(self::PERMISSION_WRITE) || ($this->isMine() && !$this->isOnline());
    }

    /**
     * Gets the applicable fragments (including specified by parent) with records
     * @return array
     */
    public function getAllFragments(){
        $result = array();
        $fragments = DL::associativeArray($this->getFragments(), 'name');
        $config = $this->getConfigurationArr();
        $parentConfig = $this->getParent() ? $this->getParent()->getConfigurationArr() : array();

        // Get all fragments
//        $all_frags = array_merge(
//            (is_array($config['fragments']) ? $config['fragments'] : array()),
//            (is_array($parentConfig['children']) && is_array($parentConfig['children']['fragments']) ? $parentConfig['children']['fragments'] : array())
//        );

        $all_frags = array();

        if (is_array($config['fragments'])){
            foreach($config['fragments'] as $i => $f){

                $key = '';

                if($f['key']){
                    $key = $f['key'];

                }else if(!is_numeric($i)){
                    $key = $i;

                }else{
                    $key = 'MISSING_KEY';
                }

                $f['key'] = $key;
                $all_frags[] = $f;
            }
        }

        if (is_array($parentConfig['children']) && is_array($parentConfig['children']['fragments'])){
            foreach($parentConfig['children']['fragments'] as $i => $f){
                $key = '';

                if($f['key']){
                    $key = $f['key'];

                }else if(!is_numeric($i)){
                    $key = $i;

                }else{
                    $key = 'MISSING_KEY';
                }

                $f['key'] = $key;
                $all_frags[] = $f;
            }
        }

        if (sizeof($all_frags) == 0){
            $all_frags[] = array(
                "key" => "body",
                "name" => "strings.body"
            );
        }

        foreach($all_frags as $f){
            $key = $f['key'];

            if($fragments[$key])
                $f['record'] = $fragments[$key];

            $result[$key] = $f;
        }

        return $result;

    }

    /**
     * Gets the applicable segments (including specified by parent) with values.
     * Even If setting has no value present, an empty new record will be created.
     *
     * @return Setting[]
     */
    public function getAllSettings(){
        $result = array();

        $records = Setting::byRecordAll($this);
        $config = $this->getConfigurationArr();
        $parentConfig = $this->getParent() ? $this->getParent()->getConfigurationArr() : array();

        // Gather parent settings in result
        if(isset($parentConfig['children']['settings'])){
            foreach($parentConfig['children']['settings'] as $key => $setting){
                $k = $key;
                if($setting['key']) $k = $setting['key'];
                $result[$k] = null;
            }
        }

        // Gather config settings in result
        if(isset($config['settings'])){
            foreach($config['settings'] as $key => $setting){
                $k = $key;
                if($setting['key']) $k = $setting['key'];
                $result[$k] = null;
            }
        }

        // Assign records to keys
        foreach($records as $s){
            $result[$s->name] = $s;
        }

        // Create empty volatile - storable records
        foreach($result as $key => $s){
            if(!$s){
                $r = new Setting();
                $r->owner = 'Page';
                $r->idowner = $this->idpage;
                $r->name = $key;
                $result[$key] = $r;
            }
        }

        return $result;
    }

    /**
     * Gets the settings (including parents) JSON configuration
     */
    public function getAllSettingsJSON(){
        $config = $this->getConfigurationArr();
        $parentConfig = $this->getParent() ? $this->getParent()->getConfigurationArr() : array();

        $all = array_merge(isset($config['settings']) ? $config['settings'] : array(),
            isset($parentConfig['children']['settings']) ? $parentConfig['children']['settings'] : array());

        return $all;
    }

    /**
     * @neverRemote
     * @return Setting
     */
    private function getConfigurationSetting(){
        if(!$this->_configuration){

            $c = Setting::byRecord($this, self::CONFIGURATION_SETTINGS_KEY);

            if(!$c){
                $c = new Setting();
                $c->name = self::CONFIGURATION_SETTINGS_KEY;
                $c->value = '';
                $c->saveForRecord($this);
            }

            $this->_configuration = $c;
        }

        return $this->_configuration;
    }

    /**
     * Gets the configuration of the page
     *
     * @remote
     * @return string
     */
    public function getConfiguration(){
        return $this->getConfigurationSetting()->value;
    }

    /**
     * Gets the configuration as an associative array
     * @return mixed
     */
    public function getConfigurationArr(){
        if(!$this->_configurationArr){
            $this->_configurationArr = json_decode($this->getConfiguration(), true);
        }
        return $this->_configurationArr;
    }

    /**
     * Saves the configuration of the page
     *
     * @remote
     * @param string $json
     * @return Setting
     * @throws SecurityException If not root or sysadmin
     */
    public function setConfiguration($json){
        $c = $this->getConfigurationSetting();
        $c->value = $json;
        $c->saveForRecord($this);
        return $c;
    }

    /**
     * Returns the parent page
     *
     * @return Page
     */
    public function getParent(){
        if($this->_parent === false){
            if($this->idparent > 0)
            $this->_parent = Page::byAuto($this->idparent);
        }
        return $this->_parent;
    }

    /**
     * Returns the fragments of the page
     *
     * @remote
     * @return Fragment[]
     * @throws SecurityException When PERMISSION_READ is missing
     */
    public function getFragments(){
//        if (!$this->canI(self::PERMISSION_READ)){
//            throw new SecurityException("Missing permission PERMISSION_READ");
//        }
        return DL::arrayOf('Fragment', "
            SELECT #COLUMNS
            FROM fragment
            WHERE idpage = '$this->idpage'
        ");
    }

    /**
     * Gets the child pages of the page.
     * This method can be a little confuse because is a paginated result. Page parameter refers to pagination.
     *
     * @remote
     * @param int $page Index of page
     * @return PageResult<Page>
     */
    public function getPages($page = 1){

        //TODO: AQUI ME QUEDE. Implementa un search() como el de product
        // para traer Pages con Settings, Fragments,
        // filtros por settings etc

        $ownerAnd = '';
        $orderBy = 'page.created ASC';
        $flag_trash = self::FLAG_TRASH;

        // If no permission to read chilren, return only the ones where user is owner
        if(!$this->canI(self::PERMISSION_READ_CHILDREN)){
            $ownerAnd = "AND iduser = '" . Session::idUser() . "'";
        }

        if ($this->sort == 'created-desc'){
            $orderBy = 'page.created DESC';

        }else if ($this->sort == 'modified-asc'){
            $orderBy = 'page.modified ASC';

        }else if ($this->sort == 'modified-desc'){
            $orderBy = 'page.modified DESC';

        }else if ($this->sort == 'title-asc'){
            $orderBy = 'page.title ASC';

        }else if ($this->sort == 'title-desc'){
            $orderBy = 'page.title DESC';

        }else if ($this->sort == 'custom'){
            $orderBy = 'page.`order` ASC';
        }

        $p = DL::pageOf('Page, Setting configurationSetting', "
            SELECT #COLUMNS
            FROM page
             INNER JOIN setting configurationSetting ON (configurationSetting.idowner = page.idpage AND owner = 'Page' AND configurationSetting.name = 'page-configuration')
            WHERE idparent = '$this->idpage'
            AND flags & $flag_trash != $flag_trash
            $ownerAnd
            ORDER BY $orderBy
        ", $page);

        return $p;
    }

    /**
     * Gets the settings of the page, including the parent ones.
     * @remote
     * @return *
     */
    public function getSettingsPack(){

        $parent = $this->getParent();

        return array(
            'config' => $this->getConfiguration(),
            'parentConfig' => $parent ? $parent->getConfiguration() : null,
            'settings' => Setting::byRecordAll($this)
        );
    }

    /**
     * Gets the url of the page
     * @return string
     */
    public function getUrl(){
        if ($this->key){
            return "/$this->key";
        }else{
            return "/$this->guid";
        }
    }

    /**
     * Gets a value indicating if the page belongs to logged user
     * @return bool
     */
    public function isMine(){
        return $this->iduser == Session::idUser();
    }

    /**
     * Gets a value indicating if the page is online
     * @return bool
     */
    public function isOnline(){
        return $this->online > 0;
    }

    /**
     * Override.
     * @throws SecurityException
     */
    public function onDeleting(){
        if (!$this->canI(self::PERMISSION_DELETE)){
            throw new SecurityException("Missing PERMISSION_DELETE");
        }
    }

    /**
     * Override.
     * @throws SecurityException
     */
    public function onInserting(){

        if($parent = $this->getParent()){
            if(!$parent->canI(self::PERMISSION_INSERT_CHILD)){
                throw new SecurityException("Missing PERMISSION_INSERT_CHILD");
            }
        }else if(!Session::me()->isRoot()){
            throw new SecurityException("Only root users may insert root pages.");
        }

        $this->guid = Page::generateGUID();

        if(!$this->key){
            $this->key = self::normalizeForURL($this->title);
        }

        $this->created = DL::dateTime();
        $this->iduser = Session::idUser();

        if($parent = $this->getParent()){
            $this->idgroup = $parent->idgroup;
            $permissions = $parent->getDefaultChildrenPermissions();
            $this->powner = $permissions['owner'];
            $this->pgroup = $permissions['group'];
            $this->pother = $permissions['other'];
            $this->pworld = $permissions['world'];

            $config = $parent->getConfigurationArr();

            if ($config['children'] && $config['children']['template']){
                $this->template = $config['children']['template'];
            }else{
                $this->template = $parent->template;
            }
        }else{
            $this->idgroup = 1;
            $this->powner = 63; // Default owner permissions
            $this->pgroup = 19; // Default group permissions
            $this->pother = 17; // Default other permissions
            $this->pworld = 17; // Default world permissions
        }
    }

    /**
     * Override.
     */
    public function onInsert(){
        $this->setConfiguration('');
    }

    /**
     * Override.
     */
    public function onUpdating(){
        if (!$this->canIWrite()){
            return false;
        }
    }

    /**
     * Override.
     */
    public function onSaving(){
        $this->modified = DL::dateTime();
    }

    /**
     * Sends the page to trash
     * @remote
     */
    public function sendToTrash(){
        $flags = $this->flags | self::FLAG_TRASH;
        DL::update("UPDATE page SET flags = '$flags' WHERE idpage = '$this->idpage'");
    }

    /**
     * @remote
     * @param boolean $online
     * @throws SecurityException
     */
    public function setOnline($online){
        if ($this->canIWrite()){
            $flag = $online ? 1 : 0;
            DL::update("UPDATE page SET online = '$flag' WHERE idpage = '$this->idpage'");
        }else{
            throw new SecurityException("Set online: No permissions to write");
        }
    }
}/**
* $Id$
*
* Copyright (c) 2011, Donovan Sch√∂nknecht.  All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* - Redistributions of source code must retain the above copyright notice,
*   this list of conditions and the following disclaimer.
* - Redistributions in binary form must reproduce the above copyright
*   notice, this list of conditions and the following disclaimer in the
*   documentation and/or other materials provided with the distribution.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*
* Amazon S3 is a trademark of Amazon.com, Inc. or its affiliates.
*/

/**
* Amazon S3 PHP class
*
* @link http://undesigned.org.za/2007/10/22/amazon-s3-php-class
* @version 0.5.0-dev
*/
class S3
{
	// ACL flags
	const ACL_PRIVATE = 'private';
	const ACL_PUBLIC_READ = 'public-read';
	const ACL_PUBLIC_READ_WRITE = 'public-read-write';
	const ACL_AUTHENTICATED_READ = 'authenticated-read';

	const STORAGE_CLASS_STANDARD = 'STANDARD';
	const STORAGE_CLASS_RRS = 'REDUCED_REDUNDANCY';

	private static $__accessKey = null; // AWS Access key
	private static $__secretKey = null; // AWS Secret key
	private static $__sslKey = null;

	public static $endpoint = 's3.amazonaws.com';
	public static $proxy = null;

	public static $useSSL = false;
	public static $useSSLValidation = true;
	public static $useExceptions = false;

	// SSL CURL SSL options - only needed if you are experiencing problems with your OpenSSL configuration
	public static $sslKey = null;
	public static $sslCert = null;
	public static $sslCACert = null;

	private static $__signingKeyPairId = null; // AWS Key Pair ID
	private static $__signingKeyResource = false; // Key resource, freeSigningKey() must be called to clear it from memory


	/**
	* Constructor - if you're not using the class statically
	*
	* @param string $accessKey Access key
	* @param string $secretKey Secret key
	* @param boolean $useSSL Enable SSL
	* @return void
	*/
	public function __construct($accessKey = null, $secretKey = null, $useSSL = false, $endpoint = 's3.amazonaws.com')
	{
		if ($accessKey !== null && $secretKey !== null)
			self::setAuth($accessKey, $secretKey);
		self::$useSSL = $useSSL;
		self::$endpoint = $endpoint;
	}


	/**
	* Set the sertvice endpoint
	*
	* @param string $host Hostname
	* @return void
	*/
	public function setEndpoint($host)
	{
		self::$endpoint = $host;
	}

	/**
	* Set AWS access key and secret key
	*
	* @param string $accessKey Access key
	* @param string $secretKey Secret key
	* @return void
	*/
	public static function setAuth($accessKey, $secretKey)
	{
		self::$__accessKey = $accessKey;
		self::$__secretKey = $secretKey;
	}


	/**
	* Check if AWS keys have been set
	*
	* @return boolean
	*/
	public static function hasAuth() {
		return (self::$__accessKey !== null && self::$__secretKey !== null);
	}


	/**
	* Set SSL on or off
	*
	* @param boolean $enabled SSL enabled
	* @param boolean $validate SSL certificate validation
	* @return void
	*/
	public static function setSSL($enabled, $validate = true)
	{
		self::$useSSL = $enabled;
		self::$useSSLValidation = $validate;
	}


	/**
	* Set SSL client certificates (experimental)
	*
	* @param string $sslCert SSL client certificate
	* @param string $sslKey SSL client key
	* @param string $sslCACert SSL CA cert (only required if you are having problems with your system CA cert)
	* @return void
	*/
	public static function setSSLAuth($sslCert = null, $sslKey = null, $sslCACert = null)
	{
		self::$sslCert = $sslCert;
		self::$sslKey = $sslKey;
		self::$sslCACert = $sslCACert;
	}


	/**
	* Set proxy information
	*
	* @param string $host Proxy hostname and port (localhost:1234)
	* @param string $user Proxy username
	* @param string $pass Proxy password
	* @param constant $type CURL proxy type
	* @return void
	*/
	public static function setProxy($host, $user = null, $pass = null, $type = CURLPROXY_SOCKS5)
	{
		self::$proxy = array('host' => $host, 'type' => $type, 'user' => null, 'pass' => 'null');
	}


	/**
	* Set the error mode to exceptions
	*
	* @param boolean $enabled Enable exceptions
	* @return void
	*/
	public static function setExceptions($enabled = true)
	{
		self::$useExceptions = $enabled;
	}


	/**
	* Set signing key
	*
	* @param string $keyPairId AWS Key Pair ID
	* @param string $signingKey Private Key
	* @param boolean $isFile Load private key from file, set to false to load string
	* @return boolean
	*/
	public static function setSigningKey($keyPairId, $signingKey, $isFile = true)
	{
		self::$__signingKeyPairId = $keyPairId;
		if ((self::$__signingKeyResource = openssl_pkey_get_private($isFile ?
		file_get_contents($signingKey) : $signingKey)) !== false) return true;
		self::__triggerError('S3::setSigningKey(): Unable to open load private key: '.$signingKey, __FILE__, __LINE__);
		return false;
	}


	/**
	* Free signing key from memory, MUST be called if you are using setSigningKey()
	*
	* @return void
	*/
	public static function freeSigningKey()
	{
		if (self::$__signingKeyResource !== false)
			openssl_free_key(self::$__signingKeyResource);
	}


	/**
	* Internal error handler
	*
	* @internal Internal error handler
	* @param string $message Error message
	* @param string $file Filename
	* @param integer $line Line number
	* @param integer $code Error code
	* @return void
	*/
	private static function __triggerError($message, $file, $line, $code = 0)
	{
		if (self::$useExceptions)
			throw new S3Exception($message, $file, $line, $code);
		else
			trigger_error($message, E_USER_WARNING);
	}


	/**
	* Get a list of buckets
	*
	* @param boolean $detailed Returns detailed bucket list when true
	* @return array | false
	*/
	public static function listBuckets($detailed = false)
	{
		$rest = new S3Request('GET', '', '', self::$endpoint);
		$rest = $rest->getResponse();
		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::listBuckets(): [%s] %s", $rest->error['code'],
			$rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		$results = array();
		if (!isset($rest->body->Buckets)) return $results;

		if ($detailed)
		{
			if (isset($rest->body->Owner, $rest->body->Owner->ID, $rest->body->Owner->DisplayName))
			$results['owner'] = array(
				'id' => (string)$rest->body->Owner->ID, 'name' => (string)$rest->body->Owner->ID
			);
			$results['buckets'] = array();
			foreach ($rest->body->Buckets->Bucket as $b)
				$results['buckets'][] = array(
					'name' => (string)$b->Name, 'time' => strtotime((string)$b->CreationDate)
				);
		} else
			foreach ($rest->body->Buckets->Bucket as $b) $results[] = (string)$b->Name;

		return $results;
	}


	/*
	* Get contents for a bucket
	*
	* If maxKeys is null this method will loop through truncated result sets
	*
	* @param string $bucket Bucket name
	* @param string $prefix Prefix
	* @param string $marker Marker (last file listed)
	* @param string $maxKeys Max keys (maximum number of keys to return)
	* @param string $delimiter Delimiter
	* @param boolean $returnCommonPrefixes Set to true to return CommonPrefixes
	* @return array | false
	*/
	public static function getBucket($bucket, $prefix = null, $marker = null, $maxKeys = null, $delimiter = null, $returnCommonPrefixes = false)
	{
		$rest = new S3Request('GET', $bucket, '', self::$endpoint);
		if ($maxKeys == 0) $maxKeys = null;
		if ($prefix !== null && $prefix !== '') $rest->setParameter('prefix', $prefix);
		if ($marker !== null && $marker !== '') $rest->setParameter('marker', $marker);
		if ($maxKeys !== null && $maxKeys !== '') $rest->setParameter('max-keys', $maxKeys);
		if ($delimiter !== null && $delimiter !== '') $rest->setParameter('delimiter', $delimiter);
		$response = $rest->getResponse();
		if ($response->error === false && $response->code !== 200)
			$response->error = array('code' => $response->code, 'message' => 'Unexpected HTTP status');
		if ($response->error !== false)
		{
			self::__triggerError(sprintf("S3::getBucket(): [%s] %s",
			$response->error['code'], $response->error['message']), __FILE__, __LINE__);
			return false;
		}

		$results = array();

		$nextMarker = null;
		if (isset($response->body, $response->body->Contents))
		foreach ($response->body->Contents as $c)
		{
			$results[(string)$c->Key] = array(
				'name' => (string)$c->Key,
				'time' => strtotime((string)$c->LastModified),
				'size' => (int)$c->Size,
				'hash' => substr((string)$c->ETag, 1, -1)
			);
			$nextMarker = (string)$c->Key;
		}

		if ($returnCommonPrefixes && isset($response->body, $response->body->CommonPrefixes))
			foreach ($response->body->CommonPrefixes as $c)
				$results[(string)$c->Prefix] = array('prefix' => (string)$c->Prefix);

		if (isset($response->body, $response->body->IsTruncated) &&
		(string)$response->body->IsTruncated == 'false') return $results;

		if (isset($response->body, $response->body->NextMarker))
			$nextMarker = (string)$response->body->NextMarker;

		// Loop through truncated results if maxKeys isn't specified
		if ($maxKeys == null && $nextMarker !== null && (string)$response->body->IsTruncated == 'true')
		do
		{
			$rest = new S3Request('GET', $bucket, '', self::$endpoint);
			if ($prefix !== null && $prefix !== '') $rest->setParameter('prefix', $prefix);
			$rest->setParameter('marker', $nextMarker);
			if ($delimiter !== null && $delimiter !== '') $rest->setParameter('delimiter', $delimiter);

			if (($response = $rest->getResponse(true)) == false || $response->code !== 200) break;

			if (isset($response->body, $response->body->Contents))
			foreach ($response->body->Contents as $c)
			{
				$results[(string)$c->Key] = array(
					'name' => (string)$c->Key,
					'time' => strtotime((string)$c->LastModified),
					'size' => (int)$c->Size,
					'hash' => substr((string)$c->ETag, 1, -1)
				);
				$nextMarker = (string)$c->Key;
			}

			if ($returnCommonPrefixes && isset($response->body, $response->body->CommonPrefixes))
				foreach ($response->body->CommonPrefixes as $c)
					$results[(string)$c->Prefix] = array('prefix' => (string)$c->Prefix);

			if (isset($response->body, $response->body->NextMarker))
				$nextMarker = (string)$response->body->NextMarker;

		} while ($response !== false && (string)$response->body->IsTruncated == 'true');

		return $results;
	}


	/**
	* Put a bucket
	*
	* @param string $bucket Bucket name
	* @param constant $acl ACL flag
	* @param string $location Set as "EU" to create buckets hosted in Europe
	* @return boolean
	*/
	public static function putBucket($bucket, $acl = self::ACL_PRIVATE, $location = false)
	{
		$rest = new S3Request('PUT', $bucket, '', self::$endpoint);
		$rest->setAmzHeader('x-amz-acl', $acl);

		if ($location !== false)
		{
			$dom = new DOMDocument;
			$createBucketConfiguration = $dom->createElement('CreateBucketConfiguration');
			$locationConstraint = $dom->createElement('LocationConstraint', strtoupper($location));
			$createBucketConfiguration->appendChild($locationConstraint);
			$dom->appendChild($createBucketConfiguration);
			$rest->data = $dom->saveXML();
			$rest->size = strlen($rest->data);
			$rest->setHeader('Content-Type', 'application/xml');
		}
		$rest = $rest->getResponse();

		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::putBucket({$bucket}, {$acl}, {$location}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		return true;
	}


	/**
	* Delete an empty bucket
	*
	* @param string $bucket Bucket name
	* @return boolean
	*/
	public static function deleteBucket($bucket)
	{
		$rest = new S3Request('DELETE', $bucket, '', self::$endpoint);
		$rest = $rest->getResponse();
		if ($rest->error === false && $rest->code !== 204)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::deleteBucket({$bucket}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		return true;
	}


	/**
	* Create input info array for putObject()
	*
	* @param string $file Input file
	* @param mixed $md5sum Use MD5 hash (supply a string if you want to use your own)
	* @return array | false
	*/
	public static function inputFile($file, $md5sum = true)
	{
		if (!file_exists($file) || !is_file($file) || !is_readable($file))
		{
			self::__triggerError('S3::inputFile(): Unable to open input file: '.$file, __FILE__, __LINE__);
			return false;
		}
		return array('file' => $file, 'size' => filesize($file), 'md5sum' => $md5sum !== false ?
		(is_string($md5sum) ? $md5sum : base64_encode(md5_file($file, true))) : '');
	}


	/**
	* Create input array info for putObject() with a resource
	*
	* @param string $resource Input resource to read from
	* @param integer $bufferSize Input byte size
	* @param string $md5sum MD5 hash to send (optional)
	* @return array | false
	*/
	public static function inputResource(&$resource, $bufferSize, $md5sum = '')
	{
		if (!is_resource($resource) || $bufferSize < 0)
		{
			self::__triggerError('S3::inputResource(): Invalid resource or buffer size', __FILE__, __LINE__);
			return false;
		}
		$input = array('size' => $bufferSize, 'md5sum' => $md5sum);
		$input['fp'] =& $resource;
		return $input;
	}


	/**
	* Put an object
	*
	* @param mixed $input Input data
	* @param string $bucket Bucket name
	* @param string $uri Object URI
	* @param constant $acl ACL constant
	* @param array $metaHeaders Array of x-amz-meta-* headers
	* @param array $requestHeaders Array of request headers or content type as a string
	* @param constant $storageClass Storage class constant
	* @return boolean
	*/
	public static function putObject($input, $bucket, $uri, $acl = self::ACL_PRIVATE, $metaHeaders = array(), $requestHeaders = array(), $storageClass = self::STORAGE_CLASS_STANDARD)
	{
		if ($input === false) return false;
		$rest = new S3Request('PUT', $bucket, $uri, self::$endpoint);

		if (is_string($input)) $input = array(
			'data' => $input, 'size' => strlen($input),
			'md5sum' => base64_encode(md5($input, true))
		);

		// Data
		if (isset($input['fp']))
			$rest->fp =& $input['fp'];
		elseif (isset($input['file']))
			$rest->fp = @fopen($input['file'], 'rb');
		elseif (isset($input['data']))
			$rest->data = $input['data'];

		// Content-Length (required)
		if (isset($input['size']) && $input['size'] >= 0)
			$rest->size = $input['size'];
		else {
			if (isset($input['file']))
				$rest->size = filesize($input['file']);
			elseif (isset($input['data']))
				$rest->size = strlen($input['data']);
		}

		// Custom request headers (Content-Type, Content-Disposition, Content-Encoding)
		if (is_array($requestHeaders))
			foreach ($requestHeaders as $h => $v) $rest->setHeader($h, $v);
		elseif (is_string($requestHeaders)) // Support for legacy contentType parameter
			$input['type'] = $requestHeaders;

		// Content-Type
		if (!isset($input['type']))
		{
			if (isset($requestHeaders['Content-Type']))
				$input['type'] =& $requestHeaders['Content-Type'];
			elseif (isset($input['file']))
				$input['type'] = self::__getMimeType($input['file']);
			else
				$input['type'] = 'application/octet-stream';
		}

		if ($storageClass !== self::STORAGE_CLASS_STANDARD) // Storage class
			$rest->setAmzHeader('x-amz-storage-class', $storageClass);

		// We need to post with Content-Length and Content-Type, MD5 is optional
		if ($rest->size >= 0 && ($rest->fp !== false || $rest->data !== false))
		{
			$rest->setHeader('Content-Type', $input['type']);
			if (isset($input['md5sum'])) $rest->setHeader('Content-MD5', $input['md5sum']);

			$rest->setAmzHeader('x-amz-acl', $acl);
			foreach ($metaHeaders as $h => $v) $rest->setAmzHeader('x-amz-meta-'.$h, $v);
			$rest->getResponse();
		} else
			$rest->response->error = array('code' => 0, 'message' => 'Missing input parameters');

		if ($rest->response->error === false && $rest->response->code !== 200)
			$rest->response->error = array('code' => $rest->response->code, 'message' => 'Unexpected HTTP status');
		if ($rest->response->error !== false)
		{
			self::__triggerError(sprintf("S3::putObject(): [%s] %s",
			$rest->response->error['code'], $rest->response->error['message']), __FILE__, __LINE__);
			return false;
		}
		return true;
	}


	/**
	* Put an object from a file (legacy function)
	*
	* @param string $file Input file path
	* @param string $bucket Bucket name
	* @param string $uri Object URI
	* @param constant $acl ACL constant
	* @param array $metaHeaders Array of x-amz-meta-* headers
	* @param string $contentType Content type
	* @return boolean
	*/
	public static function putObjectFile($file, $bucket, $uri, $acl = self::ACL_PRIVATE, $metaHeaders = array(), $contentType = null)
	{
		return self::putObject(self::inputFile($file), $bucket, $uri, $acl, $metaHeaders, $contentType);
	}


	/**
	* Put an object from a string (legacy function)
	*
	* @param string $string Input data
	* @param string $bucket Bucket name
	* @param string $uri Object URI
	* @param constant $acl ACL constant
	* @param array $metaHeaders Array of x-amz-meta-* headers
	* @param string $contentType Content type
	* @return boolean
	*/
	public static function putObjectString($string, $bucket, $uri, $acl = self::ACL_PRIVATE, $metaHeaders = array(), $contentType = 'text/plain')
	{
		return self::putObject($string, $bucket, $uri, $acl, $metaHeaders, $contentType);
	}


	/**
	* Get an object
	*
	* @param string $bucket Bucket name
	* @param string $uri Object URI
	* @param mixed $saveTo Filename or resource to write to
	* @return mixed
	*/
	public static function getObject($bucket, $uri, $saveTo = false)
	{
		$rest = new S3Request('GET', $bucket, $uri, self::$endpoint);
		if ($saveTo !== false)
		{
			if (is_resource($saveTo))
				$rest->fp =& $saveTo;
			else
				if (($rest->fp = @fopen($saveTo, 'wb')) !== false)
					$rest->file = realpath($saveTo);
				else
					$rest->response->error = array('code' => 0, 'message' => 'Unable to open save file for writing: '.$saveTo);
		}
		if ($rest->response->error === false) $rest->getResponse();

		if ($rest->response->error === false && $rest->response->code !== 200)
			$rest->response->error = array('code' => $rest->response->code, 'message' => 'Unexpected HTTP status');
		if ($rest->response->error !== false)
		{
			self::__triggerError(sprintf("S3::getObject({$bucket}, {$uri}): [%s] %s",
			$rest->response->error['code'], $rest->response->error['message']), __FILE__, __LINE__);
			return false;
		}
		return $rest->response;
	}


	/**
	* Get object information
	*
	* @param string $bucket Bucket name
	* @param string $uri Object URI
	* @param boolean $returnInfo Return response information
	* @return mixed | false
	*/
	public static function getObjectInfo($bucket, $uri, $returnInfo = true)
	{
		$rest = new S3Request('HEAD', $bucket, $uri, self::$endpoint);
		$rest = $rest->getResponse();
		if ($rest->error === false && ($rest->code !== 200 && $rest->code !== 404))
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::getObjectInfo({$bucket}, {$uri}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		return $rest->code == 200 ? $returnInfo ? $rest->headers : true : false;
	}


	/**
	* Copy an object
	*
	* @param string $bucket Source bucket name
	* @param string $uri Source object URI
	* @param string $bucket Destination bucket name
	* @param string $uri Destination object URI
	* @param constant $acl ACL constant
	* @param array $metaHeaders Optional array of x-amz-meta-* headers
	* @param array $requestHeaders Optional array of request headers (content type, disposition, etc.)
	* @param constant $storageClass Storage class constant
	* @return mixed | false
	*/
	public static function copyObject($srcBucket, $srcUri, $bucket, $uri, $acl = self::ACL_PRIVATE, $metaHeaders = array(), $requestHeaders = array(), $storageClass = self::STORAGE_CLASS_STANDARD)
	{
		$rest = new S3Request('PUT', $bucket, $uri, self::$endpoint);
		$rest->setHeader('Content-Length', 0);
		foreach ($requestHeaders as $h => $v) $rest->setHeader($h, $v);
		foreach ($metaHeaders as $h => $v) $rest->setAmzHeader('x-amz-meta-'.$h, $v);
		if ($storageClass !== self::STORAGE_CLASS_STANDARD) // Storage class
			$rest->setAmzHeader('x-amz-storage-class', $storageClass);
		$rest->setAmzHeader('x-amz-acl', $acl); // Added rawurlencode() for $srcUri (thanks a.yamanoi)
		$rest->setAmzHeader('x-amz-copy-source', sprintf('/%s/%s', $srcBucket, rawurlencode($srcUri)));
		if (sizeof($requestHeaders) > 0 || sizeof($metaHeaders) > 0)
			$rest->setAmzHeader('x-amz-metadata-directive', 'REPLACE');

		$rest = $rest->getResponse();
		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::copyObject({$srcBucket}, {$srcUri}, {$bucket}, {$uri}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		return isset($rest->body->LastModified, $rest->body->ETag) ? array(
			'time' => strtotime((string)$rest->body->LastModified),
			'hash' => substr((string)$rest->body->ETag, 1, -1)
		) : false;
	}


	/**
	* Set logging for a bucket
	*
	* @param string $bucket Bucket name
	* @param string $targetBucket Target bucket (where logs are stored)
	* @param string $targetPrefix Log prefix (e,g; domain.com-)
	* @return boolean
	*/
	public static function setBucketLogging($bucket, $targetBucket, $targetPrefix = null)
	{
		// The S3 log delivery group has to be added to the target bucket's ACP
		if ($targetBucket !== null && ($acp = self::getAccessControlPolicy($targetBucket, '')) !== false)
		{
			// Only add permissions to the target bucket when they do not exist
			$aclWriteSet = false;
			$aclReadSet = false;
			foreach ($acp['acl'] as $acl)
			if ($acl['type'] == 'Group' && $acl['uri'] == 'http://acs.amazonaws.com/groups/s3/LogDelivery')
			{
				if ($acl['permission'] == 'WRITE') $aclWriteSet = true;
				elseif ($acl['permission'] == 'READ_ACP') $aclReadSet = true;
			}
			if (!$aclWriteSet) $acp['acl'][] = array(
				'type' => 'Group', 'uri' => 'http://acs.amazonaws.com/groups/s3/LogDelivery', 'permission' => 'WRITE'
			);
			if (!$aclReadSet) $acp['acl'][] = array(
				'type' => 'Group', 'uri' => 'http://acs.amazonaws.com/groups/s3/LogDelivery', 'permission' => 'READ_ACP'
			);
			if (!$aclReadSet || !$aclWriteSet) self::setAccessControlPolicy($targetBucket, '', $acp);
		}

		$dom = new DOMDocument;
		$bucketLoggingStatus = $dom->createElement('BucketLoggingStatus');
		$bucketLoggingStatus->setAttribute('xmlns', 'http://s3.amazonaws.com/doc/2006-03-01/');
		if ($targetBucket !== null)
		{
			if ($targetPrefix == null) $targetPrefix = $bucket . '-';
			$loggingEnabled = $dom->createElement('LoggingEnabled');
			$loggingEnabled->appendChild($dom->createElement('TargetBucket', $targetBucket));
			$loggingEnabled->appendChild($dom->createElement('TargetPrefix', $targetPrefix));
			// TODO: Add TargetGrants?
			$bucketLoggingStatus->appendChild($loggingEnabled);
		}
		$dom->appendChild($bucketLoggingStatus);

		$rest = new S3Request('PUT', $bucket, '', self::$endpoint);
		$rest->setParameter('logging', null);
		$rest->data = $dom->saveXML();
		$rest->size = strlen($rest->data);
		$rest->setHeader('Content-Type', 'application/xml');
		$rest = $rest->getResponse();
		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::setBucketLogging({$bucket}, {$uri}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		return true;
	}


	/**
	* Get logging status for a bucket
	*
	* This will return false if logging is not enabled.
	* Note: To enable logging, you also need to grant write access to the log group
	*
	* @param string $bucket Bucket name
	* @return array | false
	*/
	public static function getBucketLogging($bucket)
	{
		$rest = new S3Request('GET', $bucket, '', self::$endpoint);
		$rest->setParameter('logging', null);
		$rest = $rest->getResponse();
		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::getBucketLogging({$bucket}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		if (!isset($rest->body->LoggingEnabled)) return false; // No logging
		return array(
			'targetBucket' => (string)$rest->body->LoggingEnabled->TargetBucket,
			'targetPrefix' => (string)$rest->body->LoggingEnabled->TargetPrefix,
		);
	}


	/**
	* Disable bucket logging
	*
	* @param string $bucket Bucket name
	* @return boolean
	*/
	public static function disableBucketLogging($bucket)
	{
		return self::setBucketLogging($bucket, null);
	}


	/**
	* Get a bucket's location
	*
	* @param string $bucket Bucket name
	* @return string | false
	*/
	public static function getBucketLocation($bucket)
	{
		$rest = new S3Request('GET', $bucket, '', self::$endpoint);
		$rest->setParameter('location', null);
		$rest = $rest->getResponse();
		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::getBucketLocation({$bucket}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		return (isset($rest->body[0]) && (string)$rest->body[0] !== '') ? (string)$rest->body[0] : 'US';
	}


	/**
	* Set object or bucket Access Control Policy
	*
	* @param string $bucket Bucket name
	* @param string $uri Object URI
	* @param array $acp Access Control Policy Data (same as the data returned from getAccessControlPolicy)
	* @return boolean
	*/
	public static function setAccessControlPolicy($bucket, $uri = '', $acp = array())
	{
		$dom = new DOMDocument;
		$dom->formatOutput = true;
		$accessControlPolicy = $dom->createElement('AccessControlPolicy');
		$accessControlList = $dom->createElement('AccessControlList');

		// It seems the owner has to be passed along too
		$owner = $dom->createElement('Owner');
		$owner->appendChild($dom->createElement('ID', $acp['owner']['id']));
		$owner->appendChild($dom->createElement('DisplayName', $acp['owner']['name']));
		$accessControlPolicy->appendChild($owner);

		foreach ($acp['acl'] as $g)
		{
			$grant = $dom->createElement('Grant');
			$grantee = $dom->createElement('Grantee');
			$grantee->setAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
			if (isset($g['id']))
			{ // CanonicalUser (DisplayName is omitted)
				$grantee->setAttribute('xsi:type', 'CanonicalUser');
				$grantee->appendChild($dom->createElement('ID', $g['id']));
			}
			elseif (isset($g['email']))
			{ // AmazonCustomerByEmail
				$grantee->setAttribute('xsi:type', 'AmazonCustomerByEmail');
				$grantee->appendChild($dom->createElement('EmailAddress', $g['email']));
			}
			elseif ($g['type'] == 'Group')
			{ // Group
				$grantee->setAttribute('xsi:type', 'Group');
				$grantee->appendChild($dom->createElement('URI', $g['uri']));
			}
			$grant->appendChild($grantee);
			$grant->appendChild($dom->createElement('Permission', $g['permission']));
			$accessControlList->appendChild($grant);
		}

		$accessControlPolicy->appendChild($accessControlList);
		$dom->appendChild($accessControlPolicy);

		$rest = new S3Request('PUT', $bucket, $uri, self::$endpoint);
		$rest->setParameter('acl', null);
		$rest->data = $dom->saveXML();
		$rest->size = strlen($rest->data);
		$rest->setHeader('Content-Type', 'application/xml');
		$rest = $rest->getResponse();
		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::setAccessControlPolicy({$bucket}, {$uri}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		return true;
	}


	/**
	* Get object or bucket Access Control Policy
	*
	* @param string $bucket Bucket name
	* @param string $uri Object URI
	* @return mixed | false
	*/
	public static function getAccessControlPolicy($bucket, $uri = '')
	{
		$rest = new S3Request('GET', $bucket, $uri, self::$endpoint);
		$rest->setParameter('acl', null);
		$rest = $rest->getResponse();
		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::getAccessControlPolicy({$bucket}, {$uri}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}

		$acp = array();
		if (isset($rest->body->Owner, $rest->body->Owner->ID, $rest->body->Owner->DisplayName))
			$acp['owner'] = array(
				'id' => (string)$rest->body->Owner->ID, 'name' => (string)$rest->body->Owner->DisplayName
			);

		if (isset($rest->body->AccessControlList))
		{
			$acp['acl'] = array();
			foreach ($rest->body->AccessControlList->Grant as $grant)
			{
				foreach ($grant->Grantee as $grantee)
				{
					if (isset($grantee->ID, $grantee->DisplayName)) // CanonicalUser
						$acp['acl'][] = array(
							'type' => 'CanonicalUser',
							'id' => (string)$grantee->ID,
							'name' => (string)$grantee->DisplayName,
							'permission' => (string)$grant->Permission
						);
					elseif (isset($grantee->EmailAddress)) // AmazonCustomerByEmail
						$acp['acl'][] = array(
							'type' => 'AmazonCustomerByEmail',
							'email' => (string)$grantee->EmailAddress,
							'permission' => (string)$grant->Permission
						);
					elseif (isset($grantee->URI)) // Group
						$acp['acl'][] = array(
							'type' => 'Group',
							'uri' => (string)$grantee->URI,
							'permission' => (string)$grant->Permission
						);
					else continue;
				}
			}
		}
		return $acp;
	}


	/**
	* Delete an object
	*
	* @param string $bucket Bucket name
	* @param string $uri Object URI
	* @return boolean
	*/
	public static function deleteObject($bucket, $uri)
	{
		$rest = new S3Request('DELETE', $bucket, $uri, self::$endpoint);
		$rest = $rest->getResponse();
		if ($rest->error === false && $rest->code !== 204)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::deleteObject(): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		return true;
	}


	/**
	* Get a query string authenticated URL
	*
	* @param string $bucket Bucket name
	* @param string $uri Object URI
	* @param integer $lifetime Lifetime in seconds
	* @param boolean $hostBucket Use the bucket name as the hostname
	* @param boolean $https Use HTTPS ($hostBucket should be false for SSL verification)
	* @return string
	*/
	public static function getAuthenticatedURL($bucket, $uri, $lifetime, $hostBucket = false, $https = false)
	{
		$expires = time() + $lifetime;
		$uri = str_replace('%2F', '/', rawurlencode($uri)); // URI should be encoded (thanks Sean O'Dea)
		return sprintf(($https ? 'https' : 'http').'://%s/%s?AWSAccessKeyId=%s&Expires=%u&Signature=%s',
		$hostBucket ? $bucket : $bucket.'.s3.amazonaws.com', $uri, self::$__accessKey, $expires,
		urlencode(self::__getHash("GET\n\n\n{$expires}\n/{$bucket}/{$uri}")));
	}


	/**
	* Get a CloudFront signed policy URL
	*
	* @param array $policy Policy
	* @return string
	*/
	public static function getSignedPolicyURL($policy)
	{
		$data = json_encode($policy);
		$signature = '';
		if (!openssl_sign($data, $signature, self::$__signingKeyResource)) return false;

		$encoded = str_replace(array('+', '='), array('-', '_', '~'), base64_encode($data));
		$signature = str_replace(array('+', '='), array('-', '_', '~'), base64_encode($signature));

		$url = $policy['Statement'][0]['Resource'] . '?';

		foreach (array('Policy' => $encoded, 'Signature' => $signature, 'Key-Pair-Id' => self::$__signingKeyPairId) as $k => $v)
			$url .= $k.'='.str_replace('%2F', '/', rawurlencode($v)).'&';
		return substr($url, 0, -1);
	}


	/**
	* Get a CloudFront canned policy URL
	*
	* @param string $string URL to sign
	* @param integer $lifetime URL lifetime
	* @return string
	*/
	public static function getSignedCannedURL($url, $lifetime)
	{
		return self::getSignedPolicyURL(array(
			'Statement' => array(
				array('Resource' => $url, 'Condition' => array(
					'DateLessThan' => array('AWS:EpochTime' => time() + $lifetime)
				))
			)
		));
	}


	/**
	* Get upload POST parameters for form uploads
	*
	* @param string $bucket Bucket name
	* @param string $uriPrefix Object URI prefix
	* @param constant $acl ACL constant
	* @param integer $lifetime Lifetime in seconds
	* @param integer $maxFileSize Maximum filesize in bytes (default 5MB)
	* @param string $successRedirect Redirect URL or 200 / 201 status code
	* @param array $amzHeaders Array of x-amz-meta-* headers
	* @param array $headers Array of request headers or content type as a string
	* @param boolean $flashVars Includes additional "Filename" variable posted by Flash
	* @return object
	*/
	public static function getHttpUploadPostParams($bucket, $uriPrefix = '', $acl = self::ACL_PRIVATE, $lifetime = 3600,
	$maxFileSize = 5242880, $successRedirect = "201", $amzHeaders = array(), $headers = array(), $flashVars = false)
	{
		// Create policy object
		$policy = new stdClass;
		$policy->expiration = gmdate('Y-m-d\TH:i:s\Z', (time() + $lifetime));
		$policy->conditions = array();
		$obj = new stdClass; $obj->bucket = $bucket; array_push($policy->conditions, $obj);
		$obj = new stdClass; $obj->acl = $acl; array_push($policy->conditions, $obj);

		$obj = new stdClass; // 200 for non-redirect uploads
		if (is_numeric($successRedirect) && in_array((int)$successRedirect, array(200, 201)))
			$obj->success_action_status = (string)$successRedirect;
		else // URL
			$obj->success_action_redirect = $successRedirect;
		array_push($policy->conditions, $obj);

		if ($acl !== self::ACL_PUBLIC_READ)
			array_push($policy->conditions, array('eq', '$acl', $acl));

		array_push($policy->conditions, array('starts-with', '$key', $uriPrefix));
		if ($flashVars) array_push($policy->conditions, array('starts-with', '$Filename', ''));
		foreach (array_keys($headers) as $headerKey)
			array_push($policy->conditions, array('starts-with', '$'.$headerKey, ''));
		foreach ($amzHeaders as $headerKey => $headerVal)
		{
			$obj = new stdClass;
			$obj->{$headerKey} = (string)$headerVal;
			array_push($policy->conditions, $obj);
		}
		array_push($policy->conditions, array('content-length-range', 0, $maxFileSize));
		$policy = base64_encode(str_replace('\/', '/', json_encode($policy)));

		// Create parameters
		$params = new stdClass;
		$params->AWSAccessKeyId = self::$__accessKey;
		$params->key = $uriPrefix.'${filename}';
		$params->acl = $acl;
		$params->policy = $policy; unset($policy);
		$params->signature = self::__getHash($params->policy);
		if (is_numeric($successRedirect) && in_array((int)$successRedirect, array(200, 201)))
			$params->success_action_status = (string)$successRedirect;
		else
			$params->success_action_redirect = $successRedirect;
		foreach ($headers as $headerKey => $headerVal) $params->{$headerKey} = (string)$headerVal;
		foreach ($amzHeaders as $headerKey => $headerVal) $params->{$headerKey} = (string)$headerVal;
		return $params;
	}


	/**
	* Create a CloudFront distribution
	*
	* @param string $bucket Bucket name
	* @param boolean $enabled Enabled (true/false)
	* @param array $cnames Array containing CNAME aliases
	* @param string $comment Use the bucket name as the hostname
	* @param string $defaultRootObject Default root object
	* @param string $originAccessIdentity Origin access identity
	* @param array $trustedSigners Array of trusted signers
	* @return array | false
	*/
	public static function createDistribution($bucket, $enabled = true, $cnames = array(), $comment = null, $defaultRootObject = null, $originAccessIdentity = null, $trustedSigners = array())
	{
		if (!extension_loaded('openssl'))
		{
			self::__triggerError(sprintf("S3::createDistribution({$bucket}, ".(int)$enabled.", [], '$comment'): %s",
			"CloudFront functionality requires SSL"), __FILE__, __LINE__);
			return false;
		}
		$useSSL = self::$useSSL;

		self::$useSSL = true; // CloudFront requires SSL
		$rest = new S3Request('POST', '', '2010-11-01/distribution', 'cloudfront.amazonaws.com');
		$rest->data = self::__getCloudFrontDistributionConfigXML(
			$bucket.'.s3.amazonaws.com',
			$enabled,
			(string)$comment,
			(string)microtime(true),
			$cnames,
			$defaultRootObject,
			$originAccessIdentity,
			$trustedSigners
		);

		$rest->size = strlen($rest->data);
		$rest->setHeader('Content-Type', 'application/xml');
		$rest = self::__getCloudFrontResponse($rest);

		self::$useSSL = $useSSL;

		if ($rest->error === false && $rest->code !== 201)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::createDistribution({$bucket}, ".(int)$enabled.", [], '$comment'): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		} elseif ($rest->body instanceof SimpleXMLElement)
			return self::__parseCloudFrontDistributionConfig($rest->body);
		return false;
	}


	/**
	* Get CloudFront distribution info
	*
	* @param string $distributionId Distribution ID from listDistributions()
	* @return array | false
	*/
	public static function getDistribution($distributionId)
	{
		if (!extension_loaded('openssl'))
		{
			self::__triggerError(sprintf("S3::getDistribution($distributionId): %s",
			"CloudFront functionality requires SSL"), __FILE__, __LINE__);
			return false;
		}
		$useSSL = self::$useSSL;

		self::$useSSL = true; // CloudFront requires SSL
		$rest = new S3Request('GET', '', '2010-11-01/distribution/'.$distributionId, 'cloudfront.amazonaws.com');
		$rest = self::__getCloudFrontResponse($rest);

		self::$useSSL = $useSSL;

		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::getDistribution($distributionId): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		elseif ($rest->body instanceof SimpleXMLElement)
		{
			$dist = self::__parseCloudFrontDistributionConfig($rest->body);
			$dist['hash'] = $rest->headers['hash'];
			$dist['id'] = $distributionId;
			return $dist;
		}
		return false;
	}


	/**
	* Update a CloudFront distribution
	*
	* @param array $dist Distribution array info identical to output of getDistribution()
	* @return array | false
	*/
	public static function updateDistribution($dist)
	{
		if (!extension_loaded('openssl'))
		{
			self::__triggerError(sprintf("S3::updateDistribution({$dist['id']}): %s",
			"CloudFront functionality requires SSL"), __FILE__, __LINE__);
			return false;
		}

		$useSSL = self::$useSSL;

		self::$useSSL = true; // CloudFront requires SSL
		$rest = new S3Request('PUT', '', '2010-11-01/distribution/'.$dist['id'].'/config', 'cloudfront.amazonaws.com');
		$rest->data = self::__getCloudFrontDistributionConfigXML(
			$dist['origin'],
			$dist['enabled'],
			$dist['comment'],
			$dist['callerReference'],
			$dist['cnames'],
			$dist['defaultRootObject'],
			$dist['originAccessIdentity'],
			$dist['trustedSigners']
		);

		$rest->size = strlen($rest->data);
		$rest->setHeader('If-Match', $dist['hash']);
		$rest = self::__getCloudFrontResponse($rest);

		self::$useSSL = $useSSL;

		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::updateDistribution({$dist['id']}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		} else {
			$dist = self::__parseCloudFrontDistributionConfig($rest->body);
			$dist['hash'] = $rest->headers['hash'];
			return $dist;
		}
		return false;
	}


	/**
	* Delete a CloudFront distribution
	*
	* @param array $dist Distribution array info identical to output of getDistribution()
	* @return boolean
	*/
	public static function deleteDistribution($dist)
	{
		if (!extension_loaded('openssl'))
		{
			self::__triggerError(sprintf("S3::deleteDistribution({$dist['id']}): %s",
			"CloudFront functionality requires SSL"), __FILE__, __LINE__);
			return false;
		}

		$useSSL = self::$useSSL;

		self::$useSSL = true; // CloudFront requires SSL
		$rest = new S3Request('DELETE', '', '2008-06-30/distribution/'.$dist['id'], 'cloudfront.amazonaws.com');
		$rest->setHeader('If-Match', $dist['hash']);
		$rest = self::__getCloudFrontResponse($rest);

		self::$useSSL = $useSSL;

		if ($rest->error === false && $rest->code !== 204)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::deleteDistribution({$dist['id']}): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		return true;
	}


	/**
	* Get a list of CloudFront distributions
	*
	* @return array
	*/
	public static function listDistributions()
	{
		if (!extension_loaded('openssl'))
		{
			self::__triggerError(sprintf("S3::listDistributions(): [%s] %s",
			"CloudFront functionality requires SSL"), __FILE__, __LINE__);
			return false;
		}

		$useSSL = self::$useSSL;
		self::$useSSL = true; // CloudFront requires SSL
		$rest = new S3Request('GET', '', '2010-11-01/distribution', 'cloudfront.amazonaws.com');
		$rest = self::__getCloudFrontResponse($rest);
		self::$useSSL = $useSSL;

		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			self::__triggerError(sprintf("S3::listDistributions(): [%s] %s",
			$rest->error['code'], $rest->error['message']), __FILE__, __LINE__);
			return false;
		}
		elseif ($rest->body instanceof SimpleXMLElement && isset($rest->body->DistributionSummary))
		{
			$list = array();
			if (isset($rest->body->Marker, $rest->body->MaxItems, $rest->body->IsTruncated))
			{
				//$info['marker'] = (string)$rest->body->Marker;
				//$info['maxItems'] = (int)$rest->body->MaxItems;
				//$info['isTruncated'] = (string)$rest->body->IsTruncated == 'true' ? true : false;
			}
			foreach ($rest->body->DistributionSummary as $summary)
				$list[(string)$summary->Id] = self::__parseCloudFrontDistributionConfig($summary);

			return $list;
		}
		return array();
	}

	/**
	* List CloudFront Origin Access Identities
	*
	* @return array
	*/
	public static function listOriginAccessIdentities()
	{
		if (!extension_loaded('openssl'))
		{
			self::__triggerError(sprintf("S3::listOriginAccessIdentities(): [%s] %s",
			"CloudFront functionality requires SSL"), __FILE__, __LINE__);
			return false;
		}

		self::$useSSL = true; // CloudFront requires SSL
		$rest = new S3Request('GET', '', '2010-11-01/origin-access-identity/cloudfront', 'cloudfront.amazonaws.com');
		$rest = self::__getCloudFrontResponse($rest);
		$useSSL = self::$useSSL;

		if ($rest->error === false && $rest->code !== 200)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			trigger_error(sprintf("S3::listOriginAccessIdentities(): [%s] %s",
			$rest->error['code'], $rest->error['message']), E_USER_WARNING);
			return false;
		}

		if (isset($rest->body->CloudFrontOriginAccessIdentitySummary))
		{
			$identities = array();
			foreach ($rest->body->CloudFrontOriginAccessIdentitySummary as $identity)
				if (isset($identity->S3CanonicalUserId))
					$identities[(string)$identity->Id] = array('id' => (string)$identity->Id, 's3CanonicalUserId' => (string)$identity->S3CanonicalUserId);
			return $identities;
		}
		return false;
	}


	/**
	* Invalidate objects in a CloudFront distribution
	*
	* Thanks to Martin Lindkvist for S3::invalidateDistribution()
	*
	* @param string $distributionId Distribution ID from listDistributions()
	* @param array $paths Array of object paths to invalidate
	* @return boolean
	*/
	public static function invalidateDistribution($distributionId, $paths)
	{
		if (!extension_loaded('openssl'))
		{
			self::__triggerError(sprintf("S3::invalidateDistribution(): [%s] %s",
			"CloudFront functionality requires SSL"), __FILE__, __LINE__);
			return false;
		}

		$useSSL = self::$useSSL;
		self::$useSSL = true; // CloudFront requires SSL
		$rest = new S3Request('POST', '', '2010-08-01/distribution/'.$distributionId.'/invalidation', 'cloudfront.amazonaws.com');
		$rest->data = self::__getCloudFrontInvalidationBatchXML($paths, (string)microtime(true));
		$rest->size = strlen($rest->data);
		$rest = self::__getCloudFrontResponse($rest);
		self::$useSSL = $useSSL;

		if ($rest->error === false && $rest->code !== 201)
			$rest->error = array('code' => $rest->code, 'message' => 'Unexpected HTTP status');
		if ($rest->error !== false)
		{
			trigger_error(sprintf("S3::invalidate('{$distributionId}',{$paths}): [%s] %s",
			$rest->error['code'], $rest->error['message']), E_USER_WARNING);
			return false;
		}
		return true;
	}


	/**
	* Get a InvalidationBatch DOMDocument
	*
	* @internal Used to create XML in invalidateDistribution()
	* @param array $paths Paths to objects to invalidateDistribution
	* @return string
	*/
	private static function __getCloudFrontInvalidationBatchXML($paths, $callerReference = '0') {
		$dom = new DOMDocument('1.0', 'UTF-8');
		$dom->formatOutput = true;
		$invalidationBatch = $dom->createElement('InvalidationBatch');
		foreach ($paths as $path)
			$invalidationBatch->appendChild($dom->createElement('Path', $path));

		$invalidationBatch->appendChild($dom->createElement('CallerReference', $callerReference));
		$dom->appendChild($invalidationBatch);
		return $dom->saveXML();
	}


	/**
	* Get a DistributionConfig DOMDocument
	*
	* http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/index.html?PutConfig.html
	*
	* @internal Used to create XML in createDistribution() and updateDistribution()
	* @param string $bucket S3 Origin bucket
	* @param boolean $enabled Enabled (true/false)
	* @param string $comment Comment to append
	* @param string $callerReference Caller reference
	* @param array $cnames Array of CNAME aliases
	* @param string $defaultRootObject Default root object
	* @param string $originAccessIdentity Origin access identity
	* @param array $trustedSigners Array of trusted signers
	* @return string
	*/
	private static function __getCloudFrontDistributionConfigXML($bucket, $enabled, $comment, $callerReference = '0', $cnames = array(), $defaultRootObject = null, $originAccessIdentity = null, $trustedSigners = array())
	{
		$dom = new DOMDocument('1.0', 'UTF-8');
		$dom->formatOutput = true;
		$distributionConfig = $dom->createElement('DistributionConfig');
		$distributionConfig->setAttribute('xmlns', 'http://cloudfront.amazonaws.com/doc/2010-11-01/');

		$origin = $dom->createElement('S3Origin');
		$origin->appendChild($dom->createElement('DNSName', $bucket));
		if ($originAccessIdentity !== null) $origin->appendChild($dom->createElement('OriginAccessIdentity', $originAccessIdentity));
		$distributionConfig->appendChild($origin);

		if ($defaultRootObject !== null) $distributionConfig->appendChild($dom->createElement('DefaultRootObject', $defaultRootObject));

		$distributionConfig->appendChild($dom->createElement('CallerReference', $callerReference));
		foreach ($cnames as $cname)
			$distributionConfig->appendChild($dom->createElement('CNAME', $cname));
		if ($comment !== '') $distributionConfig->appendChild($dom->createElement('Comment', $comment));
		$distributionConfig->appendChild($dom->createElement('Enabled', $enabled ? 'true' : 'false'));

		$trusted = $dom->createElement('TrustedSigners');
		foreach ($trustedSigners as $id => $type)
			$trusted->appendChild($id !== '' ? $dom->createElement($type, $id) : $dom->createElement($type));
		$distributionConfig->appendChild($trusted);

		$dom->appendChild($distributionConfig);
		//var_dump($dom->saveXML());
		return $dom->saveXML();
	}


	/**
	* Parse a CloudFront distribution config
	*
	* See http://docs.amazonwebservices.com/AmazonCloudFront/latest/APIReference/index.html?GetDistribution.html
	*
	* @internal Used to parse the CloudFront DistributionConfig node to an array
	* @param object &$node DOMNode
	* @return array
	*/
	private static function __parseCloudFrontDistributionConfig(&$node)
	{
		if (isset($node->DistributionConfig))
			return self::__parseCloudFrontDistributionConfig($node->DistributionConfig);

		$dist = array();
		if (isset($node->Id, $node->Status, $node->LastModifiedTime, $node->DomainName))
		{
			$dist['id'] = (string)$node->Id;
			$dist['status'] = (string)$node->Status;
			$dist['time'] = strtotime((string)$node->LastModifiedTime);
			$dist['domain'] = (string)$node->DomainName;
		}

		if (isset($node->CallerReference))
			$dist['callerReference'] = (string)$node->CallerReference;

		if (isset($node->Enabled))
			$dist['enabled'] = (string)$node->Enabled == 'true' ? true : false;

		if (isset($node->S3Origin))
		{
			if (isset($node->S3Origin->DNSName))
				$dist['origin'] = (string)$node->S3Origin->DNSName;

			$dist['originAccessIdentity'] = isset($node->S3Origin->OriginAccessIdentity) ?
			(string)$node->S3Origin->OriginAccessIdentity : null;
		}

		$dist['defaultRootObject'] = isset($node->DefaultRootObject) ? (string)$node->DefaultRootObject : null;

		$dist['cnames'] = array();
		if (isset($node->CNAME))
			foreach ($node->CNAME as $cname)
				$dist['cnames'][(string)$cname] = (string)$cname;

		$dist['trustedSigners'] = array();
		if (isset($node->TrustedSigners))
			foreach ($node->TrustedSigners as $signer)
			{
				if (isset($signer->Self))
					$dist['trustedSigners'][''] = 'Self';
				elseif (isset($signer->KeyPairId))
					$dist['trustedSigners'][(string)$signer->KeyPairId] = 'KeyPairId';
				elseif (isset($signer->AwsAccountNumber))
					$dist['trustedSigners'][(string)$signer->AwsAccountNumber] = 'AwsAccountNumber';
			}

		$dist['comment'] = isset($node->Comment) ? (string)$node->Comment : null;
		return $dist;
	}


	/**
	* Grab CloudFront response
	*
	* @internal Used to parse the CloudFront S3Request::getResponse() output
	* @param object &$rest S3Request instance
	* @return object
	*/
	private static function __getCloudFrontResponse(&$rest)
	{
		$rest->getResponse();
		if ($rest->response->error === false && isset($rest->response->body) &&
		is_string($rest->response->body) && substr($rest->response->body, 0, 5) == '<?xml')
		{
			$rest->response->body = simplexml_load_string($rest->response->body);
			// Grab CloudFront errors
			if (isset($rest->response->body->Error, $rest->response->body->Error->Code,
			$rest->response->body->Error->Message))
			{
				$rest->response->error = array(
					'code' => (string)$rest->response->body->Error->Code,
					'message' => (string)$rest->response->body->Error->Message
				);
				unset($rest->response->body);
			}
		}
		return $rest->response;
	}


	/**
	* Get MIME type for file
	*
	* @internal Used to get mime types
	* @param string &$file File path
	* @return string
	*/
	public static function __getMimeType(&$file)
	{
		$type = false;
		// Fileinfo documentation says fileinfo_open() will use the
		// MAGIC env var for the magic file
		if (extension_loaded('fileinfo') && isset($_ENV['MAGIC']) &&
		($finfo = finfo_open(FILEINFO_MIME, $_ENV['MAGIC'])) !== false)
		{
			if (($type = finfo_file($finfo, $file)) !== false)
			{
				// Remove the charset and grab the last content-type
				$type = explode(' ', str_replace('; charset=', ';charset=', $type));
				$type = array_pop($type);
				$type = explode(';', $type);
				$type = trim(array_shift($type));
			}
			finfo_close($finfo);

		// If anyone is still using mime_content_type()
		} elseif (function_exists('mime_content_type'))
			$type = trim(mime_content_type($file));

		if ($type !== false && strlen($type) > 0) return $type;

		// Otherwise do it the old fashioned way
		static $exts = array(
			'jpg' => 'image/jpeg', 'gif' => 'image/gif', 'png' => 'image/png',
			'tif' => 'image/tiff', 'tiff' => 'image/tiff', 'ico' => 'image/x-icon',
			'swf' => 'application/x-shockwave-flash', 'pdf' => 'application/pdf',
			'zip' => 'application/zip', 'gz' => 'application/x-gzip',
			'tar' => 'application/x-tar', 'bz' => 'application/x-bzip',
			'bz2' => 'application/x-bzip2', 'txt' => 'text/plain',
			'asc' => 'text/plain', 'htm' => 'text/html', 'html' => 'text/html',
			'css' => 'text/css', 'js' => 'text/javascript',
			'xml' => 'text/xml', 'xsl' => 'application/xsl+xml',
			'ogg' => 'application/ogg', 'mp3' => 'audio/mpeg', 'wav' => 'audio/x-wav',
			'avi' => 'video/x-msvideo', 'mpg' => 'video/mpeg', 'mpeg' => 'video/mpeg',
			'mov' => 'video/quicktime', 'flv' => 'video/x-flv', 'php' => 'text/x-php'
		);
		$ext = strtolower(pathInfo($file, PATHINFO_EXTENSION));
		return isset($exts[$ext]) ? $exts[$ext] : 'application/octet-stream';
	}


	/**
	* Generate the auth string: "AWS AccessKey:Signature"
	*
	* @internal Used by S3Request::getResponse()
	* @param string $string String to sign
	* @return string
	*/
	public static function __getSignature($string)
	{
		return 'AWS '.self::$__accessKey.':'.self::__getHash($string);
	}


	/**
	* Creates a HMAC-SHA1 hash
	*
	* This uses the hash extension if loaded
	*
	* @internal Used by __getSignature()
	* @param string $string String to sign
	* @return string
	*/
	private static function __getHash($string)
	{
		return base64_encode(extension_loaded('hash') ?
		hash_hmac('sha1', $string, self::$__secretKey, true) : pack('H*', sha1(
		(str_pad(self::$__secretKey, 64, chr(0x00)) ^ (str_repeat(chr(0x5c), 64))) .
		pack('H*', sha1((str_pad(self::$__secretKey, 64, chr(0x00)) ^
		(str_repeat(chr(0x36), 64))) . $string)))));
	}

}

final class S3Request
{
	private $endpoint, $verb, $bucket, $uri, $resource = '', $parameters = array(),
	$amzHeaders = array(), $headers = array(
		'Host' => '', 'Date' => '', 'Content-MD5' => '', 'Content-Type' => ''
	);
	public $fp = false, $size = 0, $data = false, $response;


	/**
	* Constructor
	*
	* @param string $verb Verb
	* @param string $bucket Bucket name
	* @param string $uri Object URI
	* @return mixed
	*/
	function __construct($verb, $bucket = '', $uri = '', $endpoint = 's3.amazonaws.com')
	{
		$this->endpoint = $endpoint;
		$this->verb = $verb;
		$this->bucket = $bucket;
		$this->uri = $uri !== '' ? '/'.str_replace('%2F', '/', rawurlencode($uri)) : '/';

		if ($this->bucket !== '')
		{
			$this->headers['Host'] = $this->bucket.'.'.$this->endpoint;
			$this->resource = '/'.$this->bucket.$this->uri;
		}
		else
		{
			$this->headers['Host'] = $this->endpoint;
			$this->resource = $this->uri;
		}
		$this->headers['Date'] = gmdate('D, d M Y H:i:s T');

		$this->response = new STDClass;
		$this->response->error = false;
	}


	/**
	* Set request parameter
	*
	* @param string $key Key
	* @param string $value Value
	* @return void
	*/
	public function setParameter($key, $value)
	{
		$this->parameters[$key] = $value;
	}


	/**
	* Set request header
	*
	* @param string $key Key
	* @param string $value Value
	* @return void
	*/
	public function setHeader($key, $value)
	{
		$this->headers[$key] = $value;
	}


	/**
	* Set x-amz-meta-* header
	*
	* @param string $key Key
	* @param string $value Value
	* @return void
	*/
	public function setAmzHeader($key, $value)
	{
		$this->amzHeaders[$key] = $value;
	}


	/**
	* Get the S3 response
	*
	* @return object | false
	*/
	public function getResponse()
	{
		$query = '';
		if (sizeof($this->parameters) > 0)
		{
			$query = substr($this->uri, -1) !== '?' ? '?' : '&';
			foreach ($this->parameters as $var => $value)
				if ($value == null || $value == '') $query .= $var.'&';
				// Parameters should be encoded (thanks Sean O'Dea)
				else $query .= $var.'='.rawurlencode($value).'&';
			$query = substr($query, 0, -1);
			$this->uri .= $query;

			if (array_key_exists('acl', $this->parameters) ||
			array_key_exists('location', $this->parameters) ||
			array_key_exists('torrent', $this->parameters) ||
			array_key_exists('logging', $this->parameters))
				$this->resource .= $query;
		}
		$url = (S3::$useSSL ? 'https://' : 'http://') . $this->headers['Host'].$this->uri;
		//var_dump($this->bucket, $this->uri, $this->resource, $url);

		// Basic setup
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_USERAGENT, 'S3/php');

		if (S3::$useSSL)
		{
			// SSL Validation can now be optional for those with broken OpenSSL installations
			curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, S3::$useSSLValidation ? 1 : 0);
			curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, S3::$useSSLValidation ? 1 : 0);

			if (S3::$sslKey !== null) curl_setopt($curl, CURLOPT_SSLKEY, S3::$sslKey);
			if (S3::$sslCert !== null) curl_setopt($curl, CURLOPT_SSLCERT, S3::$sslCert);
			if (S3::$sslCACert !== null) curl_setopt($curl, CURLOPT_CAINFO, S3::$sslCACert);
		}

		curl_setopt($curl, CURLOPT_URL, $url);

		if (S3::$proxy != null && isset(S3::$proxy['host']))
		{
			curl_setopt($curl, CURLOPT_PROXY, S3::$proxy['host']);
			curl_setopt($curl, CURLOPT_PROXYTYPE, S3::$proxy['type']);
			if (isset(S3::$proxy['user'], S3::$proxy['pass']) && $proxy['user'] != null && $proxy['pass'] != null)
				curl_setopt($curl, CURLOPT_PROXYUSERPWD, sprintf('%s:%s', S3::$proxy['user'], S3::$proxy['pass']));
		}

		// Headers
		$headers = array(); $amz = array();
		foreach ($this->amzHeaders as $header => $value)
			if (strlen($value) > 0) $headers[] = $header.': '.$value;
		foreach ($this->headers as $header => $value)
			if (strlen($value) > 0) $headers[] = $header.': '.$value;

		// Collect AMZ headers for signature
		foreach ($this->amzHeaders as $header => $value)
			if (strlen($value) > 0) $amz[] = strtolower($header).':'.$value;

		// AMZ headers must be sorted
		if (sizeof($amz) > 0)
		{
			sort($amz);
			$amz = "\n".implode("\n", $amz);
		} else $amz = '';

		if (S3::hasAuth())
		{
			// Authorization string (CloudFront stringToSign should only contain a date)
			$headers[] = 'Authorization: ' . S3::__getSignature(
				$this->headers['Host'] == 'cloudfront.amazonaws.com' ? $this->headers['Date'] :
				$this->verb."\n".$this->headers['Content-MD5']."\n".
				$this->headers['Content-Type']."\n".$this->headers['Date'].$amz."\n".$this->resource
			);
        }

		curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
		curl_setopt($curl, CURLOPT_HEADER, false);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, false);
		curl_setopt($curl, CURLOPT_WRITEFUNCTION, array(&$this, '__responseWriteCallback'));
		curl_setopt($curl, CURLOPT_HEADERFUNCTION, array(&$this, '__responseHeaderCallback'));
		curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);

		// Request types
		switch ($this->verb)
		{
			case 'GET': break;
			case 'PUT': case 'POST': // POST only used for CloudFront
				if ($this->fp !== false)
				{
					curl_setopt($curl, CURLOPT_PUT, true);
					curl_setopt($curl, CURLOPT_INFILE, $this->fp);
					if ($this->size >= 0)
						curl_setopt($curl, CURLOPT_INFILESIZE, $this->size);
				}
				elseif ($this->data !== false)
				{
					curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $this->verb);
					curl_setopt($curl, CURLOPT_POSTFIELDS, $this->data);
				}
				else
					curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $this->verb);
			break;
			case 'HEAD':
				curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'HEAD');
				curl_setopt($curl, CURLOPT_NOBODY, true);
			break;
			case 'DELETE':
				curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'DELETE');
			break;
			default: break;
		}

		// Execute, grab errors
		if (curl_exec($curl))
			$this->response->code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
		else
			$this->response->error = array(
				'code' => curl_errno($curl),
				'message' => curl_error($curl),
				'resource' => $this->resource
			);

		@curl_close($curl);

		// Parse body into XML
		if ($this->response->error === false && isset($this->response->headers['type']) &&
		$this->response->headers['type'] == 'application/xml' && isset($this->response->body))
		{
			$this->response->body = simplexml_load_string($this->response->body);

			// Grab S3 errors
			if (!in_array($this->response->code, array(200, 204, 206)) &&
			isset($this->response->body->Code, $this->response->body->Message))
			{
				$this->response->error = array(
					'code' => (string)$this->response->body->Code,
					'message' => (string)$this->response->body->Message
				);
				if (isset($this->response->body->Resource))
					$this->response->error['resource'] = (string)$this->response->body->Resource;
				unset($this->response->body);
			}
		}

		// Clean up file resources
		if ($this->fp !== false && is_resource($this->fp)) fclose($this->fp);

		return $this->response;
	}


	/**
	* CURL write callback
	*
	* @param resource &$curl CURL resource
	* @param string &$data Data
	* @return integer
	*/
	private function __responseWriteCallback(&$curl, &$data)
	{
		if (in_array($this->response->code, array(200, 206)) && $this->fp !== false)
			return fwrite($this->fp, $data);
		else
			$this->response->body .= $data;
		return strlen($data);
	}


	/**
	* CURL header callback
	*
	* @param resource &$curl CURL resource
	* @param string &$data Data
	* @return integer
	*/
	private function __responseHeaderCallback(&$curl, &$data)
	{
		if (($strlen = strlen($data)) <= 2) return $strlen;
		if (substr($data, 0, 4) == 'HTTP')
			$this->response->code = (int)substr($data, 9, 3);
		else
		{
			$data = trim($data);
			if (strpos($data, ': ') === false) return $strlen;
			list($header, $value) = explode(': ', $data, 2);
			if ($header == 'Last-Modified')
				$this->response->headers['time'] = strtotime($value);
			elseif ($header == 'Content-Length')
				$this->response->headers['size'] = (int)$value;
			elseif ($header == 'Content-Type')
				$this->response->headers['type'] = $value;
			elseif ($header == 'ETag')
				$this->response->headers['hash'] = $value{0} == '"' ? substr($value, 1, -1) : $value;
			elseif (preg_match('/^x-amz-meta-.*$/', $header))
				$this->response->headers[$header] = is_numeric($value) ? (int)$value : $value;
		}
		return $strlen;
	}

}

class S3Exception extends Exception {
	function __construct($message, $file, $line, $code = 0)
	{
		parent::__construct($message, $code);
		$this->file = $file;
		$this->line = $line;
	}
}
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/1/16
 * Time: 21:34
 */
class Session{

    /**
     * @var User
     */
    private static $_me = null;

    private static $_sudo = null;

    /**
     * HACK: implement this
     * @return int
     * @throws SecurityException
     */
    public static function idUser(){
        if(!self::isLogged()){
            throw new SecurityException("No Session (iduser)");
        }
        return $_SESSION['iduser'];
    }

    /**
     * Gets a value indicating if there's a session
     *
     * @return bool
     */
    public static function isLogged(){
        return isset($_SESSION['iduser']);
    }

    /**
     * Gets the currently logged user
     *
     * @return User
     */
    public static function me(){
        if (!self::$_me){
            self::$_me = User::byAuto(self::idUser());
        }
        return self::$_me;
    }

    /**
     * Makes a user login
     *
     * @remote
     * @param string $uname
     * @param string $pass
     * @return User
     * @throws Exception
     */
    public static function logIn($uname, $pass){

        if($u = User::byUname($uname)){
            if ($u->password == md5($pass) && !$u->isBanned() && !$u->inTrash()){
                $_SESSION['iduser'] = $u->iduser;
                $u->loadLoginData();
                return $u;
            }
        }

        throw new Exception('invalidUserOrPass');
    }

    /**
     * Logs the user out
     *
     * @remote
     */
    public static function logOut(){
        session_destroy();
        session_start();
        $_SESSION = array();
    }

}/**
 * Stub generated by xlatte
 */
class Setting extends settingBase{

    /**
     * Gets the setting of specified owner
     *
     * @param string $name
     * @param int $id
     * @param string $settingName
     * @return Setting
     */
    public static function byOwner($name, $id, $settingName){
        return DL::oneOf('Setting', "
            SELECT *
            FROM `setting`
            WHERE owner = '$name'
            AND idowner = '$id'
            AND name = '$settingName'
        ");
    }

    /**
     * Gets the settings of specified owner
     *
     * @param string $name
     * @param int $id
     * @return Setting[]
     */
    public static function byOwnerAll($name, $id){
        return DL::arrayOf('Setting', "
            SELECT *
            FROM `setting`
            WHERE owner = '$name'
            AND idowner = '$id'
        ");
    }

    /**
     * Gets the setting of the specified record
     *
     * @param DataRecord $record
     * @param string $settingName
     * @return Setting
     */
    public static function byRecord($record, $settingName){
        return self::byOwner(get_class($record), $record->getIdValue(), $settingName);
    }

    /**
     * Gets the settings of the specified record
     *
     * @param DataRecord $record
     * @return Setting[]
     */
    public static function byRecordAll($record){
        return self::byOwnerAll(get_class($record), $record->getIdValue());
    }

    /**
     * Gets the global settings of the app
     *
     * @remote
     * @return Setting[]
     */
    public static function getGlobal(){
        return DL::arrayOf('Setting', "
            SELECT #COLUMNS
            FROM setting
            WHERE owner = 'global'
            AND idowner = 0
        ");
    }

    /**
     * Gets the setting of specified owner
     *
     * @param string $name
     * @param int $id
     * @param string $settingName
     * @return string
     */
    public static function getValue($name, $id, $settingName){
        $s = DL::oneOf('Setting', "
            SELECT *
            FROM `setting`
            WHERE owner = '$name'
            AND idowner = '$id'
            AND name = '$settingName'
        ");

        if ($s){
            return $s->value;
        }

        return null;
    }

    /**
     * Gets the setting of specified owner
     *
     * @param string $name
     * @param int $id
     * @param string $settingName
     * @param string $value
     * @return Setting
     */
    public static function setValue($name, $id, $settingName, $value){
        $s = DL::oneOf('Setting', "
            SELECT *
            FROM `setting`
            WHERE owner = '$name'
            AND idowner = '$id'
            AND name = '$settingName'
        ");

        if ($s){
            $s->value = $value;
            $s->save();
        }else{
            $s = new Setting();
            $s->owner = $name;
            $s->idowner = $id;
            $s->name = $settingName;
            $s->value = $value;
            $s->save();
        }

        return $s;
    }

    /**
     * Sets the owner and saves the record
     * @param $record
     */
    public function saveForRecord($record){
        $this->idowner = $record->getIdValue();
        $this->owner = get_class($record);
        $this->save();
    }

    /**
     * Override.
     * @throws SecurityException
     */
    public function onUpdating(){

        // If setting is the configuration of the page.
        // Take in account the required permission.
        if($this->owner == 'Page' && $this->name == 'page-configuration'){
            $page = Page::byAuto($this->idowner);

            if(!$page->canIWrite()){
                throw new SecurityException("Only owner, root or sys-admin may configure pages. " . $page->isMine() . " - " . $page->isOnline());
            }
        }
    }

    public function __toString(){
        return $this->value ? $this->value : '';
    }

}/**
 * Stub generated by xlatte
 */
class User extends userBase{

    const FLAG_ROOT_USER = 1;

    const FLAG_SYS_ADMIN = 2;

    const FLAG_BANNED_USER = 4;

    const FLAG_IN_TRASH = 8;

    const FLAG_USE_BACKEND = 16;

    /**
     * Gets a user by its uname
     *
     * @param $uname
     * @return User
     */
    public static function byUname($uname){
        return DL::oneOf('User', "
            SELECT #COLUMNS
            FROM `user`
            WHERE uname = '$uname'
        ");
    }

    /**
     * @remote
     * @param string $text
     * @return User[]
     * @throws SecurityException
     */
    public static function search($text){
        if(!Session::me()->isRoot()){
            throw new SecurityException('Only root user');
        }
        return DL::arrayOf('User', "
            SELECT #COLUMNS
            FROM `user`
            WHERE uname LIKE '$text%'
        ");
    }

    /**
     * @remote
     * @return User[]
     * @throws SecurityException
     */
    public static function catalog(){

        if(!Session::me()->isRoot()){
            throw new SecurityException('Only root user');
        }

        $except = '';

        if (Session::idUser() != 1){
            $except = "AND iduser != 1";
        }

        return DL::arrayOf('User', "
            SELECT #COLUMNS
            FROM `user`
            WHERE (flags & 4) != 4
            $except
        ");
    }

    /**
     * @var array
     */
    private $_groups;

    /**
     * @return bool
     */
    public function canUseBackend(){
        return $this->isRoot() || ($this->flags & self::FLAG_USE_BACKEND) == self::FLAG_USE_BACKEND;
    }

    /**
     * @remote
     * @param string $oldPassword
     * @param string $password
     * @return boolean
     * @throws Exception
     */
    public function changePassword($oldPassword, $password){
        if (!Session::me()->isRoot() && $this->iduser != Session::idUser()){
            throw new SecurityException('Only root users may check passwords');
        }

        if(!Session::me()->isRoot()){
            if (md5($oldPassword) != $this->password){
                throw new Exception('currentPasswordNotValid');
            }
        }

        $this->password = DL::getSingle("SELECT md5('$password')");
        $this->save();
    }

    /**
     * Gets an array of groups of the system
     *
     * @return array
     */
    public function getGroups(){
        if(!$this->_groups){
            $this->_groups = Group::byUser($this->iduser);
        }

        return $this->_groups;
    }

    /**
     * Gets a value indicating if the user is in the specified group
     *
     * @param int $idgroup
     * @return bool
     */
    public function inGroup($idgroup){
        foreach($this->getGroups() as $g){
            if ($g->idgroup == $idgroup){
                return true;
            }
        }
        return false;
    }

    /**
     * @return bool
     */
    public function inTrash(){
        return ($this->flags & self::FLAG_IN_TRASH) == self::FLAG_IN_TRASH;

    }

    /**
     * @return bool
     */
    public function isBanned(){
        return ($this->flags & self::FLAG_BANNED_USER) == self::FLAG_BANNED_USER;
    }

    /**
     * Gets a value indicating if the user is root
     * @return bool
     */
    public function isRoot(){
        return ($this->flags & self::FLAG_ROOT_USER) == self::FLAG_ROOT_USER;
    }

    /**
     * @return bool
     */
    public function isSysAdmin(){
        return ($this->flags & self::FLAG_SYS_ADMIN) == self::FLAG_SYS_ADMIN;
    }

    /**
     * Loads necessary data for log-in
     */
    public function loadLoginData(){
        $this->getGroups();
    }

    /**
     * Override.
     */
    public function onInserting(){
        if($this->password){
            $this->password = md5($this->password);
        }

        // Default Flags
        $this->flags = self::FLAG_USE_BACKEND;
    }

    /**
     * Override.
     */
    public function onUpdating(){
        if (sizeof($this->password) == 0){
            $this->password = DL::getSingle("SELECT password FROM user WHERE iduser = '$this->iduser'");
        }
    }

    /**
     * Override
     * @return array
     */
    public function pack(){
        $arr = parent::pack();
        //unset($arr['fields']['password']);

        if($this->_groups){
            $arr['properties']['_groups'] = DataRecord::packArray($this->_groups);
        }
        return $arr;
    }

    /**
     * @remote
     * @param string $password
     * @return boolean
     * @throws SecurityException
     */
    public function passwordCorrect($password){
        if (!Session::me()->isRoot() && $this->iduser != Session::idUser()){
            throw new SecurityException('Only root users may check passwords');
        }

        return md5($password) == $this->password;
    }

}