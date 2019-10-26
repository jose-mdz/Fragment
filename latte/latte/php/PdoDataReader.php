<?php

class PdoDataReader implements DataReader {

    public $result;

    function __construct($result){
        $this->result = $result;
    }

    function read(){

        if(!$this->result){
            return false;
        }

        return $this->result->fetch(PDO::FETCH_ASSOC);
    }

}
