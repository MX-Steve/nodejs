# NodeJS #
## 1.概述
	
js是一个建立在Chrome V8引擎上的JavaScript运行时引擎。Node.js采用事件驱动、非阻塞I/O模型，使其轻量化和高效。npm是世界上最大的生态系统的开放源代码库。

## 2.环境配置
1.[https://nodejs.org/en/](https://nodejs.org/en/ "nodejs")  下载长期稳定版本  
2.点击安装，一路下一步，安装成功后，nodejs会自动配置到环境变量中  
3.cmd进入控制台，输入node -v，弹出版本号，输入npm -v，弹出包的版本号，说明安装成功
## 3.特点
1.单线程；
2.非阻塞，
3.异步IO模型；
4.事件驱动；

## 4.nodejs结构
<table border="1">
		<thead>
			<tr>
				<th>前端js</th>
				<th>公共部分</th>
				<th>nodejs</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					1.dom<br/>
					2.bom<br/>
					3.自定义对象
				</td>
				<td>
					ES原生对象:String、Number、Boolean、Math、Date、Error、Function、Object、Array、RegExp...
				</td>
				<td>
					1.Node.js内置对象<br/>
					2.大量的第三方对象<br/>
					3.自定义对象
				</td>
			</tr>
		</tbody>
</table>

## 5.nodejs运行方式
###1.交互模式--用于测试
	
	读取用户输入、执行运算、输出执行结果、继续下一循环
	执行方法：输入一行js语句，回车执行
###2.脚本模式--用于开发

	把要执行的所有js语句编写在一个独立的js文件中，一次性的提交给nodejs处理。此文件可以没有后缀
	执行方法：node d:\xx\xx.js

## 6.nodejs的基础语法以及ES6新特性
###1.数据类型：
	（1）原始类型；（2）引用类型
###2.模板字符串
###3.严格模式
	规则
	（1）修改常量的值是非法的——将静默失败升级为错误
	（2）不允许对未声明的变量赋值
	（3）匿名函数的this不再指向全局
###4.变量的作用域
###5.循环结构 for ... of ...
###6.箭头函数
###7.对象
	创建对象的方式
	（1）对象直接量
	（2）构造函数方式
	（3）原型继承方式
	（4）class方式——ES新增
相似对象的属性和行为的抽象集合。（描述一类事物统一的属性和功能的程序结构）
事物的属性就是class的属性，事物的功能就是class的方法。
使用class方式创建自定义对象是，必须启用严格模式。

	"use strict";
	//创建自定义对象
	class Emp {
  		constructor(ename){   
			this.ename=ename; 
  		}
  		work(){    
 		 }
	}
	var e1=new Emp("tom");

	实现继承：
	class Programmer extends Emp{
  		constructor(ename,salary,skills){
    			super(ename,salary);
    			this.skills=skills;
  		}  
	}

## 7. 全局对象
nodejs中的全局对象是Global  
在交互模式下，声明的全局变量是global的成员。——全局对象的污染  
在脚本模式下，声明的全局变量不是global的成员。——避免了全局对象的污染
### 1.console
用于向stdout(标准输出)和stderr(标准错误)输出信息。
	
	console.log()	//向stdout输出日志信息
	console.info()	//同上
	console.error()	//向stderr输出错误信息
	console.warn()	//同上
	console.trace()	//向stderr输出栈轨迹信息
	console.dir()	//向stdout输出指定对象的字符串表示
	console.assert()	//断言，为真的断言，错误信息不会输出；为假的断言，抛出错误对象，输出错误信息，并且终止脚本的运行，可以自定义错误信息。
	console.time()  console.timeEnd()//测试代码的执时间	
####注意：console中的成员方法是异步的，输出顺序和书写顺序不一定完全一致。

### 2.process 进程
	
	process.arch	//获取CPU架构类型
	process.platform	//获取操作系统类型
	process.env	//获取操作系统环境变量
	process.cwd()	//获取当前文件所在工作目录
	process.execPath	//获取Node.js解释器所在目录
	process.versions	//获取Node.js版本信息
	process.uptime()	//获取Node.js进程运行时间(s)
	process.memoryUsage()//获取Node.js进程内存使用信息
	process.pid	//获取进程ID号
	process.kill( pid )	//向指定进程ID号发送退出信号

### 3.定时器
	
	global.setTimeout()	//一次性定时器
	global.setInterval()	//周期性定时器
	global.setImmediate()//在下次事件循环开始之前立即执行的定时器，早于一次性定时器
	process.nextTick()	//本次事件循环结束之后立即执行的定时器

## 8. 模块系统
nodejs中使用"Module(模块)"来规划不同的功能对象。
### 1.模块的分类：
	（1）核心模块——Node.js的内置模块（有些不需引入可直接使用，有些需要引入）
	（2）第三方模块
	（3）自定义模块

每一个被加载的js文件对应一个模块对象，包含响应的功能和函数。
模块中声明的变量或函数的作用域叫做“模块作用域”，这些变量和函数都不是global的成员，默认只能在当前的js文件（当前模块）中使用

### 2.Node.js启动时运行的第一个模块叫做“主模块”——main module，也是自身模块。

	获取主模块对象：
	process.mainModule
	require.main

### 3.除主模块之外的其他模块都称为子模块。
默认情况下，某一个模块不能直接使用其他模块中封装的数据，但是每个模块可以导出(exports)自己内部的对象供其他模块使用，也可用引入(require)并使用其他模块导出的对象。  

每一个模块内部都可以使用一个变量：module，指向当前模块自己。

	//判断当前模块是否主模块
	console.log(require.main===module);
	模块的引入：require()
	(在交互模式下，Node.js自带的模块无需引入，直接使用)

## 9.核心模块
### 1. fs模块——文件系统模块
fs模块提供了文件的读写、更名、删除、遍历目录等操作。  
fs模块中大多数方法都带有同步和异步两种  
所有的异步方法都有一个回调函数，此回调函数的第一个参数都是一个错误对象。  
异步方法中如果有错误的话，会静默失败，不会自己抛出error，通常情况下都需要手动处理。
####1.常用Class：
	fs.Stats	//文件或目录的统计信息描述对象
	fs.ReadStream	//stream.Readable接口的实现对象
	fs.WriteStream	//streamWriteable接口的实现对象
	fs.FSWatcher	//可用于监视文件修改的文件监视器对象
####2.常用的方法：
		fs.stat()	//用于返回一个文件或目录的统计信息对象（fs.Stats对象）
		fs.mkdir()	//创建目录
		fs.rmdir()	//删除目录
		fs.readdir()//读取目录下的内容
		fs.readFile()  //读取文件内容
		fs.writeFile() //向文件中写入内容
		fs.appendFile()  //向文件末尾追加内容
		fs.unlink()	    //删除文件
		fs.rename    //重命名文件

####3.例子
	//向任意输出流中执行输入
	var fs=require("fs");//引入fs模块
	var out=fs.createWriteStream("./log/out.log");//创建文件
	var err=fs.createWriteStream("./log/err.log");
	
	var c=require("console");//引入console模块
	var loger=new c.Console(out,err);//实例化Console构造函数
	loger.log("log...");
	loger.error("err...");
	---------------------------------------------------------
	fs.stat()   &    fs.statSync()	//用于返回一个文件或目录的统计信息对象（fs.Stats对象）
		fs.Stats对象的方法：
		stats.isFile()	//是否为文件
		stats.isDirectory()	//是否为目录
	----------------------------------
	操作目录：
	fs.mkdir()	 &  fs.mkdirSync()	//创建目录
	fs.rmdir()	 &  fs.rmdirSync()	//删除目录
	fs.readdir()&  fs.readdirSync()	//读取目录下的内容

















