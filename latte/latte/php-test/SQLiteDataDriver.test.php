<?php

include '../php/DataDriver.php';
include "../php/SQLiteDataReader.php";
include "../php/SQLiteDataDriver.php";

echo 'Creating connection...' . PHP_EOL;
$driver = new SQLiteDataDriver(':memory:');

echo 'Creating table...' . PHP_EOL;
$driver->query("CREATE TABLE something(id integer )");

echo 'Dropping table...' . PHP_EOL;
$driver->query("DROP TABLE something");

echo 'Getting reader...' . PHP_EOL;
$reader = $driver->getReader("SELECT date()");

echo 'Iterating reader...' . PHP_EOL;
while($data = $reader->read()){
    print_r($data);
}
