#!/usr/bin/env node
var greet = require("../index.js");
//console.log(process.argv[2]);

var argv = require('minimist')(process.argv.slice(2));

//console.dir(argv);

var hello = greet(process.argv[2], process.argv[3]);
//console.log("Hello World");
console.log(hello);