<?php

/*
 * LATTE
 * Make an require() or include() to this file to get
 * Latte Framework functionality.
 */

/**
 * OFFSET SPECIALLY IMPLEMENTED FOR fragment
 * Not a part of standard latte.
 */
$PROJECT_OFFSET = 1;

function boot_trace(){
    if(!(isset($_ENV['LOG_LEVEL']) && strtolower($_ENV['LOG_LEVEL']) === 'trace')){
        return;
    }

    $fh = fopen('php://stdout','w');
    fwrite($fh, "[" . date("Y-m-d H:i:s", time()) . "] [BOOT] " . call_user_func_array('sprintf', func_get_args()) . PHP_EOL);
    fclose($fh);
}

/// Set default timezone
date_default_timezone_set('America/Mexico_City');

$file = '';

 if(file_exists(__DIR__ . '/releases/latte/latte.php')){
     define('ON_RELEASE', true);
     boot_trace("Choosing RELEASE for boot");
     $file = __DIR__ . '/releases/latte/latte.php';
 }else{
     boot_trace("Choosing NON-RELEASE for boot");
     $file = __DIR__ . (isset($PROJECT_OFFSET) ? str_repeat('/..', $PROJECT_OFFSET) : '') . '/../../latte/latte/php/latte-init.php';
 }

 boot_trace("Booting with file: $file");
 include $file;
