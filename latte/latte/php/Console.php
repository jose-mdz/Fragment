<?php

class Console{

    static function log($data){
        if(!isset($_ENV['LOG_LEVEL']) || (strtolower($_ENV['LOG_LEVEL']) !== 'error')){
            return;
        }
        $fh = fopen('php://stdout','w');
        fwrite($fh, "[" . DataLatte::dateTime() . "]" . " [LOG] " . $data . PHP_EOL);
        fclose($fh);
    }

    static function trace($data){
        if(!(isset($_ENV['LOG_LEVEL']) && strtolower($_ENV['LOG_LEVEL']) === 'trace')){
            return;
        }
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
