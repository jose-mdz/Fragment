<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 9/28/16
 * Time: 12:23
 */

// Initialize fragment
include  __DIR__ . "/fragment_init.php";

// Extract id of file to replace
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);

// Data of file
$data = filter_input(INPUT_POST, 'data', FILTER_SANITIZE_STRING);

// Thumb data
$description =  filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING);
$width =        filter_input(INPUT_POST, 'width', FILTER_SANITIZE_NUMBER_INT);
$height =       filter_input(INPUT_POST, 'height', FILTER_SANITIZE_NUMBER_INT);
$key =          filter_input(INPUT_POST, 'key', FILTER_SANITIZE_STRING);

$extra = array();

if ($description) $extra['description'] = $description;
if ($width) $extra['width'] = $width;
if ($height) $extra['height'] = $height;
if ($key) $extra['key'] = $key;

// Get file
$file  = File::byAuto($id);

if (!$file->canIEdit()){
    die("replace64: Can't edit file: $file->name. You don't have necessary permissions.");
}

// Create tmp file
$path = File::createTmpFileFromBase64($data);

// Replace file
$file->replaceWith($path, $extra);

// Echo response with files
echo json_encode(array(new DataLatteResponse(DataRecord::packArray(array($file)))));