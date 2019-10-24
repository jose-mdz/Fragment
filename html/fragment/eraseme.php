<?php
include __DIR__ . '/latte/releases/fragment/support/actions/fragment_init.php';

echo print_r( DL::getCache('SELECT * FROM user') );