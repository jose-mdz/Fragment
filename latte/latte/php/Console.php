<?php

class Console{

    static function log($data){
        $fh = fopen('php://stdout','w');
        fwrite($fh, $data . PHP_EOL);
        fclose($fh);
    }

    static function err($data){
        $fh = fopen('php://stderr','w');
        fwrite($fh, $data . PHP_EOL);
        fclose($fh);
    }

}
