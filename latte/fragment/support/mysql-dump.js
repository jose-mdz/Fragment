
//mysqldump -uroot fragment > fragment.sql

var sys = require('util')
var exec = require('child_process').exec;
var child;
// executes `pwd`
var tables = [
    "file",
    "fragment",
    "group",
    "group_user",
    "page",
    "setting",
    "user"
];
child = exec("docker exec mysql_fragment mysqldump -uroot -pdocker --no-data=TRUE fragment " + tables.join(' ') + " > html/fragment/files/install/fragment.sql", function (error, stdout, stderr) {
    if(String(stdout).length > 0)
        console.error('stdout: ' + stdout);

    // if(String(stderr).length > 0)
    //     console.error('stderr: ' + stderr);

    if (error !== null) {
        console.log('exec error: ' + error);
    }
});