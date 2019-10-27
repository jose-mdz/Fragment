<?php

if(FG_DATA_DRIVER !== FG_SQLITE){
    die("Not configured for SQLite");
}

if(isset($_ENV['FRAGMENT_LANG'])){
    if (!file_exists(FG_DIR . '/config.php')){

        Console::log("Saving connection with lang: " . $_SESSION['tmp-lang']);
        $_SESSION['tmp-lang'] = $_ENV['FRAGMENT_LANG'];
        Server::checkConnectionOk();
    }
}else{
    Console::log("Saving connection with default lang");
    Server::checkConnectionOk();
}

if (
    $_SESSION['install-mode'] === true &&
    isset($_ENV['FRAGMENT_ROOT_PASSWORD']) &&
    $_ENV['FRAGMENT_ROOT_PASSWORD']
){

    Console::log("Running default setup for SQLite3");
    Server::installHtAccess();
    Server::installDatabase();
    Server::installInitialRecords($_ENV['FRAGMENT_ROOT_PASSWORD']);
    define('FG_DB_OK', true);
    define('CANT_PAGINATE', true);
    define('DB_CONNECTION_SOLVED', true);

    unset($_SESSION['install-mode']);

}