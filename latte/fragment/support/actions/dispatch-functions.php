<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/13/16
 * Time: 15:20
 */

define('FRAGMENT_DISPATCH_LOADED_MODULES', 'fragment-dispatch-loaded-modules');

/**
 * Prints the fragment of specified key
 * @param $key
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
 * Prints the fragments of the page
 */
function fragments(){
    global $fragments;

    // Print fragments
    foreach($fragments as $key => $f){
        fragment($key);
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

    // Print styles
    styles();


}

/**
 * Prints the heading of the page
 */
function heading(){
    global $page;

    // Print title
    echo "<h1>$page->title</h1>";
}

/**
 * Inlines the specified script path
 * @param $path
 */
function inline_script($path){
    if(strpos($path, 'http:') === 0 || strpos($path, 'https:') === 0){
        echo "<script href=\$path\"></script>";
    }else{
        if(strpos($path, '/') === 0){
            $file_path = realpath(FG_DIR . '/../' . $path);
        }else{
            $file_path = realpath(__DIR__ . '/' .  $path);
        }

        echo "<!-- FILE PATH: $file_path exists: " . file_exists($file_path) . "-->";

        echo "
        <script>
        "  . Minimizer::minify_js(file_get_contents($file_path)) . "
        </script>
        ";
    }
}

/**
 * Inlines the specified stylesheet path
 * @param $path
 */
function inline_stylesheet($path){
    if(strpos($path, 'http:') === 0 || strpos($path, 'https:') === 0){
        echo "<link href=\"$path\" rel=\"stylesheet\">";
    }else{
        if(strpos($path, '/') === 0){
            $file_path = realpath(FG_DIR . '/../' . $path);
        }else{
            $file_path = realpath(__DIR__ . '/' .  $path);
        }

        echo "<!-- FILE PATH: $file_path exists: " . file_exists($file_path) . "-->";

        echo "
        <style>
        "  . Minimizer::minify_css(file_get_contents($file_path)) . "
        </style>
        ";
    }
}

/**
 * Prints the full page, including all its fragments
 */
function page(){

    // Title
    heading();

    // Content
    fragments();

    // Print scripts
    scripts();
}

/**
 * Registers the tags needed for the specified module, and loads the module
 * @param $name
 */
function register_module($name){
    $module = LatteModule::memoryLoad($name, FG_LANG);
    $includes = $module->getIncludeChain();

    foreach($includes as $m){
        register_module_tags($m);
    }

    register_module_tags($name);
}

/**
 * Registers tags of module without checking for includes
 * @param $name
 */
function register_module_tags($name){

    if (!isset($GLOBALS[FRAGMENT_DISPATCH_LOADED_MODULES])){
        $GLOBALS[FRAGMENT_DISPATCH_LOADED_MODULES][] = array();
    }

    if (array_search($name, $GLOBALS[FRAGMENT_DISPATCH_LOADED_MODULES]) !== false){
        return;
    }

    $module = LatteModule::memoryLoad($name, FG_LANG);
    $css = $module->getCssPaths();
    $js = $module->getJsPaths();

    foreach($css as $path){
        register_stylesheet($path, false);
    }

    foreach($js as $path){
        register_script($path, false);
    }

    if (isset($GLOBALS[FRAGMENT_DISPATCH_LOADED_MODULES])){

        $GLOBALS[FRAGMENT_DISPATCH_LOADED_MODULES][] = $name;
    }else{
        $GLOBALS[FRAGMENT_DISPATCH_LOADED_MODULES] = array($name);
    }
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
    global $settings;

    event_raise('before_scripts_print');
    if(isset($GLOBALS['fragment-scripts'])){
        foreach($GLOBALS['fragment-scripts'] as $path){
            if (strpos($path, "source:") === 0){
                echo "<script>" . PHP_EOL . Minimizer::minify_js(substr($path, 7)) . PHP_EOL .  "</script>";
            }else{
                if(!!$settings['inline-js']){
                    inline_script($path);
                }else{
                    echo "<script src=\"$path\"></script>";
                }
            }
        }
    }
    event_raise('after_scripts_print');
}

/**
 * Prints the styles of the page
 */
function styles(){
    global $settings;

    event_raise('before_styles_print');

    // Print stylesheets
    if(isset($GLOBALS['fragment-stylesheets'])){
        foreach($GLOBALS['fragment-stylesheets'] as $path){
            if(!!$settings['inline-css']){
                inline_stylesheet($path);
            }else{
                echo "<link href=\"$path\" rel=\"stylesheet\">";
            }
        }
    }

    event_raise('after_styles_print');
}