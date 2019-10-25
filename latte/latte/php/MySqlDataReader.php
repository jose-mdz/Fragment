<?php

/**
 * Represents a stream reader from a database result
 * <example>
 *   // Get a data reader
 *   $reader = DataLatte::getReader($query);
 *
 *   // Scan results
 *   while ($row = $reader->read())
 *       print_r($row);
 *
 * </example>
 */
class MySqlDataReader {

    public $result;

    function __construct($result) {
        $this->result = $result;
    }

    function read() {
        return mysqli_fetch_array($this->result, MYSQLI_ASSOC);
    }

}