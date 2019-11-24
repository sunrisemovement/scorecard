const parser = require('../src/data/parser.js');
var fs = require('fs');

var textByLine = fs.readFileSync('Data.csv').toString()

parser(textByLine);
