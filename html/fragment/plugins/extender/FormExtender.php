<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/2/17
 * Time: 14:22
 */

class FormExtender{

    /**
     * @remote
     * @return string
     */
    public static function doSome(){
        return "Hello Remote!";
    }
}