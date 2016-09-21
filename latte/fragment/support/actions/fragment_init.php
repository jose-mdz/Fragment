<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 9/20/16
 * Time: 18:54
 */

define('FG_DIR', realpath(__DIR__ . "/../../../../../"));

include FG_DIR . '/latte/latte.php';

if(file_exists(FG_DIR . '/config.php')){
    include FG_DIR . '/config.php';
}

if(defined('FG_DB_NAME') && defined('FG_DB_USER') && defined('FG_DB_PASSWORD')){
    DataLatte::$current = new DataConnection(FG_DB_USER, FG_DB_PASSWORD, FG_DB_HOST, FG_DB_NAME);
}else{
    die("No connection");
}

LatteModule::loadMain('fragment', FG_LANG, false);