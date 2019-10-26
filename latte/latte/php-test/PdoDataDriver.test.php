<?php

include '../php/DataReader.php';
include '../php/DataDriver.php';
include "../php/PdoDataReader.php";
include "../php/PdoDataDriver.php";

function testPdo(PdoDataDriver $driver, $query){

    echo 'Creating table...' . PHP_EOL;
    $driver->exec("CREATE TABLE something(id integer )");
    echo $driver->errorCode() . PHP_EOL;

    echo 'Inserting...' . PHP_EOL;
    $insertResult = $driver->exec("INSERT INTO something(id) values(0)");
    $id = $driver->lastInsertId();

    echo 'Dropping table...' . PHP_EOL;
    $driver->exec("DROP TABLE something");

    echo 'Getting reader...' . PHP_EOL;
    $reader = $driver->getReader($query);

    echo 'Iterating reader...' . PHP_EOL;
    while($data = $reader->read()){
        print_r($data);
    }

}

//echo 'Creating MySQL connection...' . PHP_EOL;
//$mysql = PdoDataDriver::fromMySQL('127.0.0.1', 'fragment', 'root', 'docker');
//
//testPdo($mysql, "SELECT NOW()");

echo 'Creating SQLite connection...' . PHP_EOL;
$sqlite = PdoDataDriver::fromSQLite(':memory:');

testPdo($sqlite, "SELECT DATE()");
