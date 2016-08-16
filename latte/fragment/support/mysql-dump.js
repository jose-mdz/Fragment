
//mysqldump -uroot tasky > tsky.sql

var sys = require('util')
var exec = require('child_process').exec;
var child;
// executes `pwd`
child = exec("mysqldump -uroot --no-data=TRUE cms > fragment.sql", function (error, stdout, stderr) {
    if(String(stdout).length > 0)
        sys.print('stdout: ' + stdout);

    if(String(stderr).length > 0)
        sys.print('stderr: ' + stderr);

    if (error !== null) {
        console.log('exec error: ' + error);
    }
});