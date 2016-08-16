<?php

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
