<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/13/16
 * Time: 15:20
 */

function fragment($key){
    global $fragments;

    $fragment = $fragments[$key];

    if ($fragment){

        $tag = tag($fragment['tag'] ? $fragment['tag'] : 'div');

        // Standard Fragment class
        $tag->addClass('fragment');

        // Key class
        $tag->addClass($key);

        // Content of Fragment
        if($fragment['record']){

            $tag->text($fragment['record']->value);
        }

        echo $tag->render();

    }


}

/**
 * Prints the <head> tags
 */
function head(){
    global $page, $settings;

    $title = $settings['title'] ? sprintf($settings['title']->value, $page->title) : $page->title;

    echo "<title>$title</title>";
    echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';

    // Print stylesheets
    if(isset($GLOBALS['fragment-stylesheets'])){
        foreach($GLOBALS['fragment-stylesheets'] as $path){
            echo "<link href=\"$path\" rel=\"stylesheet\">";
        }
    }

}

/**
 * Echoes the page
 */
function page(){
    global $page, $fragments;

    // Print title
    echo "<h1>$page->title</h1>";

    // Print fragments
    foreach($fragments as $key => $f){
        fragment($key);
    }

    // Print scripts
    scripts();
}

/**
 * Registers the specified script
 *
 * @param $path
 * @param $relativeToTheme
 */
function register_script($path, $relativeToTheme = true){
    if(!isset($GLOBALS['fragment-scripts'])){
        $GLOBALS['fragment-scripts'] = array();
    }

    if (array_search($path, $GLOBALS['fragment-scripts']) === false){
        $theme = $GLOBALS['fragment-scripts'];
        $GLOBALS['fragment-scripts'][] = $relativeToTheme ? "/fragment/themes/$theme/$path" : $path;
    }
}

/**
 * Registers the specified script source
 */
function register_script_source($source){
    if(!isset($GLOBALS['fragment-scripts'])){
        $GLOBALS['fragment-scripts'] = array();
    }
    $source = "source:$source";
    if (array_search($source, $GLOBALS['fragment-scripts']) === false){
        $GLOBALS['fragment-scripts'][] = $source;
    }
}

/**
 * Registers the specified stylesheet
 *
 * @param $path
 * @param $relativeToTheme
 */
function register_stylesheet($path, $relativeToTheme = true){
    if(!isset($GLOBALS['fragment-stylesheets'])){
        $GLOBALS['fragment-stylesheets'] = array();
    }
    if (array_search($path, $GLOBALS['fragment-stylesheets']) === false){
        $theme = $GLOBALS['fragment-theme'];
        $GLOBALS['fragment-stylesheets'][] = $relativeToTheme ? "/fragment/themes/$theme/$path" : $path;
    }
}

/**
 * Prints the scripts of the document
 */
function scripts(){
    event_raise('before_scripts_print');
    if(isset($GLOBALS['fragment-scripts'])){
        foreach($GLOBALS['fragment-scripts'] as $path){
            if (strpos($path, "source:") === 0){
                echo "<script>" . PHP_EOL . substr($path, 7) . PHP_EOL .  "</script>";
            }else{
                echo "<script href=\$path\"></script>";
            }
        }
    }
    event_raise('after_scripts_print');
}