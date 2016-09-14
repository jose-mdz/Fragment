<?php

 /**
  * Represents a connection to the server
  * 
  * Usage
  * <example>
  *     // Initialize Connection
  *     $c = new DataConnection("user", "mypassword", "localhost:3306", true);
  *     
  *     // Test connection by getting date from server
  *     echo $c->getSingle("SELECT NOW()");
  * </example>
  * 
  */
  class DataConnection {

    /**
         * Holds the pointer to the server connection
         * @var resource 
         */
	public $connection = 0;
        
    /**
     *
     * @var type
     */
    public $debug = false;
	
    /**
         * Creates a connection to a database using the specified parameters.
         * 
         * @param string $user
         * @param string $pass
         * @param string $host May include a port by attaching it i.e. "localhost:9999"
         * @param string $db
         * @param boolean $debug
         * @throws Exception If connection can't be established
         */
	function __construct($user, $pass, $host, $db, $debug){
            global $strings;

            // Save error level
            $level = error_reporting();
            
            // Deactivate errors
            error_reporting(0);

            // Connect to server
            $this->connection = mysql_connect($host, $user, $pass);

            if(!$this->connection){
                error_reporting($level); // Reset error level
                throw new Exception(sprintf($strings['cantConnectToServer'], $host, $user));
            }

            if(!mysql_select_db($db)){
                error_reporting($level); // Reset error level
                throw new Exception(sprintf($strings['cantSelectDbS'], $db));
            }

            error_reporting($level);
		
	}
	
    /**
         * Closes the connection.
         */
	function __destruct(){
		$this->close();
	}
        
    /**
     * Gets the number of affected rows of last query
     *
     * @return integer
     */
    function affectedRows(){
            return mysql_affected_rows($this->connection);
        }
	
    /**
     * Creates the connection by passing an instance of the specified object.
     * A class named <c>ConnectionParameters</c> must be declared before calling this method.
     *
     * @return DataConnection
     */
    public static function fromParametersClass(){
            
            $parameters = new ConnectionParameters();
            $user = $parameters->user;
            $pass = $parameters->pass;
            $host = $parameters->host;
            $db = $parameters->db;
            $debug = $parameters::$debug;
            
            return new DataConnection($user, $pass, $host, $db, $debug);
        }
        
    /**
         * Returns the query if debug mode, something else if not
         * 
         * @param type $query
         * @return type 
         */
	private function queryornot($query){
        return $query;
		return $this->debug ? $query : "(Hidden SQL)";
	}
        
    /**
     * Gets the last error description
     *
     * @return string
     */
    public function getErrorDescription(){
            return mysql_error();
        }
	
    /**
         * Executes a SELECT statement that returns a table of data
         * 
         * @param string $query
         * @return DataReader
         * @throws Exception If query falis
         */
	public function getReader($query){
		global $strings;

		$result = $this->query($query);
		
		if(!$result)
			throw new Exception(sprintf($strings['errorOnQueryS'], $this->getErrorDescription(), $this->queryornot($query)));
		
		return new DataReader($result);
	}
	
	/**
         * Executes a SELECT statement and gets the first field of the first row of result
         * 
         * @param string $query
         * @return mixed
         * @throws Exception If query falis
         */
	public function getSingle($query){
		global $strings;

		$result = $this->query($query);
		
		if(!$result)
			throw new Exception(sprintf($strings['errorOnQueryS'], $this->getErrorDescription(), $this->queryornot($query)));
		
		$row = mysql_fetch_row($result);
		
		return $row[0];
	}
        
    /**
     * Executes a query on database and returns the resource pointer
     *
     * @param string $query
     * @return resource
     */
    public function query($query){
            return mysql_query($query, $this->connection);
    }
	
        /**
         * Executes an UPDATE query
         * 
         * @param string $query
         * @return number
         * @throws Exception If query fails
         */
	public function update($query){
		global $strings;

		$result = $this->query($query);
		
		if(!$result) {
            throw new Exception(sprintf($strings['errorOnQueryS'], $this->getErrorDescription(), $this->queryornot($query)));
        }
		return $this->affectedRows();
	}
	
        /**
         * Closes the connection with the server
         */
	public function close(){
		mysql_close($this->connection);
	}
	
 }/**
 * Main bridge for accessing data. You may use this object anywhere to get access to database querying.
 * 
 * This class loads automatically the configuration of the DataLatte installed on server. 
 * To check the configuration of DataLatte access the DataLatteManager through http://host/datalatte on your server.
 * 
 * Usage:
 * <example>
 *     // (1) SQL Querying
 *     //     Use DataLatte as a wrapper for accessing and querying data
 * 
 *     // Echo the current timestamp
 *     echo DataLatte::getSingle("SELECT NOW()");
 * 
 *     // Echo a set of data
 *     print_r(DataLatte::getCache("SHOW TABLES"));
 * 
 *     // (2) Object recognition
 *     //     Loads an object by analyzing its structrue
 *     //     A class named Product must be declared and implement DataRecord
 *     $products = DataLatte::oneOf('Product', "SELECT * FROM product WHERE id = 1");
 *     
 *     // Echo product list
 *     echo $product->name;
 * 
 *     // (3) Multiple Object recognition
 *     //     Get an array of objects
 *     //     A class named Product must be declared and implement DataRecord
 *     $products = DataLatte::arrayOf('Product', "SELECT * FROM product");
 *     
 *     foreach($products as $product){
 *         // Echo product list
 *         echo $product->name;
 *     }
 * </example>
 */
 class DataLatte {

    /**
     * Current connection. Its value is set when <c>init()</c> method is called.
     * @var DataConnection 
     */
    public static $current = NULL;

     /**
      * Global flag that allows remote connections to insert records
      * @var bool
      */
     public static $globalCanInsert = false;

     /**
      * Global flag that allows remote connections to update records
      * @var bool
      */
     public static $globalCanUpdate = false;

     /**
      * Global flag that allows remote connections to delete records
      * @var bool
      */
     public static $globalCanDelete = false;

    /**
     * Throws an Exception. This class should not be instantiated.
     */
    private function __construct() {
        throw new Exception();
    }

    /**
     * Initializes the connection to the database.
     * @throws Exception if call to <c>init()</c> method is called.
     */
    public static function init() {
        global $strings;

        // Check if already initialized
        if (self::$current !== NULL)
            return;

        $xpath = DATALATTE_FILES . '/connection.php';

        // Check if connection in /_files exists
        if (!DataLatte::canInit()) {
            throw new Exception($strings['datalatteInitFailed']);
        }

        // Create current object
        self::$current = DataConnection::fromParametersClass();
    }

    /**
     * Returns a boolean indicating if DataLatte can be used, by checking that configuration is already set up.
     * 
     * @returns boolean
     */
    public static function canInit() {
        $xpath = DATALATTE_FILES . '/connection.php';
        $result = false;


        if (!class_exists('ConnectionParameters', false)) {

            if (file_exists($xpath)) {
                // Include connection file
                try {


                    ob_start();         /// Include connection data file.
                    include $xpath;     /// Please NOTE that output buffering
                    ob_end_clean();     /// is used for security reasons.


                    // Check if connection added successfully
                    if (!class_exists('ConnectionParameters')) {


                    } else {
                        try {
                            // Test connection
                            $d = DataConnection::fromParametersClass();
                            $result = true;
                        } catch (Exception $e) {

                            echo $e;
                            $result = false;
                        }
                    }
                } catch (Exception $e) {
                    return false;
                }
            } else {
                $result = class_exists($result);
            }
        } else {
            $result = true;
        }

        return $result;
    }

    /**
     * Returns a comma separated list of fields on records passed as parameters.
     * @variable-params
     * @return string
     */
    public static function all() {
        $args = func_get_args();
        $r = array();
        foreach ($args as $arg) {
            $obj = new $arg();
            if ($obj) {
                $r[] = implode(", ", call_user_func(array($arg, 'all')));
            }
        }
        return implode(", ", $r);
    }

     /**
      * Makes an associative array of the specified DataRecord array,
      * using the records' id as the id of the associative array
      *
      * @param array $array
      * @param string $property
      * @return array
      */
     public static function associativeArray(array $array, $property = null){

         $result = array();

         foreach($array as $r){
             if($property){
                 $result[$r->{$property}] = $r;
             }else{
                 $result[$r->getIdValue()] = $r;
             }
         }
         return $result;
     }

    /**
     * Gets a value indicating if the current connection is running in debug mode
     * 
     * @returns boolean
     */
    public static function debugMode() {
        self::init();
        return self::$current->debug;
    }

    /**
     * Queries the database and returns the entire result as an array of arrays
     * 
     * @returns array
     */
    public static function getCache($query) {

        $a = array();
        $reader = self::getreader($query);

        while ($r = $reader->read())
            $a[] = $r;

        return $a;
    }

    /**
     * Executes a SELECT statement on the current connection that returns a table of data.
     * 
     * @param string $query
     * @returns DataReader
     */
    public static function getReader($query) {
        self::init();
        return self::$current->getreader($query);
    }

    /**
     * Executes a SELECT statement on the current connection and gets the first field of the first row of result
     * 
     * @param string $query
     * @returns mixed
     */
    public static function getSingle($query) {
        self::init();
        return self::$current->getsingle($query);
    }

    /**
     * Executes an UPDATE query on the current connection
     * 
     * @param string $query
     * @returns number
     */
    public static function update($query) {
        self::init();
        return self::$current->update($query);
    }

    /**
     * Closes the current connection with the server
     */
    public static function close() {
        init();
        return self::$current->close();
    }

    /**
     * Converts a MySQL date-time string to a timestamp (used in PHP)
     * 
     * @param string $datetime MySQL formatted date-time 'yyyy-mm-dd'
     * @returns integer
     */
    public static function timestamp($datetime = null) {
        if (!$datetime)
            $datetime = DataLatte::datetime();

        $parts = explode(' ', $datetime);

        if (strpos($parts[0], "-") === false) {
            // Just time (without a date)
            $timebits = explode(':', $parts[0]);

            if (3 != count($timebits))
                return -1;

            return mktime($timebits[0], $timebits[1], $timebits[2]);
        }else {

            // Treat as datetime or date
            $datebits = explode('-', $parts[0]);
            if (3 != count($datebits))
                return -1;
            if (isset($parts[1])) {
                $timebits = explode(':', $parts[1]);
                if (3 != count($timebits))
                    return -1;
                return mktime($timebits[0], $timebits[1], $timebits[2], $datebits[1], $datebits[2], $datebits[0]);
            }
            return mktime(0, 0, 0, $datebits[1], $datebits[2], $datebits[0]);
        }
    }

    /**
     * Converts a timestamp to a MySQL formatted date-time.
     * If no <c>$timestamp</c> is provided, current time will be used.
     * 
     * @param integer $timestamp
     * @returns string In the format: yyyy-mm-dd
     */
    static function date($timestamp = NULL) {
        if ($timestamp === NULL)
            $timestamp = time();
        return date("Y-m-d", $timestamp);
    }

    /**
     * Converts a Unix Timestamp to a MySQL formatted date-time.
     * If no <c>$timestamp</c> is provided, current time will be used.
     * 
     * @param integer $timestamp
     * @returns string
     */
    static function dateTime($timestamp = NULL) {
        if ($timestamp === NULL)
            $timestamp = time();
        return date("Y-m-d H:i:s", $timestamp);
    }
    
    /**
     * Similar to <c>arrayOf</c>, but it converts the query into a paginated query.
     * First page is 1. Result contains the following variables:
     * - <c>records</c> Actual array of records
     * - <c>recordcount</c> Total of records in query
     * - <c>page</c> Retrieved page
     * - <c>pages</c> Total of pages in query
     * 
     * @param string $class Name of the class of the object to instantiate
     * @param string $query SQL Sentence to retrieve objects data
     * @param int $page
     * @param int $pageSize
     * @return array
     * @throws Exception
     */
    public static function pageOf($class, $query, $page, $pageSize = 50) {
        
        // Check for SQL_CALC_FOUND_ROWS flag
        if(strpos($query, 'SQL_CALC_FOUND_ROWS') === false){
            $query = preg_replace("/SELECT/", "SELECT SQL_CALC_FOUND_ROWS ", $query, 1);
            
            if(strpos($query, 'SQL_CALC_FOUND_ROWS') === false){
                throw new Exception("DataLatte::pageOf() Can't insert SQL_CALC_FOUND_ROWS into query. SELECT statement must be followed by a space.");
            }
        }
        
        // Compute offset for query
        $offset = ($page - 1) * $pageSize;
        
        // Append pagination to query
        $query .= PHP_EOL . "LIMIT $pageSize OFFSET $offset";

        // Retrieve records
        $records = self::arrayOf($class, $query);

        // Retrieve count of records in query
        $count = DataLatte::getSingle("SELECT FOUND_ROWS()");


        // Compute total of pages
        $pageCount = ceil($count / $pageSize);

        return array(
            'records' => $records,
            'recordcount' => $count,
            'page'  => $page,
            'pages' => $pageCount,
            );
        
        
    }

    /**
     * Recognizes the fields in the array and applies its values to the correspondant record fields.
     * 
     * @param any $array
     * @param DataRecord $record
     * @oaram string $alias
     */
    public static function recognize($array, $record, $alias = '') {

        foreach ($array as $key => $value) {

            $value = is_array($value) ? $value : stripslashes($value);
            $key = str_replace("__", ".", $key);
            $pos = strpos($key, ".");

            // If alias provided
            if($alias){

                // If key does not start with alias
                if(strpos($key, $alias . '.') !== 0){
                    if(!is_numeric($key))
                    continue; // bye
                }
            }

            if ($pos === FALSE) {
                $prop = $key;
            } elseif (!$alias && substr($key, 0, $pos) != $record->gettable()) {
                continue;
            } else {
                $prop = substr($key, (strlen($key) - $pos - 1) * -1);
            }

            if (property_exists($record, $prop)) {
                $record->{$prop} = $value;

            } elseif (!is_numeric($prop)) {

                if (!isset($record->others)){
                    $record->others = array();
                }

                $record->others[$prop] = $value;
            }
        }


    }

    /**
     * Queries the database and maps the result to an object
     * of the specified class name.
     * 
     * @param string $classname  Name of the class of the object to create
     * @param string $query SQL sentence to retieve object values
     * 
     * @returns object
     */
    public static function oneOf($classname, $query) {
        $arr = self::arrayOf($classname, $query);
        
        if(is_array($arr) && sizeof($arr) > 0)
            return $arr[0];
        
        return null;
    }

    /**
     * Queries the database and maps the result to an array of objects of the specified class name.
     * <c>$name</c> May specify the class or a comma separated list of classes, which will be set as properties of the objects in array.
     * The term <c>#COLUMNS</c> may be used to specify all columns of query.
     * 
     * @param string $class Name of the class of the object to instantiate. 
     * @param string $query SQL Sentence to retrieve objects data
     * @return array
     */
    public static function arrayOf($class, $query) {
        
        $result = array();
        $classes = explode(",", $class);
        $aliases = array();
        
        // Trim class names
        foreach($classes as $key => $class){
            $class = trim($class);

            if(strpos($class, ' ') !== false){
                $parts = explode(' ', $class);
                $class = $parts[0];
                $aliases[$key] = $parts[1];
            }

            $classes[$key] = trim($class);
        }


        // Expand column names
        if(strpos($query, "#COLUMNS") !== false){
            $columns = array();
            foreach($classes as $i => $class){
                $columns = array_merge($columns, $class::all( isset($aliases[$i]) ? $aliases[$i] : $class::gettable() ));
            }
            $query = str_replace("#COLUMNS", implode(", ", $columns), $query);
        }
        
        $arr = self::getcache($query);

        foreach ($arr as $row) {
            $owner = NULL;

            foreach ($classes as $key => $class) {
                $class = trim($class);
                $obj = new $class();
                self::recognize($row, $obj, isset($aliases[$key]) ? $aliases[$key] : null );

                if (!$owner) {
                    $owner = $obj;
                } else {
                    $owner->{( isset($aliases[$key]) ? $aliases[$key] : strtolower($class) )} = $obj;
                }
            }

            $result[] = $owner;
        }

        return $result;
    }

    /**
     * Escapes the specified value or values, necessary process to ensure application security.
     * 
     * @param array|string $array
     */
    public static function escape($array) {
        self::init();
        if (is_array($array)) {
            foreach ($array as $key => $value) {
                $array[$key] = DataLatte::escape($value);
            }
            return $array;
        } elseif(!is_object($array)) {
            return mysql_real_escape_string($array);
        } else {
            return $array;
        }
    }

}
/**
 * Process a request to the server.
 * 
 * Usage
 * <example>
 *  (new DataLatteRequest());
 * </example>
 */
