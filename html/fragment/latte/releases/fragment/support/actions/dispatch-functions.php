<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/13/16
 * Time: 15:20
 */

// Patch: has to be here to load tag
(new Tag());

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

function head(){
    global $page, $settings;

    $title = $settings['title'] ? sprintf($settings['title']->value, $page->title) : $page->title;

    echo "<title>$title</title>";
    echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';

    // Dump analytics
    if ($settings['analytics-account']){
        $ua = $settings['analytics-account']->value;
        echo "
        <!-- Google Analytics -->
        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', '$ua', 'auto');
        ga('send', 'pageview');
        </script>
        ";
    }

    // Dump stylesheets
    if(isset($GLOBALS['fragment-stylesheets'])){
        foreach($GLOBALS['fragment-stylesheets'] as $path){
            echo "<link href=\"$path\" rel=\"stylesheet\">";
        }
    }

}

function page(){
    global $page, $fragments;

    // Print title
    echo "<h1>$page->title</h1>";

    // Print fragments
    foreach($fragments as $key => $f){
        fragment($key);
    }

}

/**
 * Registers the specified stylesheet
 * @param $path
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