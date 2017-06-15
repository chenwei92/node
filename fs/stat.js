var fs = require('fs');
//异步获取文件信息。同理有同步statSync
fs.stat('fs/hi.txt',function(err,stat){
    if (err) {
        console.log(err);
    } else {
        console.log(stat);
    }
});