class DataLatteRequest {
    
    /**
     * Creates the request handling and processes it
     */
    public function __construct() {

        LatteModule::loadAutoLoads();

        if(isset($_POST['calls'])){
            self::processAjaxMessage($_POST['calls']);
        }else if(isset($_GET['calls'])){
            self::processAjaxMessage($_GET['calls']);
        }else{
            die("No calls specified");
        }
        
    }

    
    /**
     * Processes the "ajax-message" action.
     */
    private static function processAjaxMessage($calls_raw) {
        
        header("Content-Type: application/javascript");

        $response = array();

        

        // Parse calls
        $calls = json_decode($calls_raw, true);

        // Check calls is an array
        if(!is_array($calls)){
            die("Calls is not an array: $calls_raw");
        }
        
       

        // Execute each call
        foreach($calls as $calldata){

            $call = new DataLatteCall();

            $call->moduleName = $calldata['moduleName'];

            $call->className = $calldata['className'];

            $call->method = $calldata['method'];

            if(isset($calldata['params'])){
                $call->params = $calldata['params'];
            }

            if(isset($calldata['id'])){
                $call->id = $calldata['id'];
            }


            $response[] = $call->execute()->getEncoded();

        }

        echo json_encode($response);
    }

}

/**
 * Represents an HTML document
 */
class Document {

    /**
     * The document's &lt;!DOCTYPE&gt; tag
     * 
     * @var Tag
     */
    public $doctype;
    
    /**
     * The document's &lt;html&gt; tag
     * 
     * @var Tag
     */
    public $html;
    
    /**
     * The document's &lt;head&gt; tag
     * 
     * @var Tag
     */
    public $head;
    
    /**
     * The document's &lt;title&gt; tag
     * 
     * @var Tag
     */
    public $title;
    
    /**
     * The document's &lt;body&gt; tag
     * 
     * @var Tag
     */
    public $body;
    
    /**
     * Function to call when rendering document
     * 
     * @var function
     */
    public $onRender;
    
    /**
     * If <c>true</c>, document will be rendered to output before deallocated from memory.
     * 
     * @var boolean
     */
    public $outputRender;

    /**
     * If set to true, will add Latte module tags when rendering
     *
     * @var boolean
     */
    public $addLatteTags;

    /**
     * Creates the document. Optionally speifies if document should be rendered to output when deallocated from memory.
     * 
     * @param boolean $output
     */
    function __construct($output = false, $addLatteTags = false) {

        // Create basic tags
        $this->doctype = new Tag("!doctype");
        $this->doctype->html = NULL;
        $this->html = tag("html");
        $this->head = tag("head")->addTo($this->html);
        $this->title = tag("title")->addTo($this->head)->text("New Document");
        $this->body = tag("body")->addTo($this->html);

        //Set content type
        $contentType = tag("meta")
                ->addTo($this->head)
                ->attr("http-equiv", "Content-Type")
                ->attr("content", "text/html; charset=UTF-8");

        // Make globals available
        $GLOBALS['body'] = $this->body;
        $GLOBALS['head'] = $this->head;

        // Initialize events
        $this->onRender = array();

        // Flag to indicate if document goes to output
        $this->outputRender = $output;

        // Flag to indicate if document should add latte tags
        $this->addLatteTags = $addLatteTags;
    }

    /**
     * If <c>outputRender</c>, renders the document to the output
     */
    function __destruct() {
        if ($this->outputRender) {
            $this->render();
        }
    }

    /**
     * Renders the document
     * 
     * @return string
     */
    function __toString() {
        return $this->render();
    }

    /**
     * Renders the document to the output or returns it as a <c>string</c>
     * 
     * @param boolean $return
     * @return string
     */
    public function render($return = false) {

        if($this->addLatteTags){
            /// Add latte tags
            foreach(LatteModule::$loadedModules as $module){
                $this->head->add($module->getTags());

                if($module->isMain){
                    $main = isset($module->metadata['ua-main']) ? $module->metadata['ua-main'] : "latte.Main";

                    // Loader module
                    $this->addScript(" window.addEventListener('load', function(){ new $main() });");
                }
            }


        }

        foreach ($this->onRender as $function) {
            if (is_callable($function)) {
                $function($this);
            } else {
                $this->body->add($function);
            }
        }

        if ($this->outputRender && !$return) {
            echo $this->doctype->render();
            echo $this->html->render();
        } else {
            return $this->doctype->render() . $this->html->render();
        }
    }

    /**
     * Adds Google Analytics 'pageview
     * @param $uaid
     */
    public function addGoogleAnalyticsPageView($uaid, $property){
        $this->addScript("
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', '$uaid', '$property');
            ga('send', 'pageview');
        ");
    }

    /**
     * Adds JavaScript code to the head of the document
     * 
     * @param string $jsCode
     * @param bool $minify Minifies the script (Removes tabs, line feeds and excesive white spaces)
     * @return Tag
     */
    public function addScript($jsCode, $minify = true) {

        $jsCode = str_replace("\r", "", $jsCode);
        $jsCode = str_replace("\n", "", $jsCode);
        $jsCode = str_replace("\t", "", $jsCode);
        $jsCode = preg_replace('/\s\s+/', ' ', $jsCode);

        return tag("script")
                ->attr("type", "text/javascript")
                //->text("\r\n<!-- \r\n $jsCode \r\n//-->\r\n")
                ->text("\r\n $jsCode \r\n")
                ->addTo($this->body);
    }

    /**
     * Adds CSS code to the head of the document
     * 
     * @param string $style
     * @return Tag
     */
    public function addStyle($style) {
        $style = str_replace("\r", "", $style);
        $style = str_replace("\n", "", $style);
        $style = str_replace("\t", "", $style);
        $style = preg_replace('/\s\s+/', ' ', $style);
        
        return tag("style")
                ->attr("type", "text/css")
                ->text("\r\n $style \r\n")
                ->addTo($this->head);
    }

    /**
     * Adds a CSS stylesheet to the document
     * 
     * @param string $url
     * @return Tag
     */
    public function addCss($url) {
        return tag("link")
                ->attr("rel", "stylesheet")
                ->attr("href", $url)
                ->addTo($this->head);
    }

    /**
     * Adds a JavaScript file to the document
     * 
     * @param string $url
     * @return Tag
     */
    public function addJs($url) {
        return tag("script")
                ->attr("type", "text/javascript")
                ->attr("src", $url)
                ->addTo($this->head);
    }

    /**
     * Adds a handler to the onRender event
     * 
     * @param function $function
     */
    function onRender($function) {
        $this->onRender[] = $function;
    }

}
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 5/5/16
 * Time: 11:01
 */

class LatteDocument extends Document{

    function __construct($title = null){
        parent::__construct(true, true);

        if($title){
            $this->title->text($title);
        }
    }

}
class LatteModule {

    //region Constants
    /**
     * Name of the system core module
     */
    const SYSMODULE_CORE = '_core';
    
    /**
     * Name of the main app module.
     */
    const SYSMODULE_APP = '_app';
    
    /**
     * Name of system module of DataLatte manager
     */
    const SYSMODULE_MANAGER = '_manager';
    

    /**
     * Path (relative to module path) of directory where TypeScript code is located
     */
    const PATH_TS = 'ts';
    
