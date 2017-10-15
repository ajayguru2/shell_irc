var express = require('express');
var argv = require('yargs').argv;
var net = require('openurl');
var fs = require('fs');
var date = new Date();
var time = date.getTime();


// console.log(argv);
if (argv.t) {
    var tag = argv.t;
    console.log(tag);

    var address = `https://webchat.freenode.net/?channels=${tag}`;
    console.log(address);

    net.open(address);


    var logObject = {
        'tag': tag,
        'address': address,
        'time': time
    };


// console.log(logObject);
    var str = JSON.stringify(logObject);

    fs.appendFile('history', `${str}\n`, (err) => {
        if (err) throw err;
        console.log('the channel is up!!');
    });

// /prompt();
}

if (argv.h){
    console.log("\n\n\nshell_irc is a relay connector commad line tool\n\n===============================\n\nsample:\nnode index.js -t [tag-name]\n\n===============================\n\n\n");

}






