
//mysqldump -uroot fragment > fragment.sql

var sys = require('util')
var exec = require('child_process').exec;
var child;

const img = 'mysql_fragment';

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

async function run(cmd){
    return new Promise((resolve, reject) => {
        child = exec(cmd, function (error, stdout, stderr) {
            if (error) {
                reject(error)
            }else{
                resolve({stdout, stderr});
            }
        });
    });

}

(async function() {

    const {stdout} = await run(`docker ps -q -f name=${img}`);

    if(stdout.trim().length > 0) {
        const result = await run("docker exec mysql_fragment mysqldump -uroot -pdocker --no-data=TRUE fragment " + tables.join(' ') + " > html/fragment/files/install/fragment.sql");

        if(result.stderr) {
            console.error(result.stderr);
        }
    }else{
        console.log(`No container ${img} running, ignoring dump`);
    }

})();
