<?php


interface DataDriver{

    public function errorCode(): string;
    public function errorInfo();
    public function exec($query): int;
    public function getReader($query): DataReader;
    public function lastInsertId(string $name = null);

}