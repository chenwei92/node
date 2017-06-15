var fs = require('fs');
//异步读取文件
fs.readFile('fs/hi.txt',function(err,data){
    if (err) {
        console.log(err);
    } else {
        console.log(data.length);
    }
})