    /**
     * Path (relative to module path)  of directory where language strings are located
     */
    const PATH_LANG = 'lang';
    
    /**
     * Path (relative to module path)  of directory where PHP classes are located
     */
    const PATH_PHP = 'php';
    
    /**
     * Path (relative to module path)  of directory where support files are located
     */
    const PATH_SUPPORT = 'support';
    
    /**
     * Path (relative to module path)  of directory where plugins are located
     */
    const PATH_PLUGINS = 'plugins';
    
    /**
     * Path (relative to module path)  of file where module initialization is located
     */
    const PATH_INIT = 'init.php';
    
    /**
     * Path (relative to datalatte-files) 
     */
    const PATH_RELEASES = 'releases';
    //endregion

    //region Static

    /**
     * Holds instances of loaded modules
     *
     * @var array
     */
    public static $loadedModules = array();

    /**
     * Returns the loaded instance of the module of the specified name.
     * If it is not yet loaded, loads it into memory
     * @param $name
     * @return LatteModule
     */
    public static function byName($name){

        foreach(self::$loadedModules as $module){
            if($module->name == $name){
                return $module;
            }
        }

        $module = new LatteModule($name);
        $module->load();

        return $module;
    }

    /**
     * Returns a value indicating if the specified module is loaded
     *
     * @param $name
     * @return bool
     */
    public static function isLoaded($name){
        // Check on loaded modules
        foreach(LatteModule::$loadedModules as $module){

            if($module->name == $name) return true;
        }

        return false;
    }

    /**
     * Loads the modules marked as Auto-Load, by using $this->addToAutoload
     */
    public static function loadAutoLoads(){
        $autoloads = array();

        if(isset($_SESSION['latte-module-autoload'])){
            $autoloads = explode('|', $_SESSION['latte-module-autoload']);
        }

        foreach ($autoloads as $module){
            if(!LatteModule::isLoaded($module)){
                LatteModule::memoryLoad($module)->loadConnection();
            }
        }
    }

    /**
     * Loads the specified module as the main module
     * @param $moduleName
     * @param string $lang
     * @param bool $loadConnection
     * @return LatteModule
     */
    public static function loadMain($moduleName, $lang = null, $loadConnection = true){

        // Create the module
        $app = new LatteModule($moduleName);

        // Load the language
        $app->load($lang);

        // Load the connection if needed
        if($loadConnection){
            $app->loadConnection();
        }

        $app->isMain = true;

        $app->addToAutoload(true);

        return $app;

    }

    /**
     * Loads the module and returns its tags for including in Document
     *
     * @param $moduleName
     * @return array
     */
    public static function tagsOf($moduleName, $lang = null){
        $module = new LatteModule($moduleName);
        $module->load($lang);
        return $module->getTags();
    }

    /**
     * Loads the module and its connection and returns is tags for including in Document
     *
     * @param $moduleName
     * @return array
     */
    public static function tagsAndConnectionOf($moduleName){
        $module = new LatteModule($moduleName);
        $module->load();
        $module->loadConnection();
        return $module->getTags();
    }

    /**
     * Loads the specified module into memory
     * @param $moduleName
     * @param null $lang
     * @return LatteModule
     */
    public static function memoryLoad($moduleName, $lang = null){

        // If module already loaded, just load language
        if(LatteModule::isLoaded($moduleName)){

            $m =  LatteModule::$loadedModules[$moduleName];

            // Load language if specified
            if($lang){
                $m->loadLanguage($lang);
            }
            return $m;
        }else{

            // Load Module
            $module = new LatteModule($moduleName);
            $module->load($lang);
            return $module;
        }
    }

    //endregion
 
    //region Public Fields

    /**
     * Metadata of module
     * @var array
     */
    public $metadata = array();

    /**
     * Name of module
     * @var string
     */
    public $name;
    
    /**
     * Path of module
     * @var string
     */
    public $path;
    
    /**
     * Path of module's classes folder
     * @var string
     */
    public $pathPhp;

    /**
     * Path of module's lang folder
     * @var string
     */
    public $pathLang;

    /**
     * Path of module's support folder
     * @var string
     */
    public $pathSupport;

    /**
     * Loaded language of the module
     *
     * @var string
     */
    public $lang;

    /**
     * Flag indicating if the module is loaded as main module
     *
     * @var boolean
     */
    public $isMain;

    /**
     * Flag to indicate if a module is a release version (PHP will be loaded from release)
     */
    public $isRelease;

    //endregion

    //region Ctor
    /**
     * Creates a module information class from the specified module name
     * 
     * @param type $name
     * @throws exception
     */
    public function __construct($name){

        $this->name = $name;

        // Check if is release
        $releasePath = String::combinePath(DATALATTE_MODULES_RELEASE, $name);
        $releasePhp = String::combinePath($releasePath, "$name.php");

//        echo "[$releasePhp]";

        if(file_exists($releasePhp)){
//            echo "[YES EXIST]";
            $this->isRelease = true;
            $this->path = $releasePath;

            $this->pathPhp = $this->path;
            $this->pathLang = $this->path;
            $this->pathSupport = String::combinePath($this->path, self::PATH_SUPPORT);

        }else{
//            echo "[NO EXIST]";

            $this->path = $this->path = String::combinePath(DATALATTE_MODULES, $name);

            if(!is_dir($this->path)){
                throw new ErrorException("Directory -$name- does not exist in modules directory");
            }

            $this->pathPhp = String::combinePath($this->path, self::PATH_PHP);
            $this->pathLang = String::combinePath($this->path, self::PATH_LANG);
            $this->pathSupport = String::combinePath($this->path, self::PATH_SUPPORT);

        }

        
    }
    //endregion

    //region  Methods

    /**
     * Returns an array with all strings of all languages
     * @return array
     */
    private function createStringsArray(){
        
        $filesPath = String::combinePath($this->path, self::PATH_LANG);
        $response = array();

        if(!file_exists($filesPath)) {
            return $response;
        }

        $files = LatteReflection::getFileList($filesPath, 'txt');

        foreach($files as $file){
            
            // File path
            $path = String::combinePath($filesPath, $file);
            
            // Get lang
            $lang =  basename($file, '.txt');

            // Scan file
            foreach(file($path) as $s){
                $parts = explode(" ", $s);
                $name = $parts[0]; 
                unset($parts[0]);
                $str = str_replace('"', '\\"', trim(implode(" ", $parts)));
                
                $response[$lang][$name] = $str;
                
            }
        }
        
        return $response;
    }

    /**
     * Adds the module to the autoload list of user
     */
    public function addToAutoload($resetAutoloads = false){
        $autoloads = array();

        if($resetAutoloads){
            unset($_SESSION['latte-module-autoload']);
        }

        if(isset($_SESSION['latte-module-autoload'])){
            $autoloads = explode('|', $_SESSION['latte-module-autoload']);
        }

        if(!in_array($this->name, $autoloads)){
            $autoloads[] = $this->name;
        }

        $_SESSION['latte-module-autoload'] = implode('|', $autoloads);
    }
    
    /**
     * Gets the live css of module
     */
    public function getCss(){

        $uapath = String::combinePath($this->path, self::PATH_UA);
        $tspath = String::combinePath(String::combinePath($this->path, self::PATH_SUPPORT), $this->name . '.css');

        if(file_exists($uapath)){
            return DataLatteUa::getFolderCss($uapath);

        }elseif(file_exists($tspath)){
            return file_get_contents($tspath);

        }else{
            return '';
        }

    }

    /**
     * Gets the disk path of the specified version.
     * Version may be <c>latest</c>, <c>development</c> or a version number (e.g. '0.1')
     *
     * @param string $version
     * @return string
     */
    public function getPath($version = 'latest'){

        // Paths
        $releasesPath = String::combinePath(DATALATTE_FILES, self::PATH_RELEASES);
        $moduleReleasesPath = String::combinePath($releasesPath, $this->name);

        if($version == 'development'){
            return $this->path;

        }elseif($version == 'latest'){
            return String::combinePath($moduleReleasesPath, $this->getLatestVersion());

        }else{
            return String::combinePath($moduleReleasesPath, $version);
        }

    }

    /**
     * Gets the live css of module
     */
    public function getJs(){

        $uapath = String::combinePath($this->path, self::PATH_UA);
        $tspath = String::combinePath(String::combinePath($this->path, self::PATH_SUPPORT), $this->name . '.js');

        if(file_exists($uapath)){
            return DataLatteUa::getFolderJs($uapath);

        }elseif(file_exists($tspath)){
            return file_get_contents($tspath);

        }else{
            return '';
        }


        return DataLatteUa::getFolderJs(String::combinePath($this->path, self::PATH_UA));
    }

    /**
     * Gets the live css of module
     */
    public function getJsStrings(){
        return $this->createStringsFiles(null, 'js');
    }

    /**
     * Gets the tags for including the module in the document
     *
     * @param string $urlPrefix
     * @return array
     */
    public function getTags($urlPrefix = ''){

//        echo PHP_EOL . "<!-- TAGS: $this->name -->";

        $tags = array();
        $files_path = $this->isRelease ? DATALATTE_FILES_RELEASE : DATALATTE_FILES ;

        /**
         * Include Js to include
         */
        if(isset($this->metadata['ua-include-js'])){
            foreach($this->metadata['ua-include-js'] as $file){
                $tags[] = tag('script')->src(String::combineUrl(DATALATTE_FILES_URL, "/releases/$this->name/support/$file"));
            }
        }

        /**
         * Include Css to include
         */
        if(isset($this->metadata['ua-include-css'])){
            foreach($this->metadata['ua-include-css'] as $file){
                $tags[] = tag('script')->src(String::combineUrl(DATALATTE_FILES_URL, "/releases/$this->name/support/$file"));
            }
        }

        /**
         * Include standard tags
         */
        if(file_exists(String::combinePath($files_path, "/releases/$this->name/$this->name.css"))){
            $tags = array_merge($tags, array(
                tag('link')->rel('stylesheet')->href(String::combineUrl(DATALATTE_FILES_URL, "/releases/$this->name/$this->name.css"))
            ));
        }

        if(file_exists(String::combinePath($files_path, "/releases/$this->name/$this->name.js"))){
            $tags = array_merge($tags, array(
                tag('script')->src(String::combineUrl(DATALATTE_FILES_URL, "/releases/$this->name/$this->name.js"))
            ));
        }

        if($this->lang){
            if(file_exists(String::combinePath($files_path, "releases/$this->name/$this->lang.js"))){
                $tags = array_merge($tags, array(
                    tag('script')->src(String::combineUrl(DATALATTE_FILES_URL, "/releases/$this->name/$this->lang.js")),
                ));
            }

        }

        return $tags;

    }

    /**
     * Loads the module into memory, using the specified language
     * If no language is specified, no language will be loaded into memory
     *
     * @param string $lang
     */
    public function load($lang = null){

//        echo PHP_EOL . "[LOADING $this->name]";

        if(LatteModule::isLoaded($this->name)){

            if($lang){
                $this->loadLanguage($lang);
            }

            return;
        }

        //region Load Metadata
        if($this->isRelease){

            include String::combinePath($this->path, "module.json.php");
            $this->metadata = json_decode($GLOBALS['module-json-' . $this->name], true);
//            echo "[META]";
//            print_r($GLOBALS);
//            echo "[/META]";
        }else{

            $metafile = String::combinePath($this->path, 'module.json');

            if(file_exists($metafile)){
                $metatext = file_get_contents($metafile);
                $this->metadata = json_decode($metatext, true);
            }
        }
        //endregion

        //region Module Includes
        if(isset($this->metadata['module-include'])){
            foreach($this->metadata['module-include'] as $moduleName){
                if(!LatteModule::isLoaded($moduleName)){
                    LatteModule::memoryLoad($moduleName, $lang);
                }
            }
        }
        //endregion

        //region Load Records
        if(!$this->isRelease){
            $records = String::combinePath($this->pathSupport, 'records.php');

            if(file_exists($records)){
                include $records;
            }
        }

        //endregion

        // Report as loaded
        self::$loadedModules[$this->name] = $this;

        //region Includes
        if(isset($this->metadata['php-include'])){
            foreach($this->metadata['php-include'] as $file){

                include String::combinePath(String::combinePath($this->path, 'php'), $file);
            }
        }
        //endregion

        //region Load strings

        if(!$lang){
            $lang = 'en';
        }

        $langFile = String::combinePath($this->pathLang, $lang . '.txt');

        if(file_exists($langFile)){
            $this->loadLanguage($lang);
        }
        //endregion

        //region Execute _onLoad.php

        $onLoad = String::combinePath($this->pathPhp, '_onLoad.php');

        if(file_exists($onLoad)){
            include $onLoad;
        }

        //endregion

        //region Load PHP
        if ($this->isRelease && $this->name != 'latte'){
//            echo PHP_EOL . "[LOADING PHP $this->name.php]";
            include String::combinePath($this->path, "$this->name.php");
//            echo PHP_EOL . "[/LOADING PHP $this->name.php]";
        }
        //endregion

//        echo PHP_EOL . "[/LOADED $this->name]";
//        echo "<!-- LOADED: $this->name -->";
    }

