<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 9/21/16
 * Time: 12:21
 */
class Server{

    /**
     * @neverRemote
     * @param $sql
     */
    private static function multiQuery($sql){
        $mysqli = new mysqli(FG_DB_HOST, FG_DB_USER, FG_DB_PASSWORD, FG_DB_NAME);

        if ($mysqli->connect_errno) {
            echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
        }


        if (!$mysqli->multi_query($sql)) {
            echo "Multi query failed: (" . $mysqli->errno . ") " . $mysqli->error;
        }

//        do {
//            if ($res = $mysqli->store_result()) {
//                var_dump($res->fetch_all(MYSQLI_ASSOC));
//                $res->free();
//            }
//        } while ($mysqli->more_results() && $mysqli->next_result());
    }

    /**
     * Returns a value indicating if the parent folder of fragment can be written
     * @remote
     */
    public static function canWriteHtAccess(){
        return is_writable(FG_DIR . '/../.');
    }

    /**
     * Checks if there is a current valid connection with a database
     * @remote
     * @return boolean
     * @throws SecurityException
     */
    public static function checkConnectionOk(){
        if($_SESSION['install-mode'] !== true) throw new SecurityException();

        return defined('FG_DB_OK');
    }

    /**
     * Checks if server can write on fragment folder
     *
     * @remote
     * @return boolean
     */
    public static function checkFragmentFolderWritable(){
        return is_writable(FG_DIR);
    }

    /**
     * Returns a value indicating if the database has no tables
     * @remote
     * @return boolean
     */
    public static function isDatabaseEmpty(){
        $c = DL::getCache('SHOW tables');

        return sizeof($c) == 0;
    }

    /**
     * Returns a valude indicating if the .htaccess on root is present
     *
     * @remote
     * @return boolean
     */
    public static function isHtAccessPresent(){
        return file_exists(FG_DIR . '/../.htaccess');
    }

    /**
     * Checks if mod_rewrite is enabled
     * @remote
     * @return number 1. Yes, 2. No, 3. Uncertain
     */
    public static function checkModRewriteEnabled(){
        if(!function_exists('apache_get_modules') ){
            return 3;
        }

        if(in_array('mod_rewrite',apache_get_modules()))
            return 1;

        return 2;

    }

    /**
     * Returns the source of the htaccess that should be present on installation
     * @remote
     */
    public static function getHtAccessSource(){
        return file_get_contents(FG_DIR . '/files/install/htaccess_original.txt');
    }

    /**
     * Installs the database included in installer
     * @remote
     * @return string OK if success, error otherwise
     * @throws SecurityException
     */
    public static function installDatabase(){
        if($_SESSION['install-mode'] !== true) throw new SecurityException();

        $sql_file = FG_DIR . '/files/install/fragment.sql';

        if (file_exists($sql_file)){
            self::multiQuery(file_get_contents($sql_file));
        }else{
            return "Can't find: files/install/fragment.sql";
        }

        return 'OK';
    }

    /**
     * Copies the htaccess to the
     * @remote
     * @return number|boolean
     */
    public static function installHtAccess(){
//        $old = umask(0);
//        umask(0777);
        $r = file_put_contents(FG_DIR . '/../.htaccess', self::getHtAccessSource());
//        umask($old);
        return $r;
    }

    /**
     * Adds records for an initial database
     * @remote
     * @return string OK if success, error otherwise
     * @throws SecurityException
     */
    public static function installInitialRecords($rootPassword){
        if($_SESSION['install-mode'] !== true) throw new SecurityException();

        $sql_file = FG_DIR . '/files/install/initial.sql';

        if (file_exists($sql_file)){
            self::multiQuery(file_get_contents($sql_file));
            self::multiQuery("
              UPDATE user 
              SET password = md5('$rootPassword') 
              WHERE uname = 'root'
              ");
        }else{
            return "Can't find: files/install/initial.sql";
        }

        return 'OK';

    }

    /**
     * Saves the specified connection parameters
     * @remote
     * @param string $user
     * @param string $db
     * @param string $pass
     * @param string $host
     * @param string $lang
     * @return string 'OK' for no problems, string key describing problem otherwise
     * @throws SecurityException
     */
    public static function saveConnectionParameters($user, $pass, $db, $host, $lang){
        if($_SESSION['install-mode'] !== true) throw new SecurityException();

        $success = false;

        // Try to connect
        try{
            $x = new DataConnection($user, $pass, $host, $db, false);
            $success = !!($x->getSingle('SELECT NOW()'));
        }catch(Exception $e){
            return $e . '';
        }

        if (!$success){
            return 'connectionUnsuccParams';
        }

        // Use language selected for installer
        //$lang = FG_TMP_LANG;

        // Timestamp
        $stamp = date('d/M/Y H:i:s');

        // Save config.php
        $write = file_put_contents(FG_DIR . '/config.php', '<?php' . "
/**
 * Fragment Configuration File
 * Automatically created: $stamp
 */

/** MySQL database name */
define('FG_DB_NAME', '$db');

/** MySQL database name */
define('FG_DB_USER', '$user');

/** MySQL database name */
define('FG_DB_PASSWORD', '$pass');

/** MySQL database name */
define('FG_DB_HOST', '$host');

/** Language to use in fragment */
define('FG_LANG', '$lang');");

        chmod(FG_DIR . '/config.php', 0777);

        if ($write === FALSE){
            return 'cantWriteConfigFile';
        }

        return 'OK';

    }

    /**
     * Changes the temporary language (used for install wizard)
     *
     * @remote
     * @param string $lang
     */
    public static function setTemporaryLang($lang){
        $_SESSION['tmp-lang'] = $lang;
    }

}