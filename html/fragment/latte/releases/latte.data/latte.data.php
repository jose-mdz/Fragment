<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 5/27/16
 * Time: 20:17
 */
class DL extends DataLatte{}


/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 12/11/13
 * Time: 9:48 AM
 */
class DataLatteCall{

    /**
     * Name of class where method is located
     * @var string
     */
    public $className = null;

    /**
     * Name of the module where the call should be executed
     * @var string
     */
    public $moduleName = null;

    /**
     * Method to call
     * @var string
     */
    public $method = null;

    /**
     * Parameters to pass to the method to call
     * @var array
     */
    public $params = array();

    /**
     * Id of the object where call should be made. Zero or lower indicates a call on static method.
     * @var int
     */
    public $id = 0;

    /**
     * Creates the response
     */
    public function __construct(){

    }

    /**
     * Executes the call and returns the result
     *
     * @return DataLatteResponse
     * @throws SecurityException
     */
    public function execute(){

        if(!$this->moduleName){
            throw new SecurityException("No module specified");
        }

        // Load module connection
        LatteModule::byName($this->moduleName)->loadConnection();

//        echo "[Loaded module: $this->moduleName]";
//        echo "[Loaded connection:" . var_export(DataLatte::$current, true) . " ]" ;

        if(!$this->className){
            return DataLatteResponse::fromError("No class name specified");
        }elseif(!$this->method){
            return DataLatteResponse::fromError("No method name specified");
        }

        $object = $this->id > 0 ? DataRecord::byAuto($this->className, $this->id) : $this->className;
        $reflector = new ReflectionObject(new $this->className);
        $info = LatteReflection::generatePhpFileInfo($reflector->getFileName());
        $response = null;
        $error = null;

        // If method exists in reflection analyzer
        if (array_key_exists($this->method, $info['methods'])) {

            // If method is marked as remote
            if (in_array('remote', $info['methods'][$this->method]['attributes'])) {

                // If method exists for PHP parser
                if (method_exists($this->className, $this->method)) {

                    // Clear log and warn arrays
                    $GLOBALS['ajax-warn'] = array();
                    $GLOBALS['ajax-log'] = array();

                    try {

                        // Execute function
                        $result = call_user_func_array(array($object, $this->method), $this->params);

                        // Create response
                        $response = new DataLatteResponse($result);

                        if(sizeof($GLOBALS['ajax-warn'])){
                            $response->warnings = $GLOBALS['ajax-warn'];
                        }

                        if(sizeof($GLOBALS['ajax-log'])){
                            $response->logs = $GLOBALS['ajax-log'];
                        }

                    } catch (Exception $e) {
                        //die("Died because of exception: $e");
                        $response = DataLatteResponse::fromError($e->getMessage(), $e->getCode());
                    }
                } else {
                    $response = DataLatteResponse::fromError("$this->className::$this->method does not exist");
                }
            } else {
                $response = DataLatteResponse::fromError("Method $this->method not registered as remote." . var_export($info, true));
            }
        } else {
            $response = DataLatteResponse::fromError("Method $this->method not in info structure");
        }

        if(!($response instanceof DataLatteResponse)){
            $response = DataLatteResponse::fromError("Unknown error! :S");
        }


        return $response;

    }

}
class DataLatteConfigurationException extends Exception{
    
