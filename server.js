'use strict';
//服务器
const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
//获取nodejs中url的核心包 
const url = require('url');
// 获取自定义session
var session = require('./session');
//导入数据库 这一步可以在每个action中进行操作
// var database = require('./database');
/*将对应的js文件放到处理器对象中  根据url的路径作为参数名*/
var handleObj = {};
handleObj["/add"] = require('./action_nodeJS/add');
handleObj["/del"] = require('./action_nodeJS/del');
handleObj["/update"] = require('./action_nodeJS/update');
handleObj["/getList"] = require('./action_nodeJS/getList');
/*首页*/
handleObj["/index"] = require('./action_nodeJS/index');
handleObj["/login"] = require('./action_nodeJS/login');
handleObj["/"] = require('./action_nodeJS/login');
handleObj["/logout"] = require('./action_nodeJS/logout');
handleObj["/identifyCode"] = require('./action_nodeJS/identifyCode');
http.createServer((req,res) => {
	req.session = session(req,res);
	let _pathname = url.parse(req.url).pathname;
	var _handleFun = handleObj[_pathname];
	if(_handleFun){
		res.writeHead('Content-Type','text/html');
		_handleFun(req,res);
	}else{
		// console.log('I\'m so sorry that there is nothing in this url!');
		// res.writeHead(404,{'Content-Type':'text/html'});
		// res.end('I\'m so sorry that there is nothing in this url!');
		_handleFun = handleObj["/index"];
		res.writeHead('Content-Type','text/html');
		_handleFun(req,res);
	}
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
