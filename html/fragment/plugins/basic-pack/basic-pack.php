<?php
/**
 * Created by PhpStorm.
 * User: josemanuel
 * Date: 9/19/16
 * Time: 10:38
 */

require_once "BasicPack.php";

// Hook events
event_register('dispatch_initialized', array('BasicPack', 'dispatchInit'));
event_register('after_scripts_print', array('BasicPack', 'afterScripts'));
