<?php

  class DataConnection {

   public $driver;

    public $debug = false;
	
	function __construct(DataDriver $driver, $debug = false){
            $this->driver = $driver;
	}
	
    public function multiQuery($query){
        global $strings;

        $result = $this->driver->exec($query);

        if(!$result) {
            throw new Exception(
                sprintf(
                $strings['errorOnQueryS'],
                $this->getErrorDescription(),
                $this->queryOrNot($query)));
        }

        return $result;
    }

    public function getCache($query){

	    $result = array();
	    $reader = $this->getReader($query);

	    while($row = $reader->read()){
	        $result[] = $row;
        }

	    return $result;

    }

    public function getErrorDescription(){
        return $this->driver->errorInfo();
    }

	private function queryOrNot($query){
		return $this->debug ? $query : "(SQL)";
	}
	
	public function getReader($query){
		return $this->driver->getReader($query);
	}

    public function getSingle($query){
        $reader = $this->driver->getReader($query);

        $result = $reader->read();

        if (is_array($result) && !empty($result)){
            $keys = array_keys($result);
            return $result[$keys[0]];
        }

        return null;

	}

	public function update($query){
		return $this->driver->exec($query);
	}

	
 }