<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 9/19/16
 * Time: 11:27
 */

// Patch: has to be here to load tag class
(new Tag());

// Plugins directory
const FRAGMENT_PLUGINS_DIR = DATALATTE_FILES . "/../plugins";

// Global variable to store plugin event registrations
$GLOBALS['fragment_plugin_events'] = array();

/**
 * Registers events for plugins
 * @param $name
 * @param $callback
 * @return number Index of registration
 */
function event_register($name, $callback){
    global $fragment_plugin_events;

    if(!isset($fragment_plugin_events[$name])){
        $fragment_plugin_events[$name] = array();
    }

    $fragment_plugin_events[$name][] = $callback;

    return sizeof($fragment_plugin_events[$name]) - 1;
}

/**
 * Raises the event
 * @param mixed $name,...
 * @return mixed[]
 */
function event_raise($name){
    global $fragment_plugin_events;
    $results = array();

    if(isset($fragment_plugin_events[$name])){
        foreach($fragment_plugin_events[$name] as $callback){
            $args = func_get_args(); array_shift($args);
            $results[] = call_user_func_array($callback, $args);
//            echo "[CALLED " . var_export($callback, true) . ", " . var_export($args, true) . "]";
        }
    }
    return $results;
}

//region Scan plugins directory & include them
foreach(scandir(FRAGMENT_PLUGINS_DIR) as $dir){
    if($dir == '.' || $dir == '..') continue;

    $path = FRAGMENT_PLUGINS_DIR . "/$dir";

    // Include plugin file
    if (file_exists("$path/$dir.php")){
        include "$path/$dir.php";
    }else{
        die("Can't initialize plugin: $dir ($dir.php) missing");
    }
}
//endregion