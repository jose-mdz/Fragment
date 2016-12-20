<?php
/**
 * Stub generated by xlatte
 */
class Address extends addressBase{


    /**
     * @remote
     * @param int $idaddress
     * @return Address
     */
    public static function byId($idaddress){
        return DL::oneOf('Address', "
            SELECT #COLUMNS
            FROM address
            WHERE idaddress = '$idaddress';
        ");
    }

    /**
     * @remote
     * @param string $name
     * @return Address[]
     */
    public static function search($name){
        return DL::arrayOf('Address', "
            SELECT #COLUMNS
            FROM address
            WHERE (
              line1  LIKE '%$name%' OR
              line2  LIKE '%$name%' OR
              line3  LIKE '%$name%' OR
              `name` LIKE '%$name%' OR
              firstname LIKE '%$name%' OR
              lastname LIKE '%$name%' OR
              phone LIKE '%$name%'
              )
        ");
    }

}