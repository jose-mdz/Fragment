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

/**
 * Path of the latte directory
 */
include FG_DIR . '/latte/latte.php';

/**
 * Try to include config.php
 */
if(file_exists(FG_DIR . '/config.php')){
    include FG_DIR . '/config.php'; //
}

/**
 * If connection data present
 */
if(    defined('FG_DB_NAME') && defined('FG_DB_USER')
    && defined('FG_DB_PASSWORD') && defined('FG_DB_HOST')){
    // Try to connect to database
    try{
        DataLatte::$current = new DataConnection(FG_DB_USER, FG_DB_PASSWORD, FG_DB_HOST, FG_DB_NAME);
        define('FG_DB_OK', true);
    }catch(Exception $e){
        define('NO_DB_CONNECTION', 1);
    }
}else{
    define('NO_DB_CONNECTION', 2);
    $_SESSION['install-mode'] = true;
}

if(!defined('FG_LANG')){
    if ($_SESSION['tmp-lang']){
        define('FG_TMP_LANG', $_SESSION['tmp-lang']);
        define('FG_TMP_LANG_SET', true);
    }else{
        define('FG_TMP_LANG', 'en');
        define('FG_TMP_LANG_SET', false);
    }
}

LatteModule::loadMain('fragment', defined('FG_LANG') ? FG_LANG : FG_TMP_LANG, false);