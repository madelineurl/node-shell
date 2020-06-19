process.stdout.write('prompt > ')

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdin.on('data', (data)=> {
    const [cmd, input] = data.toString().trim().split(" ");
    process.stdout.write(input);


    pwd(cmd);
    ls(cmd);

    cat(cmd,input);
    curl(cmd, input);


    //process.stdout.write('You typed: ' + cmd);
    //process.stdout.write('hello world')
    process.stdout.write('\nprompt > ');

});