    /**
     * Loads the specified language into memory and returns a value indicating success
     *
     * @param $lang
     * @return bool
     */
    public function loadLanguage($lang){
        $this->lang = $lang;

        $langs = $this->createStringsArray();

        if(isset($langs[$lang])){

            if(!isset($GLOBALS['strings'])){
                $GLOBALS['strings'] = array();
            }

            $GLOBALS['strings'] = array_replace($GLOBALS['strings'], $langs[$lang]);
        }else{
            return false;
        }
    }

    /**
     * Gets a value indicating if the module has a connection declared
     *
     * @return bool
     */
    public function hasConnection(){
        return isset($this->metadata['connection']);
    }

    /**
     * Loads its MySQL connection from metadata.
     * If no connection is specified in metadata, DataLatte current connection won't be changed.
     * If no connection loaded, no connection will be active in DataLatte Object
     */
    public function loadConnection(){

        if(isset($this->metadata['connection'])){

            $c = $this->metadata['connection'];

            if(isset($this->metadata['connection']['file'])){
                // Load connection from file
                $extra = '';
                if($this->isRelease){
                    $parts = explode('/', $GLOBALS['xlatte_config']['output']);
                    $extra = str_repeat('/../', sizeof($parts));
//                    echo "[IS-RELEASE" . sizeof($parts) . "]";
                }
//                echo "[$this->path > $extra > " . $this->metadata['connection']['file'] . "]";
                $connectionFile = String::combinePath($this->path . $extra, $this->metadata['connection']['file']);
                $connectionText = file_get_contents($connectionFile);
                $c = json_decode($connectionText, true);
            }

            if(DataLatte::$current){
                DataLatte::$current->close();
            }

            $x = new DataConnection($c['user'], $c['password'], $c['host'], $c['database'], true);

            DataLatte::$current = $x;

            //region Execute _onLoadConnection.php

            $onLoad = String::combinePath($this->pathPhp, '_onLoadConnection.php');

            if(file_exists($onLoad)){
                include $onLoad;
            }

            //region
        }
    }
    

    //endregion

}
/**
 * Provides information about written code.
 * 
 * The information is provided as an array, which structure follow this pattern:
 * <example>
 *  // 
 *  // General structure of array returned by methods in this class.
 *  // 
 *  array(
 *      name => "Name of class",
 *      type => "class|interface|object",
 *      extend => "Name of base class",
 *      implement => array("InterfaceA", "InterfaceB"),
 *      description => "Description of object"
 *      constructor => array(
 *          description => "Description of constructor",
 *          params => array(
 *              paramName => array(
 *                  name => "Name of parameter"
 *                  type => "type of parameter",
 *                  description => "Description of parameter"
 *              )
 *          )
 *      ),
 *      properties => array(
 *          propName => array(
 *              attributes => array("attribute1", "attribute2"),
 *              type => "Type of property",
 *              description => "Description of property"
 *          )
 *      ),
 *      methods => array(
 *          description => "Description of constructor",
 *          attributes => array("attribute1", "attribute2")
 *          returns => "Type of return",
 *          returnsdescription => "Description of return value"
 *          params => array(
 *              paramName => array(
 *                  name => "Name of parameter"
 *                  type => "type of parameter",
 *                  description => "Description of parameter"
 *              )
 *          )
 *      )
 *  )
 * </example>
 * The structure is the same for both PHP and JavaScript classes, though, types and attributes are specific to the language.
 */

class LatteReflection {
    
    /**
     * Recursively searches for all files in directory presented by <c>$path</c>
     * 
     * @param string $path
     * @param array $files
     */
    public static function getFullFileList($path){
        
        $files = self::getFileList($path);
        
        // Prepend path to all files
        foreach($files as $i => $file){
            $files[$i] = String::combinePath($path, $file);
        }
        
        foreach($files as $file){
            
            // Check if is directory
            if(is_dir($file)){
                $files = array_merge($files, self::getFullFileList($file));
            }
        }
        
        return $files;
        
    }
    
    /**
     * Gets the files (and folders) of the specified path
     * 
     * @param string $directory
     * @param string $extension
     * @return array
     * @throws ErrorException
     */
    public static function getFileList($directory, $extension = ''){
        // create an array to hold directory list
        $results = array();
        
        // create a handler for the directory
        $handler = opendir($directory);
        
        if(!$handler) throw new ErrorException("Invalid directory: $directory");

        // open directory and walk through the filenames
        while ($file = readdir($handler)) {

            // if file isn't this directory or its parent, add it to the results
            if ($file != "." && $file != "..") {
                if(str($file)->endsWith($extension))
                    $results[] = $file;
            }

        }

        // tidy up: close the handler
        closedir($handler);

        // Sort by name
        asort($results);
        
        $arr = array();
        
        foreach($results as $value)
            $arr[] = $value;
        
        $results = $arr;

        // done!
        return $results;
    }
    
    /**
     * Returns a list of files from the specified diectory path
     * 
     * @param string $directory Path to read for files
     * @return array Sorted list of directories
     */
    public static function getDirectoryList($directory_path){
        // create an array to hold directory list
        $results = array();
        
        // create a handler for the directory
        $handler = opendir($directory_path);
        
        if(!$handler) throw new ErrorException("Invalid directory");

        // open directory and walk through the filenames
        while ($file = readdir($handler)) {

            // if file isn't this directory or its parent, add it to the results
            if ($file != "." && $file != "..") {
                if(is_dir(String::combinePath($directory_path, $file)))
                    $results[] = $file;
            }

        }

        // tidy up: close the handler
        closedir($handler);

        // Sort by name
        asort($results);
        
        $arr = array();
        
        foreach($results as $value)
            $arr[] = $value;
        
        return $arr;
    }

    /**
     * Generates an array with information about the Class or object in the specified JavaScript file
     * 
     * @param string $path
     * @return array
     */
    public static function generateJavaScriptFileInfo($path) {

        $code = file_get_contents($path);

        $namespace = '';
        $pathParts = explode('/', $path);
        
        if(sizeof($pathParts) > 1){
            $namespace = $pathParts[sizeof($pathParts) - 2];
        }
        
        return self::generateJavaScriptCodeInfo($code, $namespace);
    }

    /**
     * Generates an array with information about a PHP Class file
     * 
     * @param string $path
     * @return string
     */
    public static function generatePhpFileInfo($path) {
        $code = file_get_contents($path);

        #return tag('pre')->text(var_export(self::getPhpFileInfo($code), true))->render();
        return self::generatePhpCodeInfo($code);
    }

    /**
     * Generates an array with information about the Class in the specified piece of PHP code
     * @param string $code
     * @return string
     */
    public static function generatePhpCodeInfo($code) {

        $info = array(
            'name' => '',
            'type' => '',
            'extend' => '',
            'implement' => '',
            'constructor' => '',
            'description' => '',
            'methods' => array(),
            'properties' => array(),
            'events' => array(),
        );

        $matches = null;
        //         "/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/";
        $comment = "/\*[^*]*\*+([^/*][^*]*\*+)*/";
        $function = "([\w+\s*]*)function\s*(\w+)\s*(\([^\)]*\))";
        $class = "[\w|\.?]*\.(\w+)\s*=\s*{";
        $classContent = "[\w|\.?]*\.(\w+)\s*=\s*{(.*)}";
        $typeMatch = "[\w\\\\|]+\[?\]?";
        $var = "\\\$\w+,";
        $property = "($comment)?\s*(var|public|private|static)+\s*(var|public|private|static)*\s*(\\\$\w+)";

        /**
         * Extract initial comment and atts
         */
        preg_match_all("#($comment)?\s*(class|interface)\s*(\w+)\s*(extends\s+$typeMatch)?\s*(implements\s+$typeMatch)?\s*{#s", $code, $matches);


        if (sizeof($matches) && sizeof($matches[0])) {

            $info['description'] = self::hilightPhpExapmles(self::getCommentDescription($matches[1][0]));
            $info['type'] = $matches[3][0];
            $info['name'] = $matches[4][0];
            $info['extend'] = $matches[5][0];
            $info['implement'] = $matches[6][0];
        }

        /**
         * Extract properties
         */
        preg_match_all("#$property#s", $code, $matches);

        if (sizeof($matches) > 5) {
            foreach ($matches[5] as $i => $prop) {

                $pinfo = array();
                $comm = $matches[1][$i];
                $attrib1 = $matches[3][$i];
                $attrib2 = $matches[4][$i];
                $descrip = self::getCommentDescription($comm);

                // Get type
                preg_match_all("#@var\s+($typeMatch)#s", $comm, $tmatch);
                $type = sizeof($tmatch) > 1 && sizeof($tmatch[1]) ? $tmatch[1][0] : '';

                $pinfo['description'] = $descrip;
                $pinfo['type'] = $type;
                $pinfo['attributes'] = array();

                if ($attrib1)
                    $pinfo['attributes'][] = $attrib1;
                if ($attrib2 && $attrib1 != $attrib2)
                    $pinfo['attributes'][] = $attrib2;

                $info['properties'][$prop] = $pinfo;
            }
        }



        /**
         * Extract functions
         */
        preg_match_all("#($comment)?\s*$function#s", $code, $matches);

        if (sizeof($matches) > 5) {

            foreach ($matches[4] as $i => $method) {

                $minfo = array();
                $comment = $matches[1][$i];
                $atts = explode(' ', $matches[3][$i]);
                foreach ($atts as $att)
                    if (trim($att))
                        $minfo['attributes'][] = $att;

                // Extract params from code
                $minfo['params'] = array();
                $minfo['name'] = $method;
                $params = explode(',', str_replace(')', '', str_replace('(', '', $matches[5][$i])));
                foreach ($params as $param)
                    if (strlen(trim($param)) > 0)
                        $minfo['params'][trim($param)] = array();

                $minfo = self::getPhpMethodInfo($comment, $minfo, $type);

                if ($method == '__construct') {
                    $info['constructor'] = $minfo;
                } else {
                    $info['methods'][$method] = $minfo;
                }
            }
        }


        ksort($info['methods']);
        ksort($info['properties']);
        return $info;
    }

    private static function hilightPhpExapmles($text) {

        $example = "<example>(.*)</example>";

        preg_match_all("#$example#s", $text, $matches);

        if (sizeof($matches) && sizeof($matches[0])) {
            foreach ($matches[0] as $i => $match) {
                $code = $matches[1][$i];

                $text = str_replace($code, highlight_string('<?php' . PHP_EOL . $code . PHP_EOL . '?>', true), $text);
            }
        }

        return $text;
    }

