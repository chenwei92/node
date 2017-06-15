'use strict'
var hello = require('./src/hello');
var hi = require('./src/hi');
require('./fs/readFile');
require('./fs/readFileSync');
require('./fs/writeFile');
require('./fs/stat');
var str = 'hello!node';
var s = hello(str);
console.log(s,hi);