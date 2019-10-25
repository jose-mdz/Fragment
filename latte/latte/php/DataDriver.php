<?php


interface DataDriver{

    public function getReader($query);
    public function query($query);

}