<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/12/16
 * Time: 14:13
 */

include __DIR__ . '/../../../../latte.php';

// Load app
LatteModule::loadMain('fragment', 'es');

/// Create document
$doc = new LatteDocument("Fragment");

if (Session::isLogged()){

    // Load groups
    Session::me()->loadLoginData();

    // Pack user
    $doc->addScript("window['loggedFragmentUser'] = " . json_encode(Session::me()->pack()));
}