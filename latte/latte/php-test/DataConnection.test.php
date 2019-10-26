<?php

include '../php/DataReader.php';
include '../php/DataDriver.php';
include "../php/PdoDataReader.php";
include "../php/PdoDataDriver.php";
include "../php/DataConnection.php";

echo 'Creating SQLite driver...' . PHP_EOL;
$sqlite = PdoDataDriver::fromSQLite(':memory:');

echo 'Creating connection...' . PHP_EOL;
$x = new DataConnection($sqlite);

echo 'Getting Single...' . PHP_EOL;
$single = $x->getSingle('SELECT DATE()');
echo $single . PHP_EOL;

