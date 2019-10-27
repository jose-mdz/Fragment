<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 9/20/16
 * Time: 18:54
 */
@session_start();
/**
 * Path of the Fragment directory
 */
define('FG_DIR', realpath(__DIR__ . "/../../../../../"));
define('DONT_AUTOLOAD_MODULE_CONNECTION', true);
define('FG_SQLITE_PATH', FG_DIR . "/../../data/fragment.db");
define('FG_DATA_DRIVER', isset($_ENV['FRAGMENT_DATA_DRIVER']) ? $_ENV['FRAGMENT_DATA_DRIVER'] : 'mysql');
define('FG_SQLITE', 'sqlite');

/**
 * Path of the latte directory
 */
include FG_DIR . '/latte/latte.php';

/**
 * Try to include config.php
 */
if(file_exists(FG_DIR . '/config.php')){
    include FG_DIR . '/config.php'; //
}else{
    $_SESSION['install-mode'] = true;
}

/**
 * Check for SQLite indication
 */
if(FG_DATA_DRIVER === FG_SQLITE){

    if(!file_exists(FG_SQLITE_PATH)){
        // Try to auto-install
        define('AUTO_INSTALL_SQLITE', true);
    }

    if(file_exists(FG_SQLITE_PATH)){

        // Try to connect to database
        try{
            Console::log("SQLite: " . FG_SQLITE_PATH);
            $driver = PdoDataDriver::fromSQLite(FG_SQLITE_PATH);
            DataLatte::$current = new DataConnection($driver);
            define('FG_DB_OK', true);
            define('CANT_PAGINATE', true);
        }catch(Exception $e){
            define('NO_DB_CONNECTION', 1);
        }

    }else{
        define('NO_DB_CONNECTION', 1);
        $_SESSION['install-mode'] = true;
    }


}else{


    /**
     * Go with the good ol' MySQL
     */

    /**
     * If connection data present, connect.
     */
    if(    defined('FG_DB_NAME')
        && defined('FG_DB_USER')
        && defined('FG_DB_PASSWORD')
        && defined('FG_DB_HOST')){

        // Try to connect to database
        try{
            $driver = PdoDataDriver::fromMySQL(FG_DB_HOST, FG_DB_NAME, FG_DB_USER, FG_DB_PASSWORD);
            DataLatte::$current = new DataConnection($driver);
            define('FG_DB_OK', true);
        }catch(Exception $e){
            define('NO_DB_CONNECTION', 1);
        }
    }else{
        define('NO_DB_CONNECTION', 2);
    }
}

/**
 * If no connection
 */
if (defined('NO_DB_CONNECTION')){
    Console::log('NO_DB_CONNECTION');
    $_SESSION['install-mode'] = true;
}

/**
 * Select temporary language if no config
 */
if(!defined('FG_LANG')){
    if ($_SESSION['tmp-lang']){
        define('FG_TMP_LANG', $_SESSION['tmp-lang']);
        define('FG_TMP_LANG_SET', true);
    }else{
        define('FG_TMP_LANG', 'en');
        define('FG_TMP_LANG_SET', false);
    }
}

// Load fragment module
LatteModule::loadMain('fragment', defined('FG_LANG') ? FG_LANG : FG_TMP_LANG, false);

if (defined('AUTO_INSTALL_SQLITE')){
    include "sqlite_auto_install.php";
}

/**
 * Include theme's _include.php
 */
if (defined('FG_DB_OK') && !isset($_SESSION['install-mode'])){
    // Try to load theme's _backend
    $ts = Setting::getGlobal('theme');

    if ($ts){
        $path = FG_DIR . '/themes/' . $ts->value . '/_include.php';

        if (file_exists($path)){
            include $path;
        }
    }

}