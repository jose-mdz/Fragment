<?php


/**
 * Uploader
 *
 * Necessary variables are
 *
 * name - Entity name
 * id - Entity id
 * [File data]
 *
 */

// Initialize fragment
include  __DIR__ . "/fragment_init.php";

// Extract name of owner entity
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);

// Extract id of owner
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);

// Validate variables
if($name == null || $id == null){
    die("Params ERROR");
}

if($id < 1){
    $id = -1; // Mark for later linking
}

// Process files
$files = File::createFiles($name, $id);

// Echo response with files
echo json_encode(array(new DataLatteResponse(DataRecord::packArray($files))));