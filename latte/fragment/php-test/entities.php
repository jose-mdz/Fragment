<?php

    $_ENV['FRAGMENT_DATA_DRIVER'] = 'sqlite';

    include "../../../html/fragment/latte/releases/fragment/support/actions/fragment_init.php";

//    $roots = Page::rootPages();
//
//    print_r($roots[0]->getPages(1));
//    print_r(Group::catalog());

Session::logIn('root', 'root');

$p = new Page();
$p->key = "papapap";
$p->save();

echo $p->idpage;