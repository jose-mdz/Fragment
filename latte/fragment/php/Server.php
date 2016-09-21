<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 9/21/16
 * Time: 12:21
 */
class Server{

    /**
     * Checks if server can write on fragment folder
     *
     * @remote
     * @return boolean
     */
    public static function checkFragmentFolderWritable(){
        return is_writable(FG_DIR);
    }

    /**
     * Changes the temporary language (used for install wizard)
     *
     * @remote
     * @param string $lang
     */
    public static function setTemporaryLang($lang){
        $_SESSION['tmp-lang'] = $lang;
    }

}