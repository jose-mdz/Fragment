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

//TODO: Home page should be loaded by configuration
if (!$q){
    $q = 'Jr2YAI_SYP'; // TODO: This is the C I T Y G A T E home
}

// Load page
$page = $GLOBALS['page'] = Page::byUrlQ($q);

if ($page){

    $ignoreMe = new Tag();

    // Load parent
    $GLOBALS['parent'] = $page->getParent();

    // Load fragments
    $GLOBALS['fragments'] = $page->getFragmentsWithRecords();

    // Load settings
    $GLOBALS['settings'] = Setting::byRecordAll($page);

    // Load global settings
    $GLOBALS['settings'] = array_merge($GLOBALS['settings'], Setting::getGlobal());

    // Convert to AssociativeArray
    $GLOBALS['settings'] = DL::associativeArray($GLOBALS['settings'], 'name');

    // Load configuration
    $GLOBALS['config'] = $page->getConfigurationArr();

    // Decide template to use
    $template = $page->template ? $page->template : 'index';

    // Include support of functions
    include __DIR__ . '/dispatch-functions.php';

    // Choose theme
    //TODO: Mechanism for theme configuration
    $theme = 'citygate';

    // Include template now
    include __DIR__ . "/../../../../../fragment/themes/$theme/$template.php";

}else{
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
    //TODO: This should include the error template
    die("Page not found: $q");
}