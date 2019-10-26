<?php

class PdoDataDriver implements DataDriver{

    static function fromSQLite($path): PdoDataDriver{
        return new PdoDataDriver(new PDO("sqlite:$path"));
    }

    static function fromMySQL($host, $database, $user, $password){
        return new PdoDataDriver(new PDO(
            "mysql:host=$host;dbname=$database",
            $user,
            $password
        ));
    }

    public $pdo;

    public function __construct(PDO $pdo){
        $this->pdo = $pdo;
    }

    public function errorCode(): string{
        return $this->pdo->errorCode();
    }

    public function errorInfo(){
        return $this->pdo->errorInfo();
    }

    public function exec($query): int{
        return $this->pdo->exec($query);
    }

    public function getReader($query): DataReader{
        $result = $this->pdo->query($query);

        return new PdoDataReader($result);
    }

    public function lastInsertId(string $name = null){
        return $this->pdo->lastInsertId($name);
    }

}