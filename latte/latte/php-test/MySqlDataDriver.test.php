<?php

include '../php/DataDriver.php';
include '../php/MySqlDataDriver.php';
include '../php/MySqlDataReader.php';

echo 'Creating connection...' . PHP_EOL;
$driver = new MySqlDataDriver('root', 'docker', '127.0.0.1', 'fragment');

echo 'Creating table...' . PHP_EOL;
$driver->query("CREATE TABLE something(id integer )");

echo 'Dropping table...' . PHP_EOL;
$driver->query("DROP TABLE something");

echo 'Getting reader...' . PHP_EOL;
$reader = $driver->getReader('SELECT NOW()');

echo 'Iterating reader...' . PHP_EOL;
while($data = $reader->read()){
    print_r($data);
}
