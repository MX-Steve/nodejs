//获取主模块对象
//console.log(process.mainModule);
//console.log(require.main);
//获取当前模块自己
//console.log(module);
//判断当前模块是不是主模块
//console.log(require.main === module);

//引入其他模块
var fs = require('fs');
console.dir(fs.FSWatcher);
fs.readFile('./1.html',(err,data)=>{
    if(err){
        console.log('文件读取失败');
        console.log(err);
    }else{
        console.log('文件读取成功');
        console.log(data);
    }
})