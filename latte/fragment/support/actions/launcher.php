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

if (Session::isLogged()){

    // Load groups
    Session::me()->loadLoginData();

    // Pack user
    $doc->addScript("window['loggedFragmentUser'] = " . json_encode(Session::me()->pack()));
}