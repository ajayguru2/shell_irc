var express = require('express');
var argv = require('yargs').argv;
var net = require('openurl');
var fs = require('fs');


// console.log(argv);
var tag = argv.t;
// console.log(tag);

var address = `https://webchat.freenode.net/?channels=${tag}`;
console.log(address);

net.open(address);




