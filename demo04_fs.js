const fs = require('fs');

let path1 = './log';
let path2 = './log/out.log';
let stats1 = fs.statSync(path1);//同步读取目录
console.log(stats1);
let stats2 = fs.statSync(path2);//同步读取文件
//console.log(stats2);
//异步读取文件或目录
fs.stat(path1,(err,stats)=>{
    if(err){
        console.log('文件或目录读取失败');
    }else{
        console.log('文件或目录读取成功');
    }
});
console.log(stats2.isFile());//判断是否为文件
console.log(stats2.isDirectory());//判断是否为目录