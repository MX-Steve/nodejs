const fs = require('fs');

let path = './test';
//读取一个目录，如果此目录不存在，则创建，如果存在，则删除
fs.stat(path,(err,stats)=>{
    if(err){
        fs.mkdir(path);//创建指定目录
    }else{
        fs.rmdir(path);//删除指定目录
    }
});
//判断一个目录是否存在，如果存在，则读取目录下内容
let path2 = './node_modules';
fs.stat(path2,(err,data)=>{
    if(err){
        console.log("当前目录不存在");
    }else{
        fs.readdir(path2,(err,list)=>{//读取目录下内容
            console.log(list);
        });
    }
});