    public function __construct($message = 'Datalatte is not well configured') {
        parent::__construct($message, 97);
    }
    
}/**
 * Handles tasks related to the DataLatteManager, the tool for managing DataLatte.
 */
    class DataLatteManager{
        
        const MIN_PASSPHRASE_LENGTH = 5;
        
        const MAX_LOGIN_FAILS = 3;
        
        /**
         * @remote
         */
        public static function test(){
           return DataLatte::getCache("SELECT * FROM `cookie`");
        }
        
        /**
         * Checks if DataLatte can be initialized
         * 
         * @remote
         * @return boolean
         */
        public static function canInit(){
            return DataLatte::canInit();
        }
        
        /**
         * Gets the namespaces on ua/ folder
         * 
         * @remote
         * @deprecated use getModuleUaNamespaces
         * @param string $app
         * @return array
         */
        public static function getUaNamespaces($app){
            
            return LatteReflection::getAppUaNamespaces($app);
        }
        
        /**
         * Gets the php classes of the specified version
         * 
         * @remote
         * @param string $moduleName
         * @param string $version
         * @return array
         */
        public static function getModulePhpClasses($moduleName, $version = 'development'){
            
            $m = new LatteModule($moduleName);
            
            return $m->getPhpClasses($version);
        }
        
        /**
         * @remote
         * @param type $module
         * @param type $version
         */
        public static function getModuleUaNamespaces($moduleName, $version = 'development'){
            
            $m = new LatteModule($moduleName);
            
            return $m->getUaNamespaces($version);
            
        }
        
        /**
         * @remote
         * @param type $module
         * @param type $version
         */
        public static function getModuleUaNamespaceClasses($moduleName, $namespace, $version = 'development'){
            
            $m = new LatteModule($moduleName);
            
            return $m->getUaNamespaceClasses($namespace, $version);
            
        }
        
        /**
         * 
         * @remote
         * @param type $moduleName
         * @param type $class
         * @param type $version
         * @return any
         */
        public static function getModulePhpClassInfo($moduleName, $class, $version = 'development'){
            
            $m = new LatteModule($moduleName);
            
            return $m->getPhpClassInfo($class, $version);
            
        }
        
        /**
         * 
         * @remote
         * @param type $moduleName
         * @param type $class
         * @param type $version
         * @return any
         */
        public static function getModuleJsClassInfo($moduleName, $class, $version = 'development'){
            
            $m = new LatteModule($moduleName);
            
            return $m->getUaClassInfo($class, $version);
        }
        
        /**
         * Gets the names of the files in the specified namespace
         * 
         * @remote
         * @deprecated
         * @param string $app
         * @param string $namespace
         * @return array
         */
        public static function getUaObjects($app, $namespace){
            
            $list = LatteReflection::getFileList(DataLatteUa::getAppPath($app) . '/ua/' . $namespace, '.js');
            
            foreach($list as $i => $value){
                $s = str($value);
                $list[$i] = $s->substring(0, $s->length() - 3) . '';
            }

            return $list;
        }
        
        /**
         * Gets information about the user session.
         * Returns <c>OK</c> | <c>NOSESSION</c> | <c>[Error description]</c>
         * 
         * @remote
         * @return string
         */
        public static function getSessionInformation() {
            global $strings;

            if (self::isEnabled()) {

                if (self::isReady()) {

                    if (self::isConfigured()) {
                        
                        if (self::isLoggedIn()) {
                            return 'OK';
                            
                        } else {
                            return 'NOSESSION';
                            
                        }
                    } else {
                        return 'NOCONNECTION';
                    }
                } else {
                    return $strings['managerNotReady'];
                }
            } else {
                return $strings['managerNotEnabled'];
            }
        }
         
        /**
         * Gets the information array about the object
         * 
         * @deprecated
         * @remote
         * @param string $app
         * @param string $className
         * @return array
         * @throws Exception
         */
        public static function getUaObject($app, $className){
            
            $parts = explode('.', $className);
            
            if(sizeof($parts) < 2)
                throw new Exception("Invalid class name");
            
            $filename = array_pop($parts);
            $namespace = implode('.', $parts);
            
            $path = DataLatteUa::getAppPath($app) . "/ua/$namespace/$filename.js";

            return  LatteReflection::generateJavaScriptFileInfo($path); 
        }
        
        /**
         * Gets the data of the specified table
         * 
         * @remote
         * @param string $tablename
         * @return DataSet
         * @throws NoSessionException
         */
        public static function getTableData($tablename){
            if(!self::isLoggedIn()) throw new NoSessionException();
            
            return new DataSet(DataLatte::getReader("SELECT * FROM `$tablename` LIMIT 100"));
        }
        
        /**
         * Gets the info of the specified table
         * 
         * @remote
         * @param string $tablename
         * @return DataSet
         * @throws NoSessionException
         */
        public static function getTableInfo($tablename){
            if(!self::isLoggedIn()) throw new NoSessionException();
            
            return new DataSet(DataLatte::getReader("SHOW COLUMNS FROM `$tablename`"));
        }
         
        /**
         * Gets the full path to the passhphrase file 
         * 
         * @return string
         */
        private static function getPassphrasePath(){
            return DATALATTE_FILES . "/passphrase.php";
        }
        
        /**
         * Gets the full path to the connection data file
         * 
         * @return string
         */
        private static function getConnectionPath(){
            return DATALATTE_FILES . "/connection.php";
        }
        
        /**
         * Gets the full path to the login fails file
         * 
         * @return string
         */
        private static function getFailsPath(){
            return DATALATTE_FILES . "/login_fails";
        }
        
        /**
         * Gets an array with the names of the tables on database
         * 
         * @remote
         * @return array
         * @throws Exception
         */
        public static function getDbTables(){
            if(!self::isLoggedIn()) throw new Exception("Not logged");
            
            return DataLatte::getCache("SHOW TABLES");
        }
        
        /**
         * Adds the IP to the fail list
         */
        private static function addFail(){
            file_put_contents(self::getFailsPath(), $_SERVER['REMOTE_ADDR'] . PHP_EOL, FILE_APPEND);
        }
        
        /**
         * Checks if there's a configured connection 
         * 
         * @remote
         * @return boolean
         */
        public static function isConfigured(){
            return DataLatte::canInit();
            //if (DataLatte::getsingle("SELECT now()"))
            //    return true;
            //return false;
        }        
        
        /**
         * Checks if the DataLatte manager is enabled.
         * To enable the DataLatte manager, a file named PASSHPRHASE should exist on _files/PASSPHRASE directory
         * and it must contain an alphanumeric passphrase larger than 5 characters.
         * 
         * @return boolean
         */
        public static function isEnabled(){
            
            $path = DataLatteManager::getPassphrasePath();
            
            if(file_exists($path)){
                ob_start(); 
                include $path; 
                ob_end_clean();
                
                if(!defined('PASSPHRASE')) return false;
                
                return strlen(trim(PASSPHRASE)) > DataLatteManager::MIN_PASSPHRASE_LENGTH;
                
            }else{
                return false;
            }
            
        }
        
        /**
         * Checks if there's a user currently logged in
         * 
         * @remote
         * @return boolean 
         */
        public static function isLoggedIn(){
            return isset($_SESSION['datalattemanager']);
        }
        
        /**
         * Checks that a _files directory exists and is writable
         * 
         * @return boolean
         */
        public static function isReady(){
            
            if(is_writable(DATALATTE_FILES . "/.")){
                
                return true;
            }
            return false;
        }
        
        /**
         * Gets an array of ips who have failed on logins 
         * 
         * @return array
         */
        private static function getFails(){
            $path = DataLatteManager::getFailsPath();
            
            $fails = array();
            
            if(file_exists($path)){
                $fails = file($path);
            }
            
            return $fails;
        }
        
        /**
         * Gets the passphrase
         * 
         * @return string
         */
        private static function getPassphrase(){
            return trim(PASSPHRASE);
        }
        
        /**
         * Tries to log user in
         * 
         * @remote
         * @param string $passphrase
         * @return boolean
         */
        public static function logIn($passphrase){
            
            $success = false;
            
            if(DataLatteManager::isEnabled()){
                $success = $passphrase == DataLatteManager::getPassphrase();
            }
            
            if($success){
                $_SESSION['datalattemanager'] = 1;
                
                self::resetFails();
                
            }else{
                // Handle fail counter
                self::addFail();
                
                $fails = self::getFails();
                
                if(sizeof($fails) > self::MAX_LOGIN_FAILS){
                    $path = self::getPassphrasePath();
                    rename($path, $path . "_BLOCKED");
                }
                
            }
            
            return $success;
        }
        
        /**
         * @remote
         * @param LatteModule $module
         * @param type $major
         * @return string
         */
        public static function makeRelease($module, $major = false){
            
            $module = new LatteModule($module);
            
            
            return $module->makeRelease($major);
        }
        
        /**
         * Handles HTTP requests with commands for manager interface
         * 
         * @return mixed
         */
        public static function processRequest(){
            global $strings;

            switch($_POST['action']){
                
                case 'login':
                    if(!DataLatteManager::logIn($_POST['passphrase']))
                        return $strings['invalidPassphrase'];
                    break;
                case 'logout':
                    unset($_SESSION['datalattemanager']); 
                    break;
                
                case 'update-connection':
                    return DataLatteManager::saveConnection($_POST['user'], $_POST['pass'], 
                            $_POST['host'], $_POST['db'], true);
                    break;
                
                case 'update-records':
                    return DataLatteManager::updateRecords();
                    break;
                
            }
            
            return null;
            
        }
        
        /**
         * Resets the fail list
         */
        private static function resetFails(){
            /// Delete fail file
            $path = self::getFailsPath();
            
            if(file_exists($path)){
                unlink($path);
            }
        }
        
        /**
         * Saves the connection described by the parameters as the default connection
         * @remote
         * 
         * @return bool 
         */
        public static function saveConnection($user, $pass, $host, $db, $debug){
            global $strings;

            $debug = $debug ? 'true' : 'false';
            $success = false;

            /**
             * Test connection 
             */
            try{
                $x = new DataConnection($user, $pass, $host, $db, $debug);
                if($x) $success = true;
            }catch(Exception $e){
                return $strings['parametersError'] . ' ' . $e->getMessage();
            }
            
            
            if($success){
                $filename = DATALATTE_FILES . "/connection.php";
                unlink($filename);
                file_put_contents($filename, "<?php
                    
    /**
     * 
     * WARNING: DO NOT CHANGE THIS FILE
     * This class was generated automatically,
     * by the DataLatte framework code.
     * 
     * Created: " . DataLatte::datetime() . "
     * 
     * To change the default connection parameters,
     * go to the datalatte/ control panel interface
     * using a web ApiDetailView.
     */

    class ConnectionParameters{

        public \$user = '$user';
        public \$pass = '$pass';
        public \$host = '$host';
        public \$db   = '$db';

        public static \$debug = $debug;
    } 
                ");
            }
            
            return $success;
        }
        
        /**
         * Updates the records
         * @remote
         */
        public static function updateRecords(){
            
            if(!self::isLoggedIn()) die("No session");
            
            $path = DATALATTE_FILES . '/records.php';
            $archiveFolder = DATALATTE_FILES . '/records_archive';
            $archive = $archiveFolder . '/records-' . time() . '.php';
            
            /// Archive current copy
            if(file_exists($path)){
                
                // Check if archive folder exits
                if(!file_exists($archiveFolder . '/.')){
                    mkdir($archiveFolder);
                }
                
                // Archive copy
                rename($path, $archive);
            }
            
            /// Empty file
            file_put_contents($path , '<?php /* Created: ' . DataLatte::datetime() . ' */' . PHP_EOL);
            
            function /**/ callback($buffer){
                file_put_contents(DATALATTE_FILES . '/records.php' , $buffer, FILE_APPEND);
            }
            
            ob_start('callback');
            DataRecordFactory::dumpRecords();
            ob_end_flush();
            
            return true;
        }
        
        /**
         * Updates the value of the specified row of the specified table
         * 
         * @remote
         * @param string $table
         * @param string $key
         * @param string $keyValue
         * @param string $column
         * @param string $value
         */
        public static function updateTableValue($table, $key, $keyValue, $column, $value){
            if(!self::isLoggedIn()) throw new NoSessionException();
            
            $query = "UPDATE `$table` SET `$column` = '$value' WHERE `$key` = '$keyValue'";
            
            #return $query;
            
            return DataLatte::update($query);
        }
        
        /**
         * Gets the name of the primary key of table
         * @param string $key
         */
        private static function getTableKey($table){
            $ds = self::getTableInfo($table);
            
            foreach($ds->rows as $i => $row){
                if($row[3] == 'PRI')
                    return $row[0];
            }
            
            return null;
        }
        
        /**
         * 
         * @remote
         * @param type $param
         * @return any
         */
        public static function insertTableRows($table, $names, $values){
            if(!self::isLoggedIn()) throw new NoSessionException();
            
            $columns = '`' . implode('`, `', $names) . '`';
            $valuesArray = array();
            
            foreach($values as $i => $value){
                $valuesArray[] = "('" . implode("', '", $value) . "')";
            }
            
            $values = implode(", ", $valuesArray);
            
            $query = "INSERT INTO `$table`($columns) VALUES $values";
            return DataLatte::update($query);
        }

        /**
         * 
         * @remote
         * @param type $param
         * @return any
         */
        public static function updateTableRows($table, $names, $values){
            if(!self::isLoggedIn()) throw new NoSessionException();
            
            $responses = array();
            $queries = array();
            $key = self::getTableKey($table);
            
            foreach($values as $i => $row){
                
                $pairs = array();
                $where = '';
                
                foreach($names as $i => $name)
                    if($name == $key)
                        $where =  "`$name` = '$row[$i]'";
                    else
                        $pairs[] = "\n\t`$name` = '$row[$i]'";
                    
                
                $query = "\n\nUPDATE `$table` SET " . implode(', ', $pairs) . " \nWHERE $where";
                
                $queries[] = $query;
            }
            
            foreach($queries as $query)
                $responses[] = DataLatte::update($query);
            
            #$query = implode(';', $queries);
            
            return implode(", ", $responses);
        }
        
        /**
         * 
         * @remote
         * @param type $param
         * @return any
         */
        public static function deleteTableRows($table, $names, $values){
            if(!self::isLoggedIn()) throw new NoSessionException();
            
            $ids = array();
            $key = self::getTableKey($table);
            
            foreach($values as $i => $row){
                foreach($names as $i => $name)
                    if($name == $key)
                        $ids[] =  "`$name` = '$row[$i]'";
            }
            
            $where = implode(' OR ', $ids);
            $query = "DELETE FROM `$table` WHERE $where";
            
            #return $query;
            return DataLatte::update($query);
        }
        
        /**
         * @remote
         * @param
         * @return DataSet
         */
        public static function executeQuery($sql){
            if(!self::isLoggedIn()) throw new NoSessionException();
            
            DataLatte::init();
            
            $connection = DataLatte::$current;
            $result = $connection->query($sql);
            
            if(!$result){
                throw new Exception($connection->getErrorDescription());
            }
            
            if(is_bool($result)){
                return $connection->affectedRows();
            }else{
                return new DataSet(new DataReader($result));
                
            }
            
        }
        
        /**
         * @remote
         * @param
         * @return int
         */
        public static function executeUpdate($sql){
            if(!self::isLoggedIn()) throw new NoSessionException();
            return DataLatte::update($sql);
        }
        
        
        
    }
/**
 * Wraps a response to an Ajax Message.
 * 
 * This is the object that methods starting with <c>_remote_</c> must return.
 * 
 * Example:
 * <example>
 *  private function _remote_doSomething($a){
 *      if($a > 5)
 *          return DataLatteResponse.fromError("A must be lower than 5");
 *      else
 *          return new DataLatteResponse(array("My serializable Data"));
 *  }
 * </example>
*/
class DataLatteResponse{

    /**
     * Indicates that message executed successfully
     * @var boolean
     */
    public $success = true;

    /**
     * Result data of message
     * @var mixed 
     */
    public $data = array();

    /**
     * Log notes to return
     * @var array
     */
    public $logs = array();

    /**
     * Warnings to return
     * @var array
     */
    public $warnings = array();

    /**
     * Error description if execution failed
     * @var string
     */
    public $error = null;
    
    /**
     * Error number if execution failed
     * @var integer
     */
    public $errorCode = 0;

    /**
     * Creates a successful response starting from the specified data
     * @param mixed $data 
     */
    public function __construct($data) {
        $this->data = $data;
    }
    
    /**
     * Gets the data of object as a packed object
     * 
     * @return type
     */
    public function getData(){
        $data = null;
        
        if($this->data instanceof DataRecord){
            $data = $this->data->pack();
        }elseif(is_array($this->data)){
            $data = DataRecord::packArray($this->data);
        }else{
            $data = $this->data;
        }
        
        return $data;
    }

    /**
     * Encodes the response as a JSON object
     * @return string 
     */
    public function __toString() {
        
        return $this->getEncoded();
    }
    
    /**
     * Gets the encoded response
     * 
     * @return string
     */
    public function getEncoded(){
        $result = array(
            'success' => $this->success,
            'data' => $this->getData(),
        );

        if($this->errorCode){
            $result['errorCode'] = $this->errorCode;
        }

        if($this->error){
            $result['errorDescription'] = $this->error;
        }

        if(sizeof($this->logs)){
            $result['logs'] = $this->logs;
        }

        if(sizeof($this->warnings)){
            $result['warnings'] = $this->warnings;
        }

        return $result;// json_encode($result);
    }

    /**
     * Creates a failure response, from the specified error description
     * @param string $error 
     * @param int $errorCode
     * @return DataLatteResponse
     */
    public static function fromError($error, $errorCode = 0){
        $r = new DataLatteResponse(array());
        $r->success = false;
        $r->error = $error;
        $r->errorCode = $errorCode;
        return $r;
    }

}

/*
  Handles User Agent related tasks
  
 */
class DataLatteUa {
    
    /*
     * Path of DataLatte from UAs.
     * 
     * @var string
     */
    public static $path = "/datalatte";
    
    /**
     * Path of DataLatte request from UAs
     *
     * @var string
     */
    public static $requestPath = "/datalatte/request.php";
    
    /**
     * Holds a list of directory to search for namespaces
     * @var type 
     */
    private static $namespaceDirectories = array();
    
    /**
     * Includes JavaScript of specified app and DataLatte core.
     * 
     * @deprecated
     * @param string $app
     * @param boolean= $includeCore
     */
    public static function dumpAppJs($app){
        
        $response = '';
        
        $response .= PHP_EOL . "/* App: $app */" . PHP_EOL;
        
        $namespaces = LatteReflection::getAppUaNamespaces($app);
        $files = array();
        
        $response .= PHP_EOL . "/* Namespaces in : $app \n" . implode(PHP_EOL, $namespaces) . "*/" . PHP_EOL;

        foreach($namespaces as $namespace)
            $files = array_merge($files, self::getNamespaceFiles($app, $namespace));
        
        $response .= self::createFilesJs($files);

        echo $response;
    }
    
    /**
     * Finds all .js files in the path and gathers it's code.
     * File scanning is <b>not recursive</b>.
     * 
     * @param string $path Path to scan for JS files
     * @return string
     */
    public static function getFolderJs($path){
        
        $response = '';
        $folders = LatteReflection::getDirectoryList($path);
        $files = array();
        
        // Root files
        foreach(LatteReflection::getFileList($path, 'js') as $file){
            $response .= file_get_contents(String::combinePath($path, $file));
        }
        
        
        foreach($folders as $folder){
            
            // Compose folder path
            $folderPath = String::combinePath($path, $folder);
            
            // Scan files in folder
            foreach(LatteReflection::getFileList($folderPath, 'js') as $file){
                $files[] = String::combinePath($folderPath, $file);
            }
        }
        
        return $response . self::createFilesJs($files);
        
    }
    
    /**
     * Includes CSS of specified app and DataLatte core.
     * 
     * @deprecated
     * @param string $app
     * @param boolean= $includeCore
     */
    public static function dumpAppCss($app){
        $namespaces = LatteReflection::getAppUaNamespaces($app);
       
        foreach($namespaces as $namespace){
            self::dumpNamespaceCss($app, $namespace); 
        }
    }
    
    /**
     * @deprecated
     */
    public static function dumpFullCss(){
        
        // DataLatte CSS
        self::dumpAppCss('DataLatte');
        
        // App CSS
        self::dumpAppCss('App');
    }
    
    /**
     * @deprecated
     */
    public static function dumpFullJs(){
        
        // Runtime scripts
        self::dumpRunJs();
        
        // DataLatte scripts
        self::dumpAppJs('DataLatte');
        
        // App scripts
        self::dumpAppJs('App');
    }
    
    /**
     * Dumps the css code for the specified namespace
     * 
     * @deprecated
     * @param string $namespace 
     */
    public static function dumpNamespaceCss($app, $namespace){
        
        echo self::getNamespaceCss($app, $namespace);
    }
    
    /**
     * Dumps the css code for the specified namespace
     * 
     * @deprecated
     * @param string $namespace 
     */
    public static function getNamespaceCss($app, $namespace){
        
        // Security: remove "/" and "\" to avoid hacks
        $namespace = str_replace("/", '', $namespace);
        $namespace = str_replace("\\", '', $namespace);
        $response = '';
        
        $path = self::getPathForNamespace($app, $namespace);
        
        if($path){
            
            // Get files to export
            $files = LatteReflection::getFileList($path, '.css');
            
            foreach($files as $file){
                $response .= '/' . 
                        str_repeat('*', 80) . PHP_EOL .
                        str_repeat(' ', 30) . $file . PHP_EOL .
                        str_repeat('*', 80) . '/';
             
                $response .= file_get_contents( String::combinePath($path, $file));
            }
            
            
            
        }else{
            $response .= "/** (PHP) DataLatteUa: path for $namespace not found. **/";
        }
        
        return $response;
    }
    
    /**
     * Finds all .css files in the path's folders and gathers it's code.
     * File scanning is <b>not recursive</b>.
     * 
     * @param string $path Path to scan for JS files
     */
    public static function getFolderCss($path){
        
        $response = '';
        $folders = LatteReflection::getDirectoryList($path);
        $files = array();
        
        foreach($folders as $folder){
            
            // Compose folder path
            $folderPath = String::combinePath($path, $folder);
            
            // Scan files in folder
            foreach(LatteReflection::getFileList($folderPath, 'css') as $file){
                $files[] = String::combinePath($folderPath, $file);
            }
        }
        
        foreach($files as $file){
            $response .= '/' . 
                    str_repeat('*', 80) . PHP_EOL .
                    str_repeat(' ', 30) . $file . PHP_EOL .
                    str_repeat('*', 80) . '/';

            $response .= file_get_contents($file);
        }
        
        return $response;
    }
    
    /**
     * Gets the path for the specified app
     * 
     * @deprecated
     * @param type $app
     * @return string
     */
    public static function getAppPath($app){
        $path = "";

        if($app == 'DataLatte'){
            $path = __DIR__ . '/..';

        }elseif($app == 'App'){
            $path = __DIR__ . '/../../../datalatte-app';

        }else{
            $path = __DIR__ . '/../../datalatte-modules/' . $app;
        }
        
        return $path;
    }
    
    /**
     * Dumps the javascript code for the specified namespace
     * 
     * @deprecated
     * @param string $app
     * @param string $namespace 
     */
    public static function dumpNameSpaceJs($app, $namespace){
        echo self::createFilesJs(self::getNamespaceFiles($app, $namespace));
    }
    
    /**
     * Gets the file names of a namespace
     * 
     * @deprecated
     * @param type $app
     * @param type $namespace
     * @return type
     */
    private static function getNamespaceFiles($app, $namespace){
        // Security: remove "/" and "\" to avoid hacks
        $namespace = str_replace("/", '', $namespace);
        $namespace = str_replace("\\", '', $namespace);
        
        $path = self::getPathForNamespace($app, $namespace);
        
        // Check if path ok
        if(!$path) die("throw '(PHP) DataLatteUa: path for $namespace not found.';");
            
        // Get files to export
        $files = LatteReflection::getFileList($path, '.js');
        
        // Create files array into a full path files array
        foreach($files as $i => $file)
            $files[$i] = String::combinePath($path, $file);
        
        return $files;
    }
    
    /**
     * Dumps the javascript code for the specified namespace
     * @param string $app
     * @param string $namespace 
     */
    private static function createFilesJs($files){
        
        /* 
         * 
         * Check priorities of subclassing:
         *  Having classes A, B, C where AB means a inherits B
         * - assign priority by use of class name as suffix
         * - sort by priority
         * - bind using priority
        */
        $classes = array();
        $descriptions = array();
        $fulldescriptions = array();
        $response = "";
        $lines = array();

        /// Initialize classes array
        foreach($files as $file){
            $meta = LatteReflection::generateJavaScriptFileInfo($file);
            $name = $meta['name'];
            $classes[$name] = 0;
            $lines[$name] = sizeof(file($file));
            $descriptions[$name] = $meta;
            $fulldescriptions[$name] = $meta;
            $files[$name] = $file;
        }
        
        // Function that checks extensibility
        if(!function_exists('_extends')){
            function _extends($baseClass, $superClass, $classes){

                if(!array_key_exists($baseClass, $classes)){
                    return false;
                }

                $baseMeta = $classes[$baseClass];

                if($baseMeta['extend'] == $superClass){
                    return true;
                }else{
                    if($baseMeta['extend']){
                        return _extends($baseMeta['extend'], $superClass, $classes);
                    }else{
                        return false;
                    }
                }
            }
        }
        
        foreach($classes as $className => $priority){
            foreach($classes as $check => $foo){
                /**
                 * if $className extends $check
                 *  $classes[$className]++;
                 */
                if(_extends($check, $className, $fulldescriptions)){
                    $classes[$className]++;
                }
            }
        }

        /// Sort
        arsort($classes);

        $response .= "/*" . var_export($classes, true) . "*/";
        
        
//        $response .= "/* LINES " . PHP_EOL;
//        foreach($lines as $cname => $lines)
//            $response .= $cname . ',' . $lines . PHP_EOL;
//        echo PHP_EOL . " */";

        foreach($classes as $c => $priority){
            $info = $descriptions[$c];
            
            $nsparts = explode('.', $info['namespace']);
            $nsparent = '';
            $nslines = array();
            
            foreach($nsparts as $nspart){
                $checker = $nsparent . (strlen($nsparent) ? '.' : '') . $nspart;
                $nslines[] = "if((typeof $checker) == 'undefined') $checker = {};";
                $nsparent .= (strlen($nsparent) ? '.' : '') . $nspart;
            }
            
            $response .= PHP_EOL . implode(' ', $nslines) . PHP_EOL;
            
            $classpath = $files[$c];
            

            // DUMP file
            $source = file_get_contents($classpath);
            //$source = str_replace('this._super(', 'this["_super"](', $source);
            $response .= $source;

            // Iherit from base or Class
            if( $info['extend'] ){
                $response .= PHP_EOL ."$c = $info[extend].extend($c);" . PHP_EOL;

            }elseif($info['type'] == 'class'){
                $response .= PHP_EOL . "$c = Class.extend($c);" . PHP_EOL;
            }

            // Link static properties
            foreach($info['properties'] as $prop => $data){
                if(isset($data['attributes']) && in_array('static', $data['attributes']) ){
                    $response .= "$c.$prop = $c.prototype.$prop;" . PHP_EOL;
                }
            }

            // Link static methods
            foreach($info['methods'] as $method => $data){
                if(isset($data['attributes']) && in_array('static', $data['attributes']) ){
                    $response .= "$c.$method = $c.prototype.$method;" . PHP_EOL;
                }
            }

            // Name for console
            $response .= PHP_EOL ."$c.toString = function(){ return '$c'; }; " . PHP_EOL;


        }
        
        return $response;

    }
    
    /**
     * Do 
     * 
     * @deprecated
     * @param type $app
     * 
     */
    public static function dumpRuntimeJs(){

        readfile(String::combinePath(DATALATTE_CORE, 'support/js/datalatte-runtime.js'));

    }
    
    /**
     * @deprecated
     */
    public static function dumpRunJs(){
        self::dumpRuntimeJs();
        self::dumpJsConfig();
        self::dumpJsStrings();
    }
    
    /**
     * @deprecated
     */
    public static function dumpJsStrings(){
        echo self::getJsStrings();
    }
    
    /**
     * @deprecated
     * @return type
     */
    public static function getJsStrings(){
        global $strings;

        $response = '';
        
        $response .= "var strings = {};";

        foreach ($strings as $key => $string) {
            $response .= "strings.$key=\"$string\";";
        }
        
        return $response;
    }
    
    /**
     * @deprecated
     * @return string
     */
    public static function getJsConfig(){
        $response = '';
        
        $response .= "if(typeof latte == 'undefined') latte = {};";
        $response .= "if(typeof latte.config == 'undefined') latte.config = {};";
        $response .= "latte.config.requestPath = \"" . self::$requestPath . "\";";
        $response .= "latte.config.path = \"" . self::$path . "\";";
        
        return $response;
    }
    
    /**
     * @deprecated
     */
    public static function dumpJsConfig(){
        echo self::getJsConfig();
    }
    
    /**
     * Retrieves a record
     *
     * @remote 
     * @param string $name
     * @param string $id
     * @param string $module
     * @return DataRecord
     */
    public static function recordSelect($name, $id = NULL, $module = NULL){

        $connectionBuffer = null;

        if($module){
            if(!LatteModule::isLoaded($module)){
                $mod = LatteModule::memoryLoad($module);
                if($mod->hasConnection()){
                    $connectionBuffer = DL::$current;
                    $mod->loadConnection();
                }
            }else{
                $connectionBuffer = DL::$current;
                LatteModule::byName($module)->loadConnection();
            }
        }

        if($id)
            $record = DataRecord::byAuto($name, $id);
        else
            $record = new $name();

        if ($connectionBuffer){
            DL::$current = $connectionBuffer;
        }

        return $record->pack();
    }
    
    /**
     * @remote
     */
    public static function recordListing($name, $listing, $options = null){

        throw new Exception("Obsolete");
        
//        $record = new $name();
//
//        $records = DataLatteFw::getListingElements($record, $listing);
//
//        $pack = array();
//
//        foreach($records as $record)
//            $pack[] = $record->pack();
//
//        return $pack;
        
    }
    
    /**
     * @remote 
     * @param type $name
     * @param type $id
     */
    public static function recordUpdate($name, $id, $values){

//        die("name: $name, id: $id, values: " .var_export($values, true));
        $record = DataRecord::byAuto($name, $id);

//        die("Record: " . var_export($record, true));
        
//        if(!DataRecordMetadata::canEdit($record))
//            throw new Exception("Cant update record");
        
        $fields = $record->getFields();

//        die("Fields: " . var_export($fields, true));
        
        foreach($values as $field => $value){
            if(array_key_exists($field, $fields)){
                $record->{$field} = $value;
            }
        }

//        die("Updated Record: " . var_export($record, true));

        if(DL::$globalCanUpdate || $record->canUpdate()){
            $record->update();
        }else{
            throw new Exception("Record can't be updated (::canUpdate)");
        }


//        die("[UPDATED]");
        
        //return $record->update();
    }
    
    /**
     * @remote 
     * @param string $name
     * @param any $values
     * @return DataRecord
     * @throws Exception
     */
    public static function recordInsert($name, $values){

        $record = new $name;
        
//        if(!DataRecordMetadata::canInsert($record))
//            throw new Exception("Cant insert record");
        
        $fields = $record->getFields();

        foreach($values as $field => $value){
            if(array_key_exists($field, $fields)){
                $record->{$field} = $value;
            }
        }

        if (DL::$globalCanInsert || $record->canInsert()){
            $record->insert();
        }else{
            throw new Exception("Record can't be inserted (::canInsert)");
        }



        return $record->getIdValue();
    }
    
    /**
     * @remote 
     * @param string $name
     * @param int $id
     * @return any
     * @throws Exception
     */
    public static function recordDelete($name, $id){

        $record = DataRecord::byAuto($name, $id);
        
        if(DL::$globalCanDelete || !$record->canDelete())
            throw new Exception("Record can't be deleted (::canDelete)");
        
        return $record->delete();
    }

    /**
     * Gets the path for the specified namespace if found.
     * 
     * @deprecated
     * @param string $app
     * @param string $namespace
     * @return string File system path for namespace 
     */
    private static function getPathForNamespace($app, $namespace){
        $path = null;
        $checked = array();
        
        return self::getAppPath($app) . '/ua/' . $namespace;
        
        /// Get path
        foreach(self::$namespaceDirectories as $dir){
            $possible = String::combinePath($dir, $namespace);
            $check = String::combinePath($possible, '.');
            $checked[] = $dir;
            if(file_exists($check)){
                $path = $possible;
                break;
            }
        }
        
//        if(!$path){
//            echo "/* Checked:";
//            print_r($checked);
//            echo "*/";
//        }
        
        return $path;
    }
    
    /**
     * Gets an array of tags for running the specified app.
     * It optionally may not include the core runtime tags
     * 
     * @deprecated
     * @param string $app
     * @param boolean $includeCore
     * @return DocumentTag
     */
    public static function appTags($app = 'App', $includeCore = true){
        
        return array(
            tag("script")
            ->attr("type", "text/javascript")
            ->attr("src", String::combinePath(self::$path , '_core/support/js/jquery-1.7.2.min.js')),
            
            tag("script")->attr("type", "text/javascript")->attr("src", self::$requestPath . '?action=full-js&app='. $app),
            
            //tag("script")->attr("type", "text/javascript")->attr("src", '/compiled.js'),

            tag("link")
                ->attr("rel", "stylesheet") 
                ->attr("href", self::$requestPath . '?action=full-css&app=' . $app),
                
        );
    }
    
    /*
     * Gets an array of tags for a specific namespace
     * 
     * @deprecated 
     * @param string $namespace
     * @param string $app
     */
    public static function namespaceTags($namespace, $app = 'DataLatte'){
        
        if(!$namespace) throw new Exception("namespace is required");
        
        $parts = explode(".", $namespace);
        $object = $parts['0'];
        
        return array(
            tag("link")
                ->attr("rel", "stylesheet") 
                ->attr("href", self::$requestPath . '?action=namespace-css&namespace=' . $namespace . '&app=' . $app),

            tag("script")
                ->attr("type", "text/javascript")
                ->attr("src", self::$requestPath . '?action=namespace-js&namespace=' . $namespace . '&app=' . $app),
                //->attr("src", "/compiled.js"),
        );
    }
    
    /**
     * Registers a directory to search for namespaces
     * @param string $path Path to register
     */
    public static function registerNamespaceDirectory($path){
        self::$namespaceDirectories[] = $path;
    }
    
    /*
     * Gets an array of tags necessary for running DataLatte
     * @deprecated
     */
    public static function runtimeTags(){
        return array(
            tag("script")
            ->attr("type", "text/javascript")
            ->attr("src", String::combinePath(self::$path , 'support/js/jquery-1.7.2.min.js')),
            
            tag("script")
            ->attr("type", "text/javascript")
            ->attr("src", self::$requestPath . '?action=run-js'),
            
        );
    }
    
    /**
     * Updates the DataLatteUa::$path variable, based on the current REQUEST_URI
     */
    public static function updatePath(){
        $req = str($_SERVER['REQUEST_URI']);
        $index = $req->indexOf(str('/datalatte'));
        
        if($index < 0)
            throw new Exception("DataLatte not detected on URI_REQUEST");
        
        if($index > 0)
            self::$path = $req->substring(0, $index) . '/datalatte';
    }
    
}
  /**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 1/12/14
 * Time: 12:37 PM
 */

class DataQuery {

    public $columns = array();
    public $tables = array();
    public $conditions = array();
    public $joins = array();
    public $groups = array();
    public $havings = array();
    public $orderby = array();

    function __construct($table = null){

        if($table){
            $this->tables[] = $table;
        }

    }

    private function columnsString(){
        if(sizeof($this->columns)){
            return implode(", ", $this->columns);
        }else{
            return sizeof($this->joins) ? "#COLUMNS" : "*";
        }

    }

    private function conditionsString(){
        $rows = array();

        if(sizeof($this->conditions)){
            foreach($this->conditions as $c){
                if(is_array($c)){
                    $rows[] = implode (" OR ", $c);
                }else{
                    $rows[] = $c;
                }
            }
        }

        if(sizeof($rows)){
            return "WHERE " . implode("\n AND ", $rows);
        }else{
            return '';
        }
    }

    private function groupsString(){
        if(sizeof($this->groups)){
            return "GROUP BY " . implode(", ", $this->groups);
        }
        return '';
    }

    private function havingsString(){
        $rows = array();

        if(sizeof($this->havings)){
            foreach($this->havings as $h){
                if(is_array($h)){
                    $rows[] = implode(" OR ", $h);
                }else{
                    $rows[] = $h;
                }
            }
        }

        if($rows){
            return "HAVING " . implode(" AND ", $rows);
        }
        return '';
    }

    private function joinsString(){
        return implode("\n", $this->joins);
    }

    private function tablesString(){
        if(sizeof($this->tables)){
            return "FROM " . implode(", ", $this->tables);
        }else{
            return '';
        }
    }

    private function orderbys(){
        if(sizeof($this->orderby)){
            return "ORDER BY " . implode(', ', $this->orderby);
        }
        return '';
    }

    public function innerJoin($join){
        $this->joins[] = " INNER JOIN $join";
    }

    public function leftJoin($join){
        $this->joins[] = " LEFT JOIN $join";
    }



    function __toString(){

        $columns = $this->columnsString();
        $tables = $this->tablesString();
        $conditions = $this->conditionsString();
        $joins = $this->joinsString();
        $groups = $this->groupsString();
        $havings = $this->havingsString();
        $orderbys = $this->orderbys();

        return "SELECT " . implode("\n", array(
            $columns,
            $tables,
            $joins,
            $conditions,
            $groups,
            $havings,
            $orderbys
        ));
    }

} 
/**
 * Represents a stream reader from a database result
 * <example>
 *   // Get a data reader
 *   $reader = DataLatte::getReader($query);
 *  
 *   // Scan results
 *   while ($row = $reader->read())
 *       print_r($row);
 * 
 * </example>
 */
class DataReader {

    /**
     * MySQL result handle
     * 
     * @var resource
     */
    public $result = 0;

    /**
     * Creates a new DataReader from the specified MySQL result
     * 
     * @param resource $result
     */
    function __construct($result) {
        $this->result = $result;
    }

    /**
     * Advances one row in the result, and returns the row as an array.
     * Possible values for <c>$mode</c>: <c>MYSQL_ASSOC</c> | <c>MYSQL_NUM</c> | <c>MYSQL_BOTH</c>
     * 
     * @param number $mode
     * @return array
     */
    function read($mode = MYSQL_BOTH) {
        return mysql_fetch_array($this->result, $mode);
    }

    /**
     * Gets the number of rows in the result
     * 
     * @return integer
     */
    function getRows() {
        return mysql_num_rows($this->result);
    }

    /**
     * Gets the number of columns in the result
     * 
     * @return integer
     */
    function getColumns() {
        return mysql_num_fields($this->result);
    }
    
    /**
     * Gets the name of the specified field
     * 
     * @param int $field
     * @return string
     */
    function getFieldName($field){
        return mysql_field_name($this->result, $field);
    }
    
    /**
     * Gets the type of the specified field
     * 
     * @param int $field
     * @return string
     */
    function getFieldType($field){
        return mysql_field_type($this->result, $field);
    }
    
    /**
     * Gets the table where the specified field lives
     * 
     * @param int $field
     * @return string
     */
    function getFieldTable($field){
        return mysql_field_table($this->result, $field);
    }
    
    /**
     * Gets the length of the specified field
     * 
     * @param int $field
     * @return int
     */
    function getFieldLength($field){
        return mysql_field_len($this->result, $field);
    }

}
abstract class DataRecord {

    /**
     * Used by DataLatte to describe the record
     * @var type 
     */
    public $_metadata = null;

    //region Static
    /**
     * Loads the record from the database by the specified $id
     *
     * @param string $className
     * @param mixed $id
     * @return DataRecord
     * @throws Exception
     */
    public static function byAuto($className, $id = false) {

        if ($id === false) {
            $id = $className;
            $className = get_called_class();
        }

        $name = $className;
        $obj = new $name();
        $akey = $obj->getallkeys();
        $table = $obj->gettable();

        if (is_string($id) && !is_numeric($id))
            throw new SecurityException("Id is not numeric: $id");

        if (sizeof($akey) != 1)
            throw new Exception("$name has more than 1 key");

        $keyarr = array_keys($akey);
        $key = $keyarr[0];

        //echo "SELECT * FROM `$table` WHERE $key = '$id'";

        return DataLatte::oneOf($name, "SELECT * FROM `$table` WHERE $key = '$id'");
    }

    /**
     * Packs the passed array of records
     *
     * @param array $array
     * @return array
     */
    public static function packArray(array $array){
        foreach($array as $i => $record){
            if(is_array($record)){
                $array[$i] = self::packArray($record);
            }elseif($record instanceof DataRecord){
                $array[$i] = $record->pack();
            }
        }
        return $array;
    }
    //endregion

    //region Abstract
    /**
     * Gets the name of the table this record represents
     * 
     * @return string
     * @throws Exception
     */
     public static function getTable(){
         throw new Exception("Must implement");
     }

    /**
     * Gets the name of the auto incremental key
     * 
     * @return string
     */
    abstract public function getAutokey();

    /**
     * Gets an array with the keys of the table this record represents
     * 
     * @return array
     */
    abstract public function getKeys();

    /**
     * Gets an array with the fields of the table this record represents
     * 
     * @return array
     */
    abstract public function getFields();

    /**
     * Gets a value indicating if this record is inserted on the database
     * 
     * @return booelan
     */
    abstract public function isInserted();
    //endregion

    //region Private
    /**
     * Assigns the '=' sign to array key => value
     * 
     * @param array $arr
     * @return string
     */
    private function equalize($arr) {

        $r = array();
        $arr = DataLatte::escape($arr);

        foreach ($arr as $key => $value) {
            if ($value == "NULL") {
                $r[] = sprintf(" `%s` = %s", $key, $value);
            } else {
                $r[] = sprintf(" `%s` = '%s'", $key, $value);
            }
        }

        return $r;
    }

    /**
     * Creates the WHERE statement part
     * 
     * @param array $arr
     * @return string
     */
    private function createWhere($arr) {

        return implode(" AND ", $this->equalize($arr));
    }
    //endregion

    //region Protected
    /**
     * Called before inserting the record. Insert is aborted if <c>false</c> is returned 
     * 
     * @return boolean
     */
    protected function onInserting(){
        return true;
    }
    
    /**
     * Called after inserting the record
     */
    protected function onInsert(){
        
    }
    
    /**
     * Called before updating the record. Insert is aborted if <c>false</c> is returned
     * 
     * @return boolean
     */
    protected function onUpdating(){
        return true;
    }
    
    /**
     * Called after updating the record
     */
    protected function onUpdate(){
        
    }
    
    /**
     * Called before inserting or updating the record. Insert is aborted if <c>false</c> is returned
     */
    protected function onSaving(){
        
    }
    
    /**
     * Called after packing.
     */
    protected function onPacked(Array &$array){
        
    }

    /**
     * Called before packing the record
     */
    protected function onPacking(){
        
    }

    /**
     * Called after saving the record
     */
    protected function onSave(){
        
    }
    
    /**
     * Called before deleting the record. Insert is aborted if <c>false</c> is returned
     */
    protected function onDeleting(){
        
    }
    
    /**
     * Called after deleting the record
     */
    protected function onDelete(){
        
    }
    //endregion

    //region Public

    /**
     * Override to specify if record can be inserted remotely
     * @return bool
     */
    public function canInsert(){
        return true;
    }

    /**
     * Override to specify if record can be update remotely
     * @return bool
     */
    public function canUpdate(){
        return true;
    }

    /**
     * Override to specify if record can be deleted remotely
     * @return bool
     */
    public function canDelete(){
        return false;
    }

    /**
     * Deletes this record on the database.
     *
     * @param DataConnection $connection
     * @return boolean
     */
    public function delete($connection = null) {

        if (method_exists($this, 'onDeleteing')) {
            if (call_user_func(array($this, 'onDeleteing')) === FALSE) {
                return false;
            }
        }

        if (method_exists($this, 'onDeleting')) {
            if (call_user_func(array($this, 'onDeleting')) === FALSE) {
                return false;
            }
        }

        $q = $this->getDeleteQuery();


        if ($connection) {
            $connection->update($q);
        } else {
            DataLatte::update($q);
        }
        if (method_exists($this, 'onDelete')) {
            call_user_func(array($this, 'onDelete'));
        }
    }

    /**
     * Gets an array with all the fields of the table this record represents
     *
     * @return array
     */
    public function getAll() {
        return array_merge(
            $this->getautokey(), $this->getkeys(), $this->getfields());
    }

    /**
     * Gets an array with all the keys of the table this record represents
     *
     * @return array
     */
    public function getAllKeys() {
        return array_merge(
            $this->getautokey(), $this->getkeys());
    }

    /**
     * Gets the SQL <c>DELETE</c> statement for deleting the record
     *
     * @return string
     */
    public function getDeleteQuery() {
        return sprintf(
            "DELETE FROM `%s` WHERE %s", $this->gettable(), $this->createwhere($this->getallkeys())
        );
    }

    /**
     * Gets the name of the autoincrement field
     * @return string
     * @throws Exception If no autoincrement key
     */
    public function getIdField(){
        $autokey = $this->getautokey();

        if (sizeof($autokey) != 1) {
            throw new Exception(sprintf("Record %s does not have an auto-icrement key", get_class($this)));
        }

        $keys = array_keys($autokey);

        return $keys[0];
    }

    /**
     * Gets the value of the autoincrement key
     * @return mixed
     */
    public function getIdValue(){
        $field = self::getIdField($this);

        return $this->{$field};
    }

    /**
     * Gets the SQL <c>INSERT</c> statement for inserting the record
     *
     * @return string
     */
    public function getInsertQuery() {

        $all = array_merge($this->getkeys(), $this->getfields());

        $all = DataLatte::escape($all);

        return str_replace("'NULL'", "NULL", sprintf(
            "INSERT INTO `%s`(`%s`) VALUES('%s')", $this->gettable(), implode("`, `", array_keys($all)), implode("', '", array_values($all))
        ));
    }

    /**
     * Gets the SQL <c>UPDATE</c> statement for updating the record
     *
     * @param string $field Specify a field for updating a single field
     * @return string
     */
    public function getUpdateQuery($field = "") {

        if (strlen($field) == 0) {
            return sprintf(
                "UPDATE `%s` SET %s WHERE %s", $this->gettable(), implode(", ", $this->equalize(array_merge($this->getfields(), ((sizeof($this->getautokey()) ? $this->getkeys() : array()))))), $this->createwhere((sizeof($this->getautokey()) ? $this->getautokey() : $this->getallkeys()))
            );
        } else {
            return sprintf(
                "UPDATE `%s` SET `%s` = '%s' WHERE %s", $this->gettable(), $field, $this->${field}, $this->createwhere((sizeof($this->getautokey()) ? $this->getautokey() : $this->getallkeys()))
            );
        }
    }

    /**
     * Inserts this record on the database. If primary key is auto numeric, the Id will be automatically retrieved.
     *
     * @param DataConnection $connection
     * @return boolean
     */
    public function insert($connection = null) {

        $arr = $this->getautokey();
        $ak = 0;

        if (method_exists($this, 'onSaving')) {
            if (call_user_func(array($this, 'onSaving')) === FALSE) {
                return false;
            }
        }

        if (method_exists($this, 'onInserting')) {
            if (call_user_func(array($this, 'onInserting')) === FALSE) {
                return false;
            }
        }


        if (sizeof($arr)) {
            $keys = array_keys($arr);
            $ak = $keys[0];
        }

        if ($connection) {
            $connection->update($this->getinsertquery());

            if ($ak) {
                $this->{$ak} = $connection->getsingle("SELECT LAST_INSERT_ID()");
            }
        } else {
            DataLatte::update($this->getinsertquery());

            if ($ak) {
                $this->{$ak} = DataLatte::getsingle("SELECT LAST_INSERT_ID()");
            }
        }

        if (method_exists($this, 'onInsert')) {
            call_user_func(array($this, 'onInsert'));
        }

        if (method_exists($this, 'onSave')) {
            call_user_func(array($this, 'onSave'));
        }
    }

    /**
     * Packs the record for ajax transport
     */
    public function pack(){

        $this->onPacking();

        $arr = array(
            'type' => 'DataRecord',
            'recordId' => $this->getIdValue($this),
            'recordType' => get_class($this),
            //'metadata' => DataRecordMetadata::byRecord($this),
            'fields' => array_merge($this->getAllKeys(), $this->getFields()),
            'properties' => array(),
        );

        // Check others for properties from [others]
        if(isset($this->others) && is_array($this->others)){
            foreach($this->others as $key => $value){
                $arr['properties'][$key] = $value;
            }
        }

        foreach($this as $i => $value){
            if($value instanceof DataRecord){
                $arr['properties'][$i] = $value->pack();
            }
        }

        $this->onPacked($arr);

        return $arr;
    }

    /**
     * Inserts or updates this record on the database depending on the value of its primary key.
     *
     * @param DataConnection $connection
     */
    public function save($connection = null) {

        $inserted = false;

        $name = get_class($this);
        $obj = new $name();
        $akey = $obj->getautokey();
        $table = $obj->gettable();
        $x = $connection ? $connection : DataLatte::$current;

        if (!sizeof($akey)) {
            $keyarr = array_keys($this->getallkeys());
            $key = $keyarr[0];
            $inserted = $this->{$key} ? true : false;
        } else {
            $inserted = $this->isinserted();
        }

        if ($inserted) {
            $this->update($x);
        } else {
            $this->insert($x);
        }
    }

    /**
     * Updates this record on the database
     *
     * @param DataConnection $connection
     * @return boolean
     */
    public function update($connection = null) {

        if (method_exists($this, 'onSaving')) {
            if (call_user_func(array($this, 'onSaving')) === FALSE) {
                return false;
            }
        }

        if (method_exists($this, 'onUpdating')) {
            if (call_user_func(array($this, 'onUpdating')) === FALSE) {
                return false;
            }
        }

        if ($connection) {
            $connection->update($this->getupdatequery());
        } else {
            DataLatte::update($this->getupdatequery());
        }

        if (method_exists($this, 'onUpdate')) {
            call_user_func(array($this, 'onUpdate'));
        }

        if (method_exists($this, 'onSave')) {
            call_user_func(array($this, 'onSave'));
        }
    }





    

    //endregion
    
}/**
 * Utility for creating records
 * User: menendezpoo
 * Date: 9/26/13
 * Time: 8:02 PM
 */

class DataRecordFactory {

    /**
     * Dumps on the output the result of <c>getAllTablesRecordCode</c>
     * @remote
     */
    public static function dumpRecords() {

        echo self::getAllTablesRecordCode();

    }

    /**
     * Returns the PHP code for representing all database tables as a DataRecord
     *
     * @remote
     * @return string
     * @throws SecurityException
     */
    public static function getAllTablesRecordCode(){

        // Check user can make this
        if(!DataLatteManager::isLoggedIn())
            throw new SecurityException();

        $result = '';
        $reader = DataLatte::getreader("SHOW TABLES");
        $tables = array();

        while ($r = $reader->read())
            $tables[] = $r[0];

        foreach ($tables as $table)
            $result .= self::getTableRecordCode($table);

        return $result;
    }

    /**
     * Gets the PHP code for representing the specified table as a DataRecord.
     *
     * @remote
     * @param $table
     * @return string
     * @throws SecurityException
     */
    public static function getTableRecordCode($table){

        if(!DataLatteManager::isLoggedIn())
            throw new SecurityException();

        $fields = array();
        $primkey = array();
        $keys = array();
        $justfields = array();
        $reader = DataLatte::getreader("describe `$table`");
        $desc = array();
        $describer = null;
        $SPACE = " ";

        while ($r = $reader->read()) {
            $fields[] = $r[0];

            if ($r['Extra'] == "auto_increment") {
                $primkey[] = $r[0];
            } elseif ($r['Key'] == "PRI") {
                $keys[] = $r[0];
            } else {
                $justfields[] = $r[0];
            }

            $describerRow = array();


            $describer .= "//    <Column>";
            foreach ($r as $key => $value)
                if (!is_numeric($key))
                    $describer .= "<$key>$value</$key>";

            $describer .= "</Column>" . PHP_EOL;
        }


        $checks = array();

        foreach (array_merge($keys, $primkey) as $value) {
            $checks[] = sprintf('isset($this->%s)', $value);
        }

        $selects = array();

        foreach ($fields as $value) {
            $selects[] = sprintf(' "$t.%s AS \'$t.%s\'" ', $value, $value);
        }

        $code = sprintf('

/// <table-definition>
///   <name>%s</name>
%s/// </table-definition>
class __TABLE__Base extends DataRecord{

    public $%s;
    public static function' . ' all($t = "__TABLE__"){  return array( %s ); }
    public static function' . ' gettable(){ return "__TABLE__"; }
    public  function' . ' getautokey(){ return array( %s ); }
    public function' . ' getkeys(){ return array( %s ); }
    public function' . ' getfields(){ return array( %s ); }
    public function' . ' isinserted(){ return %s; }

} ', $table, $describer, implode(', $', $fields), implode(', ', $selects), implode(", ", self::makepairs($primkey)), implode(", ", self::makepairs($keys)), implode(", ", self::makepairs($justfields)), sizeof($checks) ? implode(" && ", $checks) : 1
        );

        return str_replace("__TABLE__", $table, $code);

    }

    /**
     * Private function to create SQL Sentences parts
     */
    private static function makepairs($arr) {

        $r = array();

        foreach ($arr as $value) {
            $r[] = sprintf('"%s" => $this->%s', $value, $value);
        }

        return $r;
    }

} /**
 * Created by PhpStorm.
 * User: menendezpoo
 * Date: 9/27/13
 * Time: 1:09 AM
 */

class DataRecordMetadata {

    /**
     * Default Action structure
     * @var array
     */
    private static $defaultAction = array(
        'text' => '',
        'description' => '',
        'method' => '',
        'js-call' => '',
        'js-before' => '',
        'js-after' => '',
        'params' => array(),
        'refreshes' => true,
        'return' => '',
        'confirm' => null,
        'is-visible' => true
    );

    /**
     * Default Entity structure
     * @var array
     */
    private static $defaultEntity = array(
        'title' => '',
        'name' => '',
        'relationships' => array(),
        'fields' => array(),
        'icon' => null,
        'actions' => array(),
        'listings' => array(),
        'tabs' => array(),
        'can-insert' => true,
        'can-delete' => false,
        'can-update' => true,
        'can-read' => true,
    );

    /**
     * Default Filter structure
     * @var array
     */
    private static $defaultFilter = array(
        'operators' => '</>/<=/>=/LIKE/BETWEEN',
        'custom-operators' => array(),
        'expr-a' => null,
        'expr-b' => null,
        'expr-c' => null
    );

    /**
     * Default FilterOperator structure
     * @var string
     */
    private static $defaultFilterOperator = array(
        'text' => '',
        'fields' => array(),
        'evaluator' => ''
    );

    /**
     * Default Input structure
     * @var string
     */
    private static $defaultInput = array(
        'text' => '',
        'field' => '',
        'description' => '',
        'helper' => '',
        'actions' => array(),
        'type' => 'string',
        'options' => array(),
        'format' => '',
        'fields' => array(),
        'list-visible' => false,
        'grid-visible' => true,
        'form-visible' => true,
        'grid-input-visible' => true,
        'filter' => null,
        'max-length' => 0,
        'source' => null,
        'readonly' => '',
        'mandatory' => false,
        'width' => 0,
        'height' => 0,
        'style' => '',
        'default-value' => null,
        'is-visible' => true,
        'class' => '',
    );

    /**
     * Default Listring structure
     * @var array
     */
    private static $defaultListing = array(
        'type' => '',
        'page' => 0,
        'text' => '',
        'description' => '',
        'actions' => array(),
        'pickable' => false,
        'icon' => null,
        'editable' => false,
        'insertable' => false,
        'filters' => array(),
        'available' => true,
        'order' => array(),
    );

    /**
     * Default Relationshp structure
     * @var array
     */
    private static $defaultRelationship = array(
        'title' => '',
        'tab-text' => '',
        'description' => '',
        'type' => '',
        'cardinality' => null,
        'key' => '',
        'key-foreign' => '',
        'connector' => null,
        'affect' => 'auto',
        'elements-editable' => true,
        'elements-mode' => 'grid',
        'elements-remove' => true,
        'elements-insert' => true,
        'elements-add' => true,
        'elements-swap' => true,
        'show-fields' => false,
        'is-children' => false,
        'is-parent' => false,
        'is-longlist' => false,
        'is-visible' => true,
        'icon' => null,
        'actions' => array(),
        'attributes' => array(),
        'listing' => array(),
        'listing-key' => '',
        'visible-if-empty' => true,
        'visible-if-new' => false,
    );

    /**
     * Default Tab structure
     * @var array
     */
    private static $defaultTab = array(
        'text' => '',
        'description' => '',
        'icon' => null,
        'actions' => array(),
        'renderer' => ''
    );

    /**
     * Gets the metadata of the specified DataRecord
     *
     * @param DataRecord $record
     * @return array|null|type
     */
    public static function byRecord(DataRecord $record){
        if (!$record->_metadata) {

            // Get metadata
            $metadata = $record->metadata();

            // Extend
            $metadata = self::extendEntity($metadata, $record);

            // Save
            $record->_metadata = $metadata;
        }

        return $record->_metadata;
    }

    /**
     * Checks if logged user can delete the specified record based on record's metadata
     * @param DataRecord $record
     * @param array $metadata
     * @return boolean
     */
    public static function canDelete($record) {
        $metadata = self::byRecord($record);
        return $metadata['can-delete'];
    }

    /**
     * Checks if logged user can read the specified record based on record's metadata
     * @param DataRecord $record
     * @param array $metadata
     * @return boolean
     */
    public static function canRead($record) {
        $metadata = self::byRecord($record);
        return $metadata['can-read'];
    }

    /**
     * Checks if logged user can edit the specified record based on record's metadata
     *  If no parameters are passed method will use
     * @param DataRecord $record
     * @param array $metadata
     * @return boolean
     */
    public static function canEdit($record) {
        $metadata = self::byRecord($record);
        return $metadata['can-update'];
    }

    /**
     * Checks if logged user can insert the specified record based on record's metadata
     *  If no parameters are passed method will use
     * @param DataRecord $record
     * @param array $metadata
     * @return boolean
     */
    public static function canInsert($record) {
        $metadata = self::byRecord($record);
        return $metadata['can-insert'];
    }

    /**
     * Merge the contents of two or more arrays together into the first array
     * (It works like jQuery.extend)
     * @param array Array1
     * @return array Merged array
     */
    private static function extend() {
        $args = func_get_args();
        $extended = array();
        if (is_array($args) && count($args)) {
            foreach ($args as $array) {
                if (is_array($array)) {
                    $extended = array_merge($extended, $array);
                }
            }
        }
        return $extended;
    }

    /**
     * Extends Action arrays, setting its missing default attributes.
     * @param array $action Action data
     * @return array Action with defaults established
     */
    private static function extendAction($action) {
        $action = self::extend(self::$defaultAction, $action);

        foreach ($action['params'] as $key => &$input)
            $input = self::extendInput($input, $key);

        return $action;
    }

    /**
     * Extends Entity arrays, setting its missing default attributes.
     * @param array $entity Entity data
     * @param array $record Entity data
     * @return array Entity with defaults established
     */
    private static function extendEntity($entity, $record) {

        $entity = self::extend(self::$defaultEntity, $entity);

        // Extend relationships
        foreach ($entity['relationships'] as $key => &$rel)
            $rel = self::extendRelationship($rel, $key);

        // Extend Fields
        foreach ($entity['fields'] as $key => &$input)
            $input = self::extendInput($input, $key);

        // Icon is not extended
        // Extend Actions
        foreach ($entity['actions'] as &$action)
            $action = self::extendAction($action);

        // Extend Lists
        foreach ($entity['listings'] as &$list)
            $list = self::extendListing($list, get_class($record));

        // Extend Tabs
        foreach ($entity['tabs'] as &$tab)
            $tab = self::extendTab($tab);

        return $entity;
    }

    /**
     * Extends Filter arrays, setting its missing default attributes.
     * @param array $filter Filter data
     * @return array Filter with defaults established
     */
    private static function extendFilter($filter) {
        $filter = self::extend(self::$defaultFilter, $filter);

        // Extend filter
        foreach ($filter['custom-operators'] as &$operator)
            $operator = self::extendFilterOperator($operator);

        return $filter;
    }

    /**
     * Extends FilterOperator arrays, setting its missing default attributes.
     * @param array $operator FilterOperator data
     * @return array FilterOperator with defaults established
     */
    private static function extendFilterOperator($operator) {
        $operator = self::extend(self::$defaultFilterOperator, $operator);

        // Extend filter
        foreach ($operator['fields'] as $key => &$input)
            $input = self::extendInput($input, $key);

        return $operator;
    }

    /**
     * Extends Input arrays, setting its missing default attributes.
     * @param array $input Input data
     * @param array $inputKey Input data
     * @return array Input with defaults established
     */
    private static function extendInput($input, $inputKey) {

        $input = self::extend(self::$defaultInput, $input);

        // Extend Actions
        foreach ($input['actions'] as &$action)
            $action = self::extendAction($action);

        // Extend fields
        foreach ($input['fields'] as $key => &$sinput)
            $sinput = self::extendInput($sinput, $key);

        if (!$input['field']) {
            $input['field'] = $inputKey;
        }

        // Extend filter (if present)
        if ($input['filter'])
            $input['filter'] = self::extendFilter($input['filter']);

        return $input;
    }

    /**
     * Extends List arrays, setting its missing default attributes.
     * @param array $list List data
     * @param array $type List data
     * @return array List with defaults established
     */
    private static function extendListing($list, $type) {

        if (!$type)
            die("No type!");

        $list = self::extend(self::$defaultListing, $list);

        $list['type'] = $type;


        // Extend actions
        foreach ($list['actions'] as &$action)
            $action = self::extendAction($action);

        return $list;
    }

    /**
     * Extends Relationship arrays, setting its missing default attributes.
     * @param array $relationship Relationship data
     * @param array $relationshipKey Relationship data
     * @return array Relationship with defaults established
     */
    private static function extendRelationship($relationship, $relationshipKey) {
        $relationship = self::extend(self::$defaultRelationship, $relationship);

        // Extend actions
        foreach ($relationship['actions'] as &$action)
            $action = self::extendAction($action);

        // Extend attributes
        foreach ($relationship['attributes'] as $key => &$input)
            $action = self::extendInput($input, $key);

        if (!$relationship['key']) {
            $relationship['key'] = $relationshipKey;
        }

        return $relationship;
    }

    /**
     * Extends Tab arrays, setting its missing default attributes.
     * @param array $tab Tab data
     * @return array Tab with defaults established
     */
    private static function extendTab($tab) {
        $tab = self::extend(self::$defaultTab, $tab);

        // Extend actions
        foreach ($tab['actions'] as &$action)
            $action = self::extendAction($action);

        return $tab;
    }

} 
/**
 * Represents a set of data
 */
class DataSet{
    
    /**
     * Information about columns
     * 
     * @var array
     */
    public $fields;
    
    /**
     * Row data
     * 
     * @var array
     */
    public $rows;
    
    /**
     * Number of columns in result
     * @var int
     */
    public $columns;
    
    /**
     * Creates the DataSet from the specified <c>DataReader</c>
     */
    public function __construct(DataReader $reader) {
        
        if($reader){
            while( $row = $reader->read(MYSQL_NUM) ){
                $this->rows[] = $row;
            }
            
            $this->columns = $reader->getColumns();
            
            for($i = 0; $i < $this->columns; $i++){
                $this->fields[] = array(
                    'name' => $reader->getFieldName($i),
                    'type' => $reader->getFieldType($i),
                    'length' => $reader->getFieldLength($i),
                    'table' => $reader->getFieldTable($i)
                );
            }
        }
        
    }
    
    /**
     * Creates a DataSet from the result of the specified SQL query
     * @param string $query
     */
    public static function fromSQL($query){
        return new DataSet(DataLatte::getReader($query));
    }
    
}
/**
 * Deprecated
 */
interface iRecordGlue {

    /**
     * Gets the name of the stickers
     * 
     * @param array $arr
     * @return array
     */
    public function getStickers($arr);
}