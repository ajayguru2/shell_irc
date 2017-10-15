var express = require('express');
var argv = require('yargs').argv;
var net = require('openurl');
var fs = require('fs');
var date = new Date();
var time = date.getTime();


// console.log(argv);
var tag = argv.t;
// console.log(tag);

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

fs.appendFile('history', `${str}\n` , (err) => {
    if (err) throw err;
    console.log('the channel is up!!');
});

// /prompt();




