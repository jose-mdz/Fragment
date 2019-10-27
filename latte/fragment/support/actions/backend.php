<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/12/16
 * Time: 14:13
 */

// Initialize fragment
include  __DIR__ . "/fragment_init.php";

/// Create document
$doc = new LatteDocument("Fragment");

if (defined('NO_DB_CONNECTION') && !defined('DB_CONNECTION_SOLVED')){

    if(defined('FG_TMP_LANG_SET') && FG_TMP_LANG_SET == false){
        $doc->addScript("window['fragmentMustChooseLang'] = true;");
    }

    $doc->addScript("window['fragmentNoDbConnection'] = true;");

}else{
    if (Session::isLogged()){

        // Load groups
        Session::me()->loadLoginData();

        // Pack user
        $doc->addScript("window['loggedFragmentUser'] = " . json_encode(Session::me()->pack()));
    }
}

// Raise Event
event_raise('backend_render', $doc);