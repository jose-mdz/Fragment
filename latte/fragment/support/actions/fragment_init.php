<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 9/20/16
 * Time: 18:54
 */
@session_start();

$DEV_MODE = $_ENV['APPLICATION_ENV'] === 'development';
/**
 * Path of the Fragment directory
 */
define('FG_DIR', $DEV_MODE ? realpath(__DIR__ . "/../../../../html/fragment") : realpath(__DIR__ . "/../../../../"));
define('DONT_AUTOLOAD_MODULE_CONNECTION', true);

/**
 * Path of the latte directory
 */
if($DEV_MODE){
    include __DIR__ . '/../../../../html/fragment/latte/latte.php';
}else{
    include FG_DIR . '/latte/latte.php';
}


/**
 * Try to include config.php
 */
if(file_exists(FG_DIR . '/config.php')){
    include FG_DIR . '/config.php'; //
}else{
    $_SESSION['install-mode'] = true;
}

/**
 * If connection data present, connect.
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
}

/**
 * If no connection
 */
if (defined('NO_DB_CONNECTION')){
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