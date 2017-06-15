var fs = require('fs');
//异步写文件，writeFileSync为同步写文件
var text = 'write hello';
fs.writeFile('fs/hi.txt',text,function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('write ok');
    }
})