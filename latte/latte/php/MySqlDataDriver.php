<?php

class MySqlDataDriver implements DataDriver{

    public $connection;

    function __construct($user, $pass, $host, $db){

        // Connect to server
        $this->connection = mysqli_connect($host, $user, $pass, $db);

        if(!$this->connection){
            throw new Exception(mysqli_error($this->connection));
        }

    }

    public function getReader($query){

        $result = mysqli_query($this->connection, $query);

        return new MySqlDataReader($result);
    }

    public function query($query){
        return $this->connection->query($query);
    }

    public function closeConnection(){
        $this->connection->close();
    }

}