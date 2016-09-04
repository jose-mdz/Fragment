<?php


include '../../../../latte.php';

/**
 * Uploader
 *
 * Uploads files in base64 format.
 *
 * Necessary variables are
 *
 * name - Entity name
 * id - Entity id
 * [File data]
 *
 */

LatteModule::loadMain('fragment');

// Name of item should come in a $q variable
$q = filter_input(INPUT_GET, 'q', FILTER_SANITIZE_STRING);

// Load global settings
$GLOBALS['settings'] = DL::associativeArray(Setting::getGlobal(), 'name');

// If no q passed.
if (!$q){
    if(isset($settings['home'])){
        $q = $settings['home'];
    }else{
        die("No home");
    }
}

// Choose theme
if(isset($settings['theme'])){
    $theme = $GLOBALS['fragment-theme'] = $settings['theme'];
}else{
    die("No theme");
}

// Load page
$page = $GLOBALS['page'] = Page::byUrlQ($q);

if ($page){

    $ignoreMe = new Tag();

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
    $template = $page->template ? $page->template : 'index';

    // Include support of functions
    include __DIR__ . '/dispatch-functions.php';

    // Include template now
    include __DIR__ . "/../../../../../fragment/themes/$theme/$template.php";

}else{
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
    //TODO: This should include the error template
    die("Page not found: $q");
}