    private static function formatJavascript($data, $options = false, $c_string = "#DD0000", $c_comment = "#FF8000", $c_keyword = "#007700", $c_default = "#0000BB", $c_html = "#0000BB", $flush_on_closing_brace = false) {

        if (is_array($options)) { // check for alternative usage
            extract($options, EXTR_OVERWRITE); // extract the variables from the array if so
        } else {
            $advanced_optimizations = $options; // otherwise carry on as normal
        }
        @ini_set('highlight.string', $c_string); // Set each colour for each part of the syntax
        @ini_set('highlight.comment', $c_comment); // Suppression has to happen as some hosts deny access to ini_set and there is no way of detecting this
        @ini_set('highlight.keyword', $c_keyword);
        @ini_set('highlight.default', $c_default);
        @ini_set('highlight.html', $c_html);

        if ($advanced_optimizations) { // if the function has been allowed to perform potential (although unlikely) code-destroying or erroneous edits
            $data = preg_replace('/([$a-zA-z09]+) = \((.+)\) \? ([^]*)([ ]+)?\:([ ]+)?([^=\;]*)/', 'if ($2) {' . "\n" . ' $1 = $3; }' . "\n" . 'else {' . "\n" . ' $1 = $5; ' . "\n" . '}', $data); // expand all BASIC ternary statements into full if/elses
        }

        $data = str_replace(array(') { ', ' }', ";", "\r\n"), array(") {\n", "\n}", ";\n", "\n"), $data); // Newlinefy all braces and change Windows linebreaks to Linux (much nicer!) 
        $data = preg_replace("/(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+/", "\n", $data); // Regex identifies all extra empty lines produced by the str_replace above. It is quicker to do it like this than deal with a more complicated regular expression above.
        $data = str_replace("<?php", "<script>", highlight_string("<?php \n" . $data . "\n?>", true));

        $data = explode("\n", str_replace(array("<br />"), array("\n"), $data));

        # experimental tab level highlighting
        $tab = 0;
        $output = '';

        foreach ($data as $line) {
            $lineecho = $line;
            if (substr_count($line, "\t") != $tab) {
                $lineecho = str_replace("\t", "", trim($lineecho));
                $lineecho = str_repeat("\t", $tab) . $lineecho;
            }
            $tab = $tab + substr_count($line, "{") - substr_count($line, "}");
            if ($flush_on_closing_brace && trim($line) == "}") {
                $output .= '}';
            } else {
                $output .= str_replace(array("{}", "[]"), array("<span style='color:" . $c_string . "!important;'>{}</span>", "<span style='color:" . $c_string . " !important;'>[]</span>"), $lineecho . "\n"); // Main JS specific thing that is not matched in the PHP parser
            }
        }

        $output = str_replace(array('?php', '?&gt;'), array('script type="text/javascript">', '&lt;/script&gt;'), $output); // Add nice and friendly <script> tags around highlighted text

        return '<pre id="code_highlighted">' . $output . "</pre>";
    }

    private static function hilightJsExapmles($text) {

        $example = "<example>(.*)</example>";

        preg_match_all("#$example#s", $text, $matches);

        if (sizeof($matches) && sizeof($matches[0])) {
            foreach ($matches[0] as $i => $match) {
                $code = $matches[1][$i];
                $hi = '<?php' . PHP_EOL . $code . PHP_EOL . '?>';
                $hi = highlight_string($hi, true);
                $hi = str_replace('&lt;?php', '', $hi);
                $hi = str_replace('?&gt;', '', $hi);
                $text = str_replace($code, $hi, $text);
            }
        }

        return $text;
    }

    /**
     * Generates an array with information about the Class or object in the specified piece of JavaScript code
     * @param string $code
     * @return string
     */
    public static function generateJavaScriptCodeInfo($code, $namespace = '') {

        $info = array(
            'name' => '',
            'type' => '',
            'extend' => '',
            'implement' => '',
            'constructor' => '',
            'description' => '',
            'enums' => array(),
            'methods' => array(),
            'properties' => array(),
            'events' => array(),
        );

        $matches = null;
        $matchesWithOffset = null;
        $comment = "/\*.+?\*/";
        $function = "(\w+)\s*:\s*function\s*\(\s*((\w*,?\s*)*)\)";
        $property = "\*/\s*(\w+)\s*:";
        $class = "[\w|\.?]*\.(\w+)\s*=\s*{";
        $classContent = "[\w|\.?]*\.(\w+)\s*=\s*{(.*)}";

        preg_match_all("#$classContent#s", $code, $matches);

        /*
         * Extract class content
         */
//        if (sizeof($matches) > 2) {
//            $content = $matches[2][0];
//        } else {
//            $content = null;
//        }

        /**
         * Get class or object name
         */
        preg_match_all("#$class#s", $code, $matches);
        $info['name'] = ($namespace ? $namespace . '.' : '') . $matches[1][0];
        $info['namespace'] = $namespace;

        /**
         * Extract info from initial comment
         */
        preg_match_all("#($comment)\s*$class#s", $code, $matches);

        $initialComment = sizeof($matches) > 0 && sizeof($matches[1]) ? $matches[1][0] : null;

        if ($initialComment) {

            preg_match_all("#@class|@extend#s", $initialComment, $matches);
            $info['type'] = sizeof($matches) && sizeof($matches[0]) ? 'class' : 'object';

            preg_match_all("#@enum#s", $initialComment, $matches);
            $info['type'] = sizeof($matches) && sizeof($matches[0]) ? 'enum' : $info['type'];
            
            // Extends
            preg_match_all("#@extend\s+{(.+)}#s", $initialComment, $matches);

            $info['extend'] = sizeof($matches) > 1 && sizeof($matches[1]) ? $matches[1][0] : '';

            /**
             * Collect description
             */
            $desc = array();

            foreach (explode(PHP_EOL, $initialComment) as $i => $line) {
                $line = self::cleanCommentLine($line);

                if (!str(trim($line))->startsWith('@'))
                    $desc[] = $line;
            }
            $info['description'] = self::hilightJsExapmles(implode(PHP_EOL, $desc));
        }else {
            $info['type'] = 'object';
        }

        /*
         * Extract methods
         */

        preg_match_all("#$function#s", $code, $matches);
        preg_match_all("#$function#s", $code, $matchesWithOffset, PREG_OFFSET_CAPTURE);
        
        $info['functions'] = $matches;

        /// Insert methods and its parameters
        /// by analyzing the code structure
        if (sizeof($matches) > 0) {
            foreach ($matches[1] as $i => $method) {

                //if (str($method)->startsWith('_')) continue;

                $params = $matches[2][$i];
                preg_match_all("#\w+#s", $params, $pmatches);

                $info['methods'][$method] = array(
                    'name' => $method,
                    'params' => array_flip($pmatches[0]),
                    'index' => $matchesWithOffset[1][$i][1]
                );
                
            }
            ksort($info['methods']);
        }


        /// Now analize each method JSDoc to
        /// complete their name, type, description, exceptions
        foreach ($info['methods'] as $method => $struct) {

            preg_match_all("#\*/\s*$method\s*:\s*function#s", $code, $matches, PREG_OFFSET_CAPTURE);

            if (sizeof($matches) && sizeof($matches[0])
                    && sizeof($matches[0][0])) {
                // Find comment end
                $commentEnd = $matches[0][0][1];

                // Find comment
                $commentText = self::findCommentByEnd($code, $commentEnd);

                // Creates the info of method
                $minfo = self::getJsMethodInfo($commentText, $info['methods'][$method], $type);
                
                // Extract method code
                $minfo['code'] = self::getBracedCode($info['methods'][$method]['index'], $code);
                
                if(str($method)->startsWith("_"))
                    $minfo['attributes'][] = "private";

                if ($method == 'init')
                    $type = 'constructor';

                switch ($type) {
                    case 'method':
                        $info['methods'][$method] = $minfo;
                        break;

                    case 'constructor':
                        $info['constructor'] = $minfo;
                        unset($info['methods'][$method]);
                        break;

                    case 'event':
                        $info['events'][$method] = $minfo;
                        unset($info['methods'][$method]);
                        break;
                }
            }
        }

        if (!is_array($info['constructor']) && array_key_exists('init', $info['methods'])) {
            $info['constructor'] = $info['methods']['init'];
            unset($info['methods']['init']);
        }

        preg_match_all("#$property#s", $code, $matches, PREG_OFFSET_CAPTURE);

        /// Insert properties
        foreach ($matches[0] as $i => $match) {
            $propertyName = $matches[1][$i][0];

            if (array_key_exists($propertyName, $info['methods'])
                    || $propertyName == 'init')
                continue;

            $commentEnd = $match[1];
            $commentText = self::findCommentByEnd($code, $commentEnd);
            
            $pinfo = self::getJsPropertyInfo($commentText);
            
            if(str($propertyName)->startsWith('_'))
                $pinfo['attributes'][] = 'private';
            
            if(in_array('event', $pinfo['attributes'])){
                $info['events'][$propertyName] = $pinfo;
                
            }else{
                $info['properties'][$propertyName] = $pinfo;
                
            }
        }

        ksort($info['properties']);
        ksort($info);

        return $info;
    }

    private static function getJsPropertyInfo($jsdoc) {
        $info = array();

        $info['attributes'] = array();
        $info['type'] = '';

        $var = "\\\$\w+";
        $description = array();
        $lines = explode(PHP_EOL, $jsdoc);
        foreach ($lines as $i => $line)
            $lines[$i] = self::cleanCommentLine($line);
        $jsdoc = implode(PHP_EOL, $lines);

        foreach ($lines as $line) {
            $l = str(trim($line));

            // If comment
            if (!$l->startsWith('@')) {
                $description[] = $line;
                
            } elseif ($l->startsWith('@protected')) {
                $info['attributes'][] = "protected";
                
            } elseif ($l->startsWith('@static')) {
                $info['attributes'][] = "static";
                
            } elseif ($l->startsWith('@event')) {
                $info['attributes'][] = "event";
                
            } elseif ($l->startsWith('@type')) {
                preg_match_all("#@type\s*({.+})#s", $line, $matches);

                if (sizeof($matches) > 1) {
                    $info['type'] = sizeof($matches[1]) ?
                            substr($matches[1][0], 1, strlen($matches[1][0]) - 2) : '';
                }
            }
        }


        $info['description'] = trim(implode(PHP_EOL, $description));


        return $info;
    }

    /**
     * Gets the information about
     * @param type $jsdoc
     */
    private static function getPhpMethodInfo($phpdoc, $info, &$type) {

        $type = 'method';
        $description = array();
        $lines = explode(PHP_EOL, $phpdoc);
        foreach ($lines as $i => $line)
            $lines[$i] = self::cleanCommentLine($line);
        $phpdoc = implode(PHP_EOL, $lines);
        $typeMatch = "[\w\\\\|\\<\\>]+\[?\]?";

        foreach ($lines as $line) {
            $l = str(trim($line));

            // If comment
            if (!$l->startsWith('@')) {
                $description[] = $line;
            } elseif ($l->startsWith('@param')) {

                $pname = '';
                $pdesc = array();
                $ptype = '';
                $parts = explode(" ", $line);

                foreach ($parts as $part) {
                    if (trim($part) == '@param')
                        continue;

                    if (!$ptype) {
                        $ptype = $part;
                    } else if (!$pname) {
                        $pname = $part;
                    } else {
                        $pdesc[] = $part;
                    }
                }

                $trueName = $pname;

                // Check if optional
                foreach ($info['params'] as $param => $data) {
                    $parts = explode('=', trim($param));

                    if (sizeof($parts) > 1 && trim($parts[0]) == $pname) {
                        $trueName = $param;
                        break;
                    }
                }

                $info['params'][$trueName] = array();
                $info['params'][$trueName]['name'] = $pname;
                $info['params'][$trueName]['type'] = $ptype;
                $info['params'][$trueName]['description'] = trim(implode(' ', $pdesc));
            } elseif ($l->startsWith('@returns') || $l->startsWith('@return')) {
                preg_match_all("#@returns?\s*($typeMatch)\s*(.*)?#s", $line, $matches);

                if (sizeof($matches) > 2) {
                    $info['returns'] = sizeof($matches[1]) ? $matches[1][0] : '';
                    $info['returnsdescription'] = sizeof($matches[2]) ? $matches[2][0] : '';
                }
            } elseif ($l->startsWith('@variable-params')) {
                $info['attributes'][] = "variable-params";
                
            } elseif ($l->startsWith('@remote')) {
                $info['attributes'][] = "remote";
                
            } elseif ($l->startsWith('@deprecated')) {
                $info['attributes'][] = "deprecated";
                
            } elseif ($l->startsWith('@throws')) {
                preg_match_all("#@throws\s*({.+})\s*(.*)?#s", $line, $matches);

                if (sizeof($matches) > 2) {
                    if (!isset($info['throws']))
                        $info['throws'] = array();
                    $info['throws'][] = array(
                        'type' => sizeof($matches[1]) ? substr($matches[1][0], 1, strlen($matches[1][0]) - 2) : '',
                        'description' => sizeof($matches[2]) ? $matches[2][0] : '',
                    );
                }
            }
        }

        $info['description'] = trim(implode(PHP_EOL, $description));

        return $info;
    }

