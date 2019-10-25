<?php

class SQLiteDataDriver implements DataDriver{

    public $pdo;

    function __construct($file){

        $this->pdo = new PDO("sqlite:$file");

    }

    public function getReader($query){

        $result = $this->pdo->query($query);

        return new SQLiteDataReader($result);
    }

    public function query($query){
        return $this->pdo->exec($query);
    }

}