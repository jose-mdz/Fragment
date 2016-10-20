
//mysqldump -uroot fragment > fragment.sql

var sys = require('util')
var exec = require('child_process').exec;
var child;
// executes `pwd`
var tables = [
    "address",
    "card",
    "charge",
    "customer",
    "payment",
    "transaction",
    "wallet"
];
child = exec("mysqldump -uroot --no-data=TRUE cms " + tables.join(' ') + " > html/fragment/files/install/fragment.store.sql", function (error, stdout, stderr) {
    if(String(stdout).length > 0)
        console.error('stdout: ' + stdout);

    if(String(stderr).length > 0)
        console.error('stderr: ' + stderr);

    if (error !== null) {
        console.log('exec error: ' + error);
    }
});