    /**
     * Gets the information about the method
     * @param type $jsdoc
     */
    private static function getJsMethodInfo($jsdoc, $info, &$type) {

        $type = 'method';
        $info['attributes'] = array();
        $description = array();
        $lines = explode(PHP_EOL, $jsdoc);
        foreach ($lines as $i => $line)
            $lines[$i] = self::cleanCommentLine($line);
        $jsdoc = implode(PHP_EOL, $lines);

        foreach ($lines as $line) {
            $l = str(trim($line));

            // If comment
            if (!$l->startsWith('@')) {
                $description[] = $line;
            } elseif ($l->startsWith('@param')) {
                preg_match_all("#@param\s*({.+})\s*(\w+)\s*(.*)?#s", $line, $matches);

                if (sizeof($matches) > 2) {
                    $paramName = sizeof($matches[2]) ? $matches[2][0] : '';
                    $info['params'][$paramName] = array();
                    $info['params'][$paramName]['type'] = sizeof($matches[1]) ? substr($matches[1][0], 1, strlen($matches[1][0]) - 2) : '';
                    $info['params'][$paramName]['description'] = sizeof($matches[3]) ? $matches[3][0] : '';
                }
            } elseif ($l->startsWith('@returns')) {
                preg_match_all("#@returns\s*({.+})\s*(.*)?#s", $line, $matches);

                if (sizeof($matches) > 2) {
                    $info['returns'] = sizeof($matches[1]) ? substr($matches[1][0], 1, strlen($matches[1][0]) - 2) : '';
                    $info['returnsdescription'] = sizeof($matches[2]) ? $matches[2][0] : '';
                }
            } elseif ($l->startsWith('@constructor')) {
                $type = 'constructor';
                
            } elseif ($l->startsWith('@event')) {
                $type = 'event';
                
            } elseif ($l->startsWith('@static')) {
                $info['attributes'][] = "static";
                
            } elseif ($l->startsWith('@protected')) {
                $info['attributes'][] = "protected";
                
            } elseif ($l->startsWith('@deprecated')) {
                $info['attributes'][] = "deprecated";
                
            } elseif ($l->startsWith('@private')) {
                $info['attributes'][] = "private";
                
            } elseif ($l->startsWith('@throws')) {
                preg_match_all("#@throws\s*({.+})\s*(.*)?#s", $line, $matches);

                if (sizeof($matches) > 2) {
                    if (!isset($info['throws']))
                        $info['throws'] = array();
                    $info['throws'][] = array(
                        'type' => sizeof($matches[1]) ? substr($matches[1][0], 1, strlen($matches[1][0]) - 2) : '',
                        'description' => sizeof($matches[2]) ? $matches[2][0] : '',
                    );
                }
            }
        }

        $info['description'] = trim(implode(PHP_EOL, $description));

        return $info;
    }
    
    /**
     * 
     * @param int $start
     * @param string $code
     * @return string
     */
    private static function getBracedCode($start, $code){
        $method = "";
        $stack = array();
        $concatenate = false;
        
        for($i = $start; $i < strlen($code); $i++){
            
            $char = substr($code, $i, 1);
            
            if($char == '{'){
                array_push($stack, $i);

                if($concatenate) $method .= $char;
                
                $concatenate = true;
                
            }elseif($char == '}'){
                array_pop($stack);
                
                if(sizeof($stack) === 0) {
                    break;
                }
                
                if($concatenate) $method .= $char;
            }else{
                if($concatenate) $method .= $char;
            }
            
//            if($concatenate) $method .= $char;
            
        }
        
        return $method;
    }
    
    /**
    * Gets the namespaces on ua/ folder of specified app
    * 
    * @remote
     * @deprecated
    * @param string $app
    * @return array
    */
    public static function getAppUaNamespaces($app){
        return LatteReflection::getDirectoryList(DataLatteUa::getAppPath($app) . '/ua');
    }

    private static function getCommentDescription($comment) {

        $lines = explode(PHP_EOL, $comment);
        $desc = array();

        foreach ($lines as $line) {
            $line = self::cleanCommentLine($line);

            if (!str(trim($line))->startsWith('@'))
                $desc[] = $line;
        }

        return implode(PHP_EOL, $desc);
    }

    /**
     * Cleans the '/' and '*' characters from JSDoc comments
     * @param type $line
     */
    private static function cleanCommentLine($line) {
        $line = str_replace('/*', '', $line);
        $line = str_replace('*/', '', $line);
        $line = trim($line);

        if (str($line)->startsWith('*'))
            $line = substr($line, 1);

        //$line = trim($line);

        return $line;
    }

    /**
     * Finds the specified comment given the end of the comment
     */
    private static function findCommentByEnd($code, $commentEnd) {

        $commentStart = 0;

        for ($i = $commentEnd; $i > 0; $i--) {
            $char = substr($code, $i, 1);
            $prevChar = substr($code, $i - 1, 1);

            if ($char == '*' && $prevChar == '/') {
                $commentStart = $i - 1;
                break;
            }
        }

        return substr($code, $commentStart, $commentEnd - $commentStart + 2);
    }
    
    /**
     * Gets an array of information pieces for specified modules.
     * <c>$moduleNames</c> may be a module name or a comma separated list of modules.
     * 
     * @remote
     * @param string $moduleNames
     * @param string $version
     * @return array
     */
    public static function getModuleClassesInfo($moduleNames, $version = 'development'){
        
        $gatherer = array();
        $tokens = explode(',', $moduleNames);

        // Execute method for each module name
        foreach ($tokens as $token){
            $m = new LatteModule(trim($token));
            $gatherer = array_merge($gatherer, $m->getClassesInfo($version));
        }

        return $gatherer;
        
    }
    
    /**
    * Gets the informatio array about the object on server
    * 
    * @remote
    * @deprecated
    * @param string $app
    * @param string $className
    * @return array
    */
    public static function getServerObject($app, $className) {

        $path = DataLatteUa::getAppPath($app) . "/php/$className.php";

        return LatteReflection::generatePhpFileInfo($path);
    }

    /**
     * Gets the names of files in the classes/ folder
     * 
     * @remote
     * @deprecated
     * @param string $app
     * @return array
     */
    public static function getServerObjects($app) {

        $list = LatteReflection::getFileList(DataLatteUa::getAppPath($app) . '/php', '.php');

        foreach ($list as $i => $value) {
            $s = str($value);
            $list[$i] = $s->substring(0, $s->length() - 4) . '';
        }

        return $list;
    }

    /**
     * Gets the information array of all objects in app
     * 
     * @remote
     * @deprecated
     * @param string $app
     * @return array
     */
    public static function getServerObjectsDeep($app = 'App') {

        $list = self::getServerObjects($app);
        $objects = array();

        foreach ($list as $i => $className) {
            $objects[$className] = self::getServerObject($app, $className);
        }

        return $objects;
    }

}
class SecurityException extends Exception{
    
    public function __construct($message = 'Security Violation') {
        parent::__construct($message, 98);
    }
    
}
    /**
     * Represents a string with known methods. 
     */
    class String{
        
        private $string = null;
        
        /**
         * Creates a new string instance
         * @param type $string 
         */
        public function __construct($string){
            $this->string = $string;
        }
        
        /**
         * Returns the string value
         * @return string
         */
        public function __toString(){
            return $this->string;
        }

        public static function combineUrl($path1, $path2){
            return self::combinePath($path1, $path2, "/");
        }
        
        /**
         * Combines the paths
         * @param string $path1
         * @param string $path2
         * @param string $separator
         * @return string
         */
        public static function combinePath($path1, $path2, $separator = DIRECTORY_SEPARATOR){
            if( str($path1)->endsWith($separator) ){
                return $path1 . $path2;
            }else{
                return $path1 . $separator . $path2;
            }
        }
        
        /**
         * Trims the string to the specified size.
         * @param int $size Size of desired trimmed string 
         * @return String 
         */
        public function ellipsis($size = 20){
            
            $string = $this->string;
            
            if(strlen($string) > $size){
                
                // Holds offset
                $offset = -1;    
                
                do{
                    $offset++;
                    $char = substr($string, $size - 1 - $offset, 1);
                    
                }while( (ord($char) < 32 || ord($char) > 125) && !($offset >= strlen($string)) );
                
                if($offset >= strlen($string))
                    return new String("...");
                else
                    return new String(substr($string, 0, $size - $offset)) . '...';
            }
            
            return new String($string);
        }
        
        /**
         * Returns a boolean indicating if the string ends with the specified $posfix
         * @param string $posfix String to check if exists at the end
         * @return boolean
         */
        public function endsWith($posfix){
            $string = $this->string;
            return substr($string, strlen($string) - strlen($posfix)) == $posfix;
        }
        
        /**
         * Returns the position of the first occurrence of the specified string
         * @param String $string
         * @param int $start
         * @return int
         */
        public function indexOf(String $string, $start = 0){
            return strpos($this->string, $string->string, $start);
        }
        
        public function length(){
            return strlen($this->string);
        }
        
        public function replace($search, $replace){
            return str(str_replace($search, $replace, $this->string));
        }
        
        /**
         * Returns a boolean indicating if the string starts with the specified $prefix
         * @param type $prefix
         * @return type 
         */
        public function startsWith($prefix){
            $string = $this->string;
            return substr($string, 0, strlen($prefix)) == $prefix;
        }
        
        /**
         * Returns the substring specified by the parameters
         * @param int $start
         * @param int $length
         * @return String
         */
        public function substring($start, $length = null){
            if($length === null)
                return str(substr($this->string, $start));
            else
                return str(substr($this->string, $start, $length));
        }
        
    }
    
    /**
     * Creates a String object from the specified native string
     * @param type $string
     * @return String 
     */
    function str($string) { return new String($string); }/**
 * Represents an HTML element as a tag.
 * 
 * <example>
 * 
 *    // ( 1 ) Usage
 *    echo new Tag('div');          // Writes <div></div>
 * 
 *    // ( 2 ) Assign Class
 *    echo new Tag('div.higlight'); // Writes <div class="highlight"></div>
 * 
 *    // ( 3 ) Set Text
 *    $t = new Tag('div.a'); 
 *    $t->text("Hello world");
 *    echo $t;                      // Writes <div class="a">Hello World</div>
 * 
 *    // ( 4 ) Change text color
 *    echo $t->color('white');      // Writes <div class="a" style="color: white">Hello World</div>
 * 
 *    // ( 5 ) Change text color
 *    echo $t->add(tag('<hr>'));    // Writes <div class="a" style="color: white">Hello World<hr></div>
 * 
 *    // ( 6 ) Quick input
 *    $t = new Tag('text')    
 *    echo $t;                      // Writes <input type="text">
 * 
 *    // ( 7 ) Set Name and value
 *    $t->name("last-name")
 *    $t->value("Doe")
 *    echo $t;                      // Writes <input type="text" name="last-name" value="Doe">
 * 
 * </example>
 */
class Tag {

    /**
     * Name of the tag
     * 
     * @var string 
     */
    public $tagname = "";
    
    /**
     * Holds attributes and its values
     * 
     * @var array
     */
    public $atts = array();
    
    /**
     * Holds the content added to the tag
     * 
     * @var array
     */
    public $content = array();

