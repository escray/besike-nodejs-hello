#!/usr/bin/env node
var greet = require("../index.js");
//console.log(process.argv[2]);

var argv = require('minimist')(process.argv.slice(2));

//console.dir(argv);

var name = process.argv[2];
var drunk = process.argv[3];

var hello = greet(name, drunk);
//console.log("Hello World");
console.log(hello);