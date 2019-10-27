<?php

// Initialize fragment
include  __DIR__ . "/fragment_init.php";

if (defined('NO_DB_CONNECTION') && !defined('DB_CONNECTION_SOLVED')){
    header('Location: /fragment');
    die();
}

// Include support of functions
include __DIR__ . '/dispatch-functions.php';

// Raise initialized event
event_raise('dispatch_initialized');

// Name of item should come in a $q variable
$q = filter_input(INPUT_GET, 'q', FILTER_SANITIZE_STRING);

//region Load global settings
event_raise('before_settings_load');
$GLOBALS['settings'] = DL::associativeArray(Setting::getGlobals(), 'name');
event_raise('after_settings_load');
//endregion

//region If no q passed, Go Home
if (!$q){
    if(isset($settings['home'])){
        $q = $settings['home'];
    }else{
        die("No home");
    }
}
//endregion

//region Choose theme
event_raise('before_theme_choose');
if(!isset($GLOBALS['fragment-theme']) && isset($settings['theme'])){
    $GLOBALS['fragment-theme'] = $settings['theme'];
    event_raise('after_theme_choose', $settings['theme'], $theme_path);
}
if (isset($GLOBALS['fragment-theme'])){
    $theme = $GLOBALS['fragment-theme'];
    $theme_path = __DIR__ . "/../../../../../../fragment/themes/$theme";
}
//endregion

//region Load page
event_raise('before_page_load');
$page = $GLOBALS['page'] = Page::byUrlQ($q);
event_raise('after_page_load', $page);
//endregion

if ($page && ($page->online == 1 || Session::isLogged())){

    //region Prepare API variables
    // Load parent
    $GLOBALS['parent'] = $page->getParent();

    // Load fragments
    $GLOBALS['fragments'] = $page->getAllFragments();

    // Load page settings
    $GLOBALS['settings'] = array_merge($GLOBALS['settings'], $page->getAllSettings());

    // Convert to AssociativeArray
    $GLOBALS['settings'] = DL::associativeArray($GLOBALS['settings'], 'name');

    // Gather settings specification
    $GLOBALS['settings_json'] = $page->getAllSettingsJSON();

    // Load configuration
    $GLOBALS['config'] = $page->getConfigurationArr();

    // Decide template to use
    $GLOBALS['template'] = $page->template ? $page->template : 'index';

    // Theme URI for including
    $GLOBALS['theme_uri'] = "/fragment/themes/" . $GLOBALS["fragment-theme"];

    //endregion

    //region include _head.php
    if(event_raise('before_head_include') !== false){
        if (file_exists("$theme_path/_head.php")){
            include "$theme_path/_head.php";
        }
    }
    event_raise('after_head_include');
    //endregion

    //region Include Template
    if(event_raise('before_template_include') !== false) {
        include "$theme_path/" . $GLOBALS['template'] . ".php";
    }
    event_raise('after_template_include');
    //endregion

    //region Include _foot.php
    if(event_raise('before_foot_include') !== false){
        if (file_exists("$theme_path/_foot.php")){
            include "$theme_path/_foot.php";
        }
    }
    event_raise('after_foot_include');
    //endregion

}else{

    // Magic Error
    header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found");

    $GLOBALS['error-type'] = 'http';
    $GLOBALS['error-code'] = 404;
    $GLOBALS['error-description'] = $strings['pageNotFound404'];

    event_raise('before_dispatch_error');
    if (file_exists("$theme_path/_error.php")){
        include "$theme_path/_error.php";
    }
    event_raise('error_dispatched');

}

event_raise('dispatch_finalized');