    /**
     * Creates a new instance of tag, using the tag name.
     * @param string $name Name of tag. Classes may be added using "tag.class1.class2"
     * Special tag transformations:
     *   &middot; text: <c>&lt;input type=text&gt;</c>
     *   &middot; hidden: <c>&lt;input type=hidden&gt;</c>
     *   &middot; checkbox: <c>&lt;input type=checkbox&gt;</c>
     *   &middot; radio: <c>&lt;input type=radio&gt;</c>
     *   &middot; submit: <c>&lt;input type=submit&gt;</c>
     *   &middot; passwor: <c>&lt;input type=password&gt;</c>
     */
    function __construct($name = 'span') {

        $class = explode(".", $name);
        $id = explode("#", $name);

        if (sizeof($class) > 1) {
            $name = $class[0];
            for ($i = 1; $i < sizeof($class); $i++)
                $this->addClass($class[$i]);
        }

        if (sizeof($id) > 1) {
            $name = $id[0];
            $this->attr('id', $id[1]);
        }

        switch ($name) {
            case "text": $name = "input";
                $this->type("text");
                break;
            case "hidden": $name = "input";
                $this->type("hidden");
                break;
            case "checkbox":$name = "input";
                $this->type("checkbox");
                break;
            case "radio": $name = "input";
                $this->type("radio");
                break;
            case "submit": $name = "input";
                $this->type("submit");
                break;
            case "password": $name = "input";
                $this->type("password");
                break;
            case "file": $name = "input";
                $this->type("file");
                break;
        }

        $this->tagname = $name;
    }

    /**
     * Adds JavaScript to the page. Optionally minifies the script by removing white spaces.
     * 
     * @param string $script
     * @param bool $minify
     * @return Tag
     */
    public function addScript($script, $minify = true) {

        $script = str_replace("\r", "", $script);
        $script = str_replace("\n", "", $script);
        $script = str_replace("\t", "", $script);
        $script = preg_replace('/\s\s+/', ' ', $script);

        return tag("script")
                ->attr("type", "text/javascript")
                ->text("\r\n<!-- \r\n $script \r\n//-->\r\n")
                ->addTo($this);
    }

    /**
     * Adds content to this tag
     * 
     * @param string|Tag $what
     * @return Tag
     */
    public function add($what) {

        if (is_array($what)) {
            foreach ($what as $subWhat)
                $this->add($subWhat);
        } else {
            $this->content[] = $what;
        }

        return $this;
    }

    /**
     * Adds text to this tag. Special HTML characters are converted
     * 
     * @param string|Tag $what
     * @return Tag
     */
    public function addText($what) {
        $this->content[] = htmlentities($what);
        return $this;
    }

    /**
     * Adds content to this tag
     * 
     * @param string $class
     * @return Tag
     */
    public function addClass($class) {
        if (isset($this->atts['class'])) {
            $this->atts['class'] .= " " . $class;
        } else {
            $this->attr("class", $class);
        }
        return $this;
    }

    /**
     * Adds this tag to another tag and returns this tag.
     * 
     * @param Tag $tag
     * @return Tag
     */
    public function addTo(Tag $tag) {
        $tag->add($this);

        return $this;
    }

    /**
     * Sets the value of the "action" attribute
     * 
     * @param string $action
     * @return Tag
     */
    public function action($action) {
        return $this->attr('action', $action);
    }

    /**
     * Sets the value of the "alt" attribute
     * 
     * @param string $src
     * @return
     */
    public function alt($alt) {
        return $this->attr('alt', $alt);
    }

    /**
     * Adds an attribute with a value. Optionally encodes the special HTML characters of the value.
     * 
     * @param string $attribute
     * @param string $value
     * @param boolean $converthtmlchars
     * @return Tag
     */
    public function attr($attribute, $value, $converthtmlchars = true) {
        if ($converthtmlchars)
            if (is_string($value))
                $value = htmlspecialchars($value);
        $this->atts[$attribute] = $value;
        return $this;
    }

    /**
     * Alias of add
     * 
     * @param string|Tag $content 
     * @return Tag
     */
    public function append($content) {
        return $this->add($content);
    }

    /**
     * Adds inline-style for "background"
     * 
     * @param string $value
     * @return Tag
     */
    public function background($value) {
        return $this->css('background', $value);
    }

    /**
     * Adds inline-style for "background-attachment"
     * 
     * @param string $value
     * @return Tag
     */
    public function backgroundAttachment($value) {
        return $this->css('background-attachment', $value);
    }

    /**
     * Adds inline-style for "background-color"
     * 
     * @param string $value
     * @return Tag
     */
    public function backgroundColor($value) {
        return $this->css('background-color', $value);
    }

    /**
     * Adds inline-style for "background-position"
     * 
     * @param string $value
     * @return Tag
     * 
     */
    public function backgroundPosition($value) {
        return $this->css('background-position', $value);
    }

    /**
     * Adds inline-style for "background-repeat"
     * 
     * @param string $value
     * @return Tag
     */
    public function backgroundRepeat($value) {
        return $this->css('background-repeat', $value);
    }

    /**
     * Adds inline-style for "background-image"
     * 
     * @param string $value
     * @return Tag
     */
    public function backgroundImage($url) {
        return $this->css('background-image', "url($url)");
    }

    /**
     * Adds inline-style for "border"
     * 
     * @param string $value
     * @return Tag
     */
    public function border($value) {
        return $this->css('border', $value);
    }

    /**
     * Adds inline-style for "border-top"
     * 
     * @param string $value
     * @return Tag
     */
    public function borderTop($value) {
        return $this->css('border-top', $value);
    }

    /**
     * Adds inline-style for "border-right"
     * 
     * @param string $value
     * @return Tag
     */
    public function borderRight($value) {
        return $this->css('border-right', $value);
    }

    /**
     * Adds inline-style for "border-bottom"
     * 
     * @param string $value
     * @return Tag
     */
    public function borderBottom($value) {
        return $this->css('border-botom', $value);
    }

    /**
     * Adds inline-style for "border-left"
     * 
     * @param string $value
     * @return Tag
     */
    public function borderLeft($value) {
        return $this->css('border-left', $value);
    }

    /**
     * Adds inline-style for "bottom"
     * 
     * @param string $value
     * @return Tag
     */
    public function bottom($value) {
        return $this->css('bottom', $value);
    }

    /**
     * Adds inline-style for "color"
     * 
     * @param string $value
     * @return Tag
     */
    public function color($value) {
        return $this->css('color', $value);
    }

    /**
     * Sets the content attribute
     * 
     * @param string $value
     * @return Tag
     */
    public function content($value) {
        return $this->attr('content', $value);
    }

    /**
     * Activates the attribute for editing content in the element
     * 
     * @return Tag
     */
    public function contentEditable() {
        return $this->attr('contenteditable', 'true');
    }

    /**
     * Sets the value of the "cellpadding" attribute
     * 
     * @param string $cellpadding
     * @return Tag
     */
    public function cellpadding($cellpadding) {
        return $this->attr('cellpadding', $cellpadding);
    }

    /**
     * Sets the value of the "cellspacing"
     * 
     * @param string $cellspacing
     * @return Tag
     */
    public function cellspacing($cellspacing) {
        return $this->attr('cellspacing', $cellspacing);
    }

    /**
     * Sets the value of the "checked" attribute
     * 
     * @param string $checked
     * @return Tag
     */
    public function checked($checked) {
        return $this->attr('checked', $checked);
    }

    /**
     * Adds inline-style for "clear"
     * 
     * @param string $value
     * @return Tag
     */
    public function clear($value = 'both') {
        return $this->css('clear', $value);
    }

    /**
     * Adds CSS styles to the tag
     * 
     * @param string $style
     * @param string $value
     * @return Tag
     */
    public function css($style, $value = NULL) {
        if ($value != NULL) {
            if (is_numeric($value))
                $value = $value . "px";
            return $this->css("$style: $value");
        }

        if (isset($this->atts['style'])) {

            $this->atts['style'] .= "; " . $style;
        } else {
            $this->attr("style", $style);
        }
        return $this;
    }

    /**
     * Sets a data value attribute.
     * 
     * @param string $name
     * @param string $value 
     * @return Tag
     */
    public function data($name, $value) {
        return $this->attr("data-$name", $value);
    }

    /**
     * Adds inline-style for "display"
     * 
     * @param string $value
     * @return Tag
     */
    public function display($value) {
        return $this->css('display', $value);
    }

    /**
     * Recursively finds all tags with the specified tag name
     * 
     * @param string $tagname
     * @param array $buffer 
     * @return array
     */
    public function findByTagName($tagname, $buffer = null) {

        if (!$buffer)
            $buffer = array();

        foreach ($this->content as $tag) {
            if (!($tag instanceof Tag))
                continue;

            if ($tag->tagname == $tagname) {
                $buffer[] = $tag;
            }

            $buffer = array_merge($buffer, $tag->findByTagName($tagname));
        }

        return $buffer;
    }

    /**
     * Adds inline-style for "float" 
     * 
     * @param string $value
     * @return Tag
     */
    public function float($value) {
        return $this->css('float', $value);
    }

    /**
     * Adds inline-style for "font-size"
     * 
     * @param string $value
     * @return Tag
     */
    public function fontSize($value) {
        return $this->css('font-size', $value);
    }

    /**
     * Adds inline-style for "font-weight"
     * 
     * @param string $value
     * @return Tag
     */
    public function fontWeight($value) {
        return $this->css('font-weight', $value);
    }

    /**
     * Finds element based on the value of the specified attribute
     * 
     * @param string $attribute
     * @param string $value 
     * @param Tag
     */
    public function getElementByAttribute($attribute, $value, $recursive = false) {

        foreach ($this->content as $unit) {
            if ($unit instanceof Tag) {
                if (array_key_exists($attribute, $unit->atts)) {
                    if ($unit->atts[$attribute] == $value) {
                        return $unit;
                    }
                }

                if ($recursive) {
                    $found = $this->getElementByAttribute($attribute, $value, $recursive);
                    if ($found) {
                        return $found;
                    }
                }
            }
        }

        return null;
    }

    /**
     * Adds inline-style for "height"
     * 
     * @param string $value
     * @return Tag
     */
    public function height($value) {
        return $this->css('height', $value);
    }

    /**
     * Sets the HTML of tag. Clears all previosly added content
     * 
     * @param string $value
     * @return Tag
     */
    public function html($value) {
        $this->content = array();
        return $this->add($value);
    }

    /**
     * Sets the value for the "id" attribute
     * 
     * @param string $id
     * @return Tag
     */
    public function id($id) {
        return $this->attr('id', $id);
    }

    /**
     * Adds inline-style for "left"
     * 
     * @param string $value
     * @return Tag
     */
    public function left($value) {
        return $this->css('left', $value);
    }

    /**
     * Sets the value for the "href" attribute
     * 
     * @param string $href
     * @return Tag
     */
    public function href($href) {
        return $this->attr('href', $href);
    }

    /**
     * Sets the href attribute to "javascript:void(0)"
     * 
     * @return Tag
     */
    public function hrefVoid() {
        return $this->attr('href', 'javascript:void(0)');
    }

    /**
     * Adds inline-style for "margin"
     * 
     * @param string $value
     * @return Tag
     */
    public function margin($value) {
        return $this->css('margin', $value);
    }

    /**
     * Adds inline-style for "margin-top"
     * 
     * @param string $value
     * @return Tag
     */
    public function marginTop($value) {
        return $this->css('margin-top', $value);
    }

    /**
     * Adds inline-style for "margin-right"
     * 
     * @param string $value
     * @return Tag
     */
    public function marginRight($value) {
        return $this->css('margin-right', $value);
    }

    /**
     * Adds inline-style for "margin-bottom"
     * 
     * @param string $value
     * @return Tag
     */
    public function marginBottom($value) {
        return $this->css('margin-bottom', $value);
    }

    /**
     * Adds inline-style for "margin-left"
     * 
     * @param string $value
     * @return Tag
     */
    public function marginLeft($value) {
        return $this->css('margin-left', $value);
    }

    /**
     * Adds inline-style for "min-height"
     * 
     * @param string $value
     * @return Tag
     */
    public function minHeight($value) {
        return $this->css('min-height', $value);
    }

    /**
     * Adds inline-style for "max-width"
     * 
     * @param string $value
     * @return Tag
     */
    public function maxWidth($value) {
        return $this->css('max-width', $value);
    }

    /**
     * Sets the value of the "method" attribute
     * 
     * @param string $method
     * @return Tag
     */
    public function method($method) {
        return $this->attr('method', $method);
    }

    /**
     * Sets the value of the "maxlength" attribute
     * 
     * @param string $value
     * @return Tag
     */
    public function maxLength($value) {
        return $this->attr('maxlength', $value);
    }

    /**
     * Adds inline-style for "max-height"
     * 
     * @param string $value
     * @return Tag
     */
    public function maxHeight($value) {
        return $this->css('max-height', $value);
    }

    /**
     * Adds inline-style for "min-width"
     * 
     * @param string $value
     * @return Tag
     */
    public function minWidth($value) {
        return $this->css('min-width', $value);
    }

    /**
     * Indicates if tag should be closed based on forbidden tags on HTML4 spec
     * 
     * @return boolean
     */
    public function mustClose() {
        $arr = explode(",", "!doctype,area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param");
        return array_search(strtolower($this->tagname), $arr) === FALSE;
    }

    /**
     * Sets the value of "name" attribute
     * 
     * @param string $name
     * @return Tag
     */
    public function name($name) {
        return $this->attr("name", $name);
    }

    /**
     * Adds inline-style for "overflow"
     * 
     * @param string $value
     * @return Tag
     */
    public function overflow($value) {
        return $this->css('overflow', $value);
    }

    /**
     * Adds inline-style for "padding"
     * 
     * @param string $value
     * @return Tag
     */
    public function padding($value) {
        return $this->css('padding', $value);
    }

    /**
     * Adds inline-style for "padding-top"
     * 
     * @param string $value
     * @return Tag
     */
    public function paddingTop($value) {
        return $this->css('padding-top', $value);
    }

    /**
     * Adds inline-style for "padding-right"
     * 
     * @param string $value
     * @return Tag
     */
    public function paddingRight($value) {
        return $this->css('padding-right', $value);
    }

    /**
     * Adds inline-style for "padding-bottom"
     * 
     * @param string $value
     * @return Tag
     */
    public function paddingBottom($value) {
        return $this->css('padding-bottom', $value);
    }

    /**
     * Adds inline-style for "padding-left"
     * 
     * @param string $value
     * @return Tag
     */
    public function paddingLeft($value) {
        return $this->css('padding-left', $value);
    }

    /**
     * Adds inline-style for "position"
     * 
     * @param string $value
     * @return Tag
     */
    public function position($value) {
        return $this->css('position', $value);
    }

    public function rel($value) {
        return $this->attr('rel', $value);
    }

    /**
     * Removes class from tag
     * 
     * @param string $class
     * @return Tag
     */
    public function removeClass($class) {
        if (isset($this->atts['class'])) {

            $this->atts['class'] = str_replace($class, "", $this->atts['class']);
        }
        return $this;
    }

    /**
     * Adds inline-style for "right"
     * 
     * @param string $value
     * @return Tag
     */
    public function right($value) {
        return $this->css('right', $value);
    }

    /**
     * Renders the tag and returns it as a string
     * 
     * @return string
     */
    public function render() {

        $str = "";
        $attributes = array();

        $str .= "<" . $this->tagname;


        foreach ($this as $att => $value) {

            $att = str_replace("_", "-", $att);

            if ($att == "tagname" || $att == "content" || $att == "atts")
                continue;

            $attributes[$att] = $value;
        }

        foreach ($this->atts as $att => $value) {
            $attributes[$att] = $value;
        }

        foreach ($attributes as $att => $value) {
            $str .= $this->render_att($att, $value);
        }

        $str .= ">";

        foreach ($this->content as $i => $value) {

            if ($value === NULL)
                continue;

            if ($value instanceOf Tag) {
                $str .= $value->render();
            } else {
                $str .= $value;
            }
        }

        if (sizeof($this->content) > 0 || $this->mustClose()) {
            $str .= '</' . $this->tagname . '>';
        }

        return $str;
    }

    private function render_att($att, $value) {
        $str = "";
        if ($value === NULL) {
            $str .= " " . $att;
        } else {
            $str .= " " . $att . "=\"" . $value . "\"";
        }
        return $str;
    }

    /**
     * Sets the value of the "src" attribute
     * @param string $src
     * @return Tag
     */
    public function src($src) {
        return $this->attr('src', $src);
    }

    /**
     * Sets the value of the "style" attribute
     * WARNING: There's a collision with the values setted by css() method
     * 
     * @param string $src
     * @return Tag
     */
    public function style($src) {
        return $this->attr('style', $src);
    }

    /**
     * Sets the value of the "target" attribute
     * 
     * @param string $value
     * @return Tag 
     */
    public function target($value) {
        return $this->attr('target', $value);
    }

    /**
     * Sets the value of the "title" attribute
     * 
     * @param string $src
     * @return Tag
     */
    public function title($value) {
        return $this->attr('title', $value);
    }

    /**
     * Adds inline-style for "top"
     * 
     * @param string $value
     * @return Tag
     */
    public function top($value) {
        return $this->css('top', $value);
    }

    /**
     * Sets the content of tag to be the specified text
     * 
     * @param string $text
     * @return Tag
     */
    public function text($text = null) {
        if ($text) {
            $this->content = array($text);
        } else {
            $this->content = array();
        }
        return $this;
    }

    /**
     * Adds inline-style for "text-align"
     * 
     * @param string $value
     * @return Tag
     */
    public function textAlign($value) {
        return $this->css('text-align', $value);
    }

    /**
     * Sets the type attribute
     * 
     * @param string $type 
     * @return Tag
     */
    public function type($type) {
        return $this->attr("type", $type);
    }

    /**
     * Sets the value of the "Value" attribute
     * @param string $value
     * @return Tag 
     */
    public function value($value) {


        switch (strtolower($this->tagname)) {
            case 'textarea':
                return $this->attr('text', $value);

            case 'select':
                foreach ($this->content as $ct) {
                    if ($ct instanceof Tag) {
                        if ($ct->tagname == "option" && $ct->atts['value'] == $value) {
                            $ct->attr('selected', 'true');
                        }
                    }
                }

            default:
                return $this->attr("value", $value);
        }
    }

    /**
     * Sets the value of "onclick" attribute
     * 
     * @param string $value
     * @return Tag
     */
    public function onclick($value) {
        return $this->attr('onclick', $value);
    }

    /**
     * Sets the value of "onchange" attribute
     * 
     * @param string $value
     * @return Tag
     */
    public function onchange($value) {
        return $this->attr('onchange', $value);
    }

    /**
     * Sets the value of "onsubmit" attribute
     * 
     * @param string $value
     * @return Tag
     */
    public function onsubmit($value) {
        return $this->attr('onsubmit', $value);
    }

    /**
     * Adds inline-style for "outline"
     * 
     * @param string $value
     * @return Tag
     */
    public function outline($value) {
        return $this->css('outline', $value);
    }

    /**
     * Prepends something into the element
     * 
     * @param string|Tag $what
     * @return Tag
     */
    public function prepend($what) {
        array_unshift($this->content, $what);
        return $this;
    }

    /**
     * Prepends tag into the specified tag
     * 
     * @param Tag $tag
     * @return Tag
     */
    public function prependTo($tag) {
        $tag->prepend($this);
        return $this;
    }

    /**
     * Sets the value of the "selected" attribute
     * 
     * @param string $action
     * @return Tag
     */
    public function selected($action) {
        return $this->attr('selected', $action);
    }

    /**
     * Sets the text of the tag with script format
     * 
     * @param string $text
     * @return string
     */
    public function scriptText($text) {
        //return $this->text("<!--\n$text\n//-->");
        return $this->text("\n$text\n");
    }

    /**
     * Sets the value of "size" attribute
     * 
     * @param int|string
     * @return Tag
     */
    public function size($value) {
        return $this->attr('size', $value);
    }

    /**
     * Returns the tag as a string
     * 
     * @return Tag
     */
    public function __toString() {
        return $this->render();
    }

    /**
     * Adds inline-style for "visibility"
     * 
     * @param string $value
     * @return Tag
     */
    public function visibility($value) {
        return $this->css('visibility', $value);
    }

    /**
     * Adds inline-style for "width"
     * 
     * @param string $value
     * @return Tag
     */
    public function width($value) {
        return $this->css('width', $value);
    }

    /**
     * Adds inline-style for "z-index"
     * 
     * @param string $value
     * @return Tag
     */
    public function zIndex($value) {
        return $this->css('z-index', $value);
    }

}

/**
 * Creates a new tag on the fly
 * @param string $name
 * @return Tag
 */
function tag($name) {
    return new Tag($name);
}/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 5/5/16
 * Time: 11:33
 */



@session_start();

// Load configuration
$ON_RELEASE = isset($ON_RELEASE) ? $ON_RELEASE : false;

$offset_path = isset($PROJECT_OFFSET) ? str_repeat('../', $PROJECT_OFFSET) : '';
$project_path = __DIR__ . '/../../../' . ($ON_RELEASE ? $offset_path : '');
$config_path = $project_path  . 'xlatte.json';
$config_path_release = __DIR__ . '/../../xlatte.json';

//echo "[$project_path]";

if(file_exists($config_path_release)){
    $GLOBALS['xlatte_config'] = json_decode(file_get_contents($config_path_release), true);

}elseif(file_exists($config_path)){
    $GLOBALS['xlatte_config'] = json_decode(file_get_contents($config_path), true);

}else{
    $GLOBALS['xlatte_config'] = array(
        'modules' => 'latte',
        'output' => 'html/latte'
    );
}


/// Create constant with directories
define('DATALATTE_MODULES', $project_path . $GLOBALS['xlatte_config']['modules']);
define('DATALATTE_MODULES_RELEASE', $project_path . '../' . $GLOBALS['xlatte_config']['output'] . "/releases");
define('DATALATTE_CORE', DATALATTE_MODULES . '/latte');
define('DATALATTE_APP', DATALATTE_MODULES . "/app");
define('DATALATTE_FILES', $project_path . $GLOBALS['xlatte_config']['output']);
define('DATALATTE_FILES_RELEASE', $project_path . '../' . $GLOBALS['xlatte_config']['output']);
define('DATALATTE_FILES_URL', '/' . $GLOBALS['xlatte_config']['output-url'] . '/');

//echo "[DATALATTE_MODULES_RELEASE " . DATALATTE_MODULES_RELEASE . "]";

/// Declare autoload
function dataLatte_Autoloader($className){

//    echo PHP_EOL . "[ Searching: $className]";

    // Check if class is core
    $onCore = DATALATTE_CORE . "/php/$className.php";

    // If class is in _core
    if(file_exists($onCore)){
//        echo PHP_EOL . "[ Found on CORE: $onCore]";
        include $onCore;

    }else{

        // Check on loaded modules
        foreach(LatteModule::$loadedModules as $module){

            // Possible path of file
            $path = String::combinePath($module->pathPhp, "$className.php");

            // Check if exists
            if(file_exists($path)){
//                echo PHP_EOL . "[ Found!: $path]";
                include $path;
            }else{
//                echo PHP_EOL . "[ Not found: $path]";
            }
        }
    }

}

spl_autoload_register("dataLatte_AutoLoader");

/**
 * Redirects warnings and errors to ajax pipeline
 * @param $errno
 * @param $errstr
 * @param $errfile
 * @param $errline
 * @return bool
 */
function errorHandler($errno, $errstr, $errfile, $errline){

    switch($errno){
        case E_USER_WARNING:
        case E_USER_NOTICE:
            ajaxWarn(sprintf("[$errstr]: $errstr in ($errfile:$errline)"));
            return true;
    }
}

set_error_handler("errorHandler");

