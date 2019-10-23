<?php


/**
 * Modified for fragment
 */


if(isset($_ENV['APPLICATION_ENV']) && ($_ENV['APPLICATION_ENV'] === 'development')){
    include(__DIR__ . '/../../../latte/fragment/support/actions/fragment_init.php');
}else{
    include(__DIR__ . '/releases/fragment/support/actions/fragment_init.php');
}


(new DataLatteRequest());