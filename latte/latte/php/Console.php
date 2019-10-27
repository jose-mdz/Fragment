<?php

class Console{

    static function log($data){
        $fh = fopen('php://stdout','w');
        fwrite($fh, "[" . DataLatte::dateTime() . "]" . " [LOG] " . $data . PHP_EOL);
        fclose($fh);
    }

    static function err($data){
        $fh = fopen('php://stderr','w');
        fwrite($fh, "[" . DataLatte::dateTime() . "]" . " [ERR] " . $data . PHP_EOL);
        fclose($fh);
    }

}
