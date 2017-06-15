'use strict'
//同步读取文件
var fs = require('fs');
var data = fs.readFileSync('fs/timg.jpg'); //二进制文件
data = data.toString('utf-8'); //Buffer转string
data = new Buffer(data,'utf-8'); //string转Buffer
console.log(data);