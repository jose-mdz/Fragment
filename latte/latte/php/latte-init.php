<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 5/5/16
 * Time: 11:33
 */

function init_trace(){
    if(!(isset($_ENV['LOG_LEVEL']) && strtolower($_ENV['LOG_LEVEL']) === 'trace')){
        return;
    }

    $fh = fopen('php://stdout','w');
    fwrite($fh, "[" . date("Y-m-d H:i:s", time()) . "] [INIT] " . call_user_func_array('sprintf', func_get_args()) . PHP_EOL);
    fclose($fh);
}

function ____exchk($path){
    return file_exists($path) ? '( EXIST ) ' : '(NOEXIST) ';
}

if (session_status() == PHP_SESSION_NONE){
    @session_start();
}

// Load configuration
$ON_RELEASE = defined('ON_RELEASE') && ON_RELEASE;

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
        'output'  => 'html/latte',
        'output-url' => 'latte'
    );
}

/// Create constant with directories
define('DATALATTE_MODULES', $project_path . $GLOBALS['xlatte_config']['modules']);
define('DATALATTE_MODULES_RELEASE', $project_path . $GLOBALS['xlatte_config']['output-url'] . "/releases");
define('DATALATTE_CORE', DATALATTE_MODULES . '/latte');
define('DATALATTE_APP', DATALATTE_MODULES . "/app");
define('DATALATTE_FILES', $project_path . $GLOBALS['xlatte_config']['output']);
define('DATALATTE_FILES_RELEASE', $project_path . $GLOBALS['xlatte_config']['output-url']);
define('DATALATTE_FILES_URL', '/' . $GLOBALS['xlatte_config']['output-url'] . '/');

init_trace("ON_RELEASE: %s", $ON_RELEASE ? 'YES' : 'NO');
init_trace(____exchk($project_path) . "project_path: %s", $project_path);
init_trace(____exchk($config_path) . "config_path: %s", $config_path);
init_trace(____exchk(DATALATTE_MODULES) . "DATALATTE_MODULES: %s", DATALATTE_MODULES);
init_trace(____exchk(DATALATTE_CORE) . "DATALATTE_CORE: %s", DATALATTE_CORE);
init_trace(____exchk(DATALATTE_APP) . "DATALATTE_APP: %s", DATALATTE_APP);
init_trace(____exchk(DATALATTE_FILES) . "DATALATTE_FILES: %s", DATALATTE_FILES);
init_trace(____exchk(DATALATTE_FILES_URL) . "DATALATTE_FILES_URL: %s", DATALATTE_FILES_URL);
init_trace(____exchk($config_path_release) . "config_path_release: %s", $config_path_release);
init_trace(____exchk(DATALATTE_MODULES_RELEASE) . "DATALATTE_MODULES_RELEASE: %s", DATALATTE_MODULES_RELEASE);
init_trace(____exchk(DATALATTE_FILES_RELEASE) . "DATALATTE_FILES_RELEASE: %s", DATALATTE_FILES_RELEASE);

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
            $path = DLString::combinePath($module->pathPhp, "$className.php");

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

