'use strict'

var http = require('http');

var server = http.createServer(function(request,response){
    console.log(request);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello world!</h1>');
}).listen('8080');

console.log('http://127.0.0.1:8080/');