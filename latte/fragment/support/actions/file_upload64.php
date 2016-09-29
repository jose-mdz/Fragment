<?php

/**
 * Uploader
 *
 * Uploads files in base64 format.
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

// Name of file
$filename = filter_input(INPUT_POST, 'filename', FILTER_SANITIZE_STRING);

// Data of file
$data = filter_input(INPUT_POST, 'data', FILTER_SANITIZE_STRING);

// Thumb data
$description =  filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING);
$idparent =     filter_input(INPUT_POST, 'idparent', FILTER_SANITIZE_NUMBER_INT);
$width =        filter_input(INPUT_POST, 'width', FILTER_SANITIZE_NUMBER_INT);
$height =       filter_input(INPUT_POST, 'height', FILTER_SANITIZE_NUMBER_INT);
$key =          filter_input(INPUT_POST, 'key', FILTER_SANITIZE_STRING);

$extra = array(
    'idparent' => $idparent,
    'width' => $width,
    'height' => $height,
    'description' => $description,
    'key' => $key
);

// Validate variables
if($name == null || $id == null || $data == null || $filename == null){
    die("Params ERROR");
}

// Get owner of file
$owner = DataRecord::byAuto($name, $id);

// Check for permissions
if (
    ($owner instanceof Page && !$owner->canIWrite()) ||
    ($owner instanceof File && !$owner->canIEdit()) ||
    (!Session::me()->isRoot())
){
    die("upload64: Can't save file. You Don't have necessary permissions");
}

if($id < 1){
    $id = -1; // Mark for later linking
}

// Process files
$files = array(File::createFileFromBase64($data, $filename, $name, $id, $nothing, $extra));

// Echo response with files
echo json_encode(array(new DataLatteResponse(DataRecord::packArray($files))));