<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 8/1/16
 * Time: 21:34
 */
class Session{

    /**
     * @var User
     */
    private static $_me = null;

    private static $_sudo = null;

    /**
     * HACK: implement this
     * @return int
     * @throws SecurityException
     */
    public static function idUser(){
        if(!self::isLogged()){
            throw new SecurityException("No Session (iduser)");
        }
        return $_SESSION['iduser'];
    }

    /**
     * Gets a value indicating if there's a session
     *
     * @return bool
     */
    public static function isLogged(){
        return isset($_SESSION['iduser']);
    }

    /**
     * Gets the currently logged user
     *
     * @return User
     */
    public static function me(){
        if (!self::$_me){
            self::$_me = User::byAuto(self::idUser());
        }
        return self::$_me;
    }

    /**
     * Makes a user login
     *
     * @remote
     * @param string $uname
     * @param string $pass
     * @return User
     * @throws Exception
     */
    public static function logIn($uname, $pass){

        if($u = User::byUname($uname)){
            if ($u->password == md5($pass) && !$u->isBanned() && !$u->inTrash()){
                $_SESSION['iduser'] = $u->iduser;
                $u->loadLoginData();
                return $u;
            }
        }

        throw new Exception('invalidUserOrPass');
    }

    /**
     * Logs the user out
     *
     * @remote
     */
    public static function logOut(){
        session_destroy();
        session_start();
        $_SESSION = array();
    }

}