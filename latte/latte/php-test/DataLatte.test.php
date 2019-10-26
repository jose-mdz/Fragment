<?php

include '../php/DataReader.php';
include '../php/DataDriver.php';
include "../php/PdoDataReader.php";
include "../php/PdoDataDriver.php";
include "../php/DataConnection.php";
include "../php/DataLatte.php";

echo 'Can initialize...' . PHP_EOL;
$canInit = DataLatte::canInit();
echo ($canInit ? 'Yes' : 'No') . PHP_EOL;