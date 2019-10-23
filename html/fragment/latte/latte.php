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

/// Set default timezone
date_default_timezone_set('America/Mexico_City');

 if(file_exists(__DIR__ . '/releases/latte/latte.php') && !$DEV_MODE){
     $ON_RELEASE = true;
     include __DIR__ . '/releases/latte/latte.php';
 }else{
     include __DIR__ . (isset($PROJECT_OFFSET) ? str_repeat('/..', $PROJECT_OFFSET) : '') . '/../../latte/latte/php/latte-init.php';
 }
