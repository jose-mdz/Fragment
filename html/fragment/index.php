<?php

if(isset($_ENV['APPLICATION_ENV']) && ($_ENV['APPLICATION_ENV'] === 'development')){
    include(__DIR__ . '/../../latte/fragment/support/actions/backend.php');
}else{
    include(__DIR__ . '/latte/releases/fragment/support/actions/backend.php');
}
