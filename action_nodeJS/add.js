'use strict';
var Add_Page = require('../view_nodeJS/Add_Page');
var Index_Page = require('../view_nodeJS/Index_Page');
var database = require('../database');
/*这是解析  url中参数用的 nodejs 自带的核心模块*/
const querystring = require('querystring');
/*这是自身写的一个post请求处理方式  用promise代替回掉函数 是异步的*/
var post = require('./post');
var login = require('./login');
module.exports = (req,res) => {
	var errors = {};
	if(!req.session.isLogin){
		login(req,res);
		return;
	}
	if(req.method === 'GET'){
		res.end(new Add_Page({},req.session.isLogin).render());
	}else{
		post(req).then((data) => {
			if(!(data.title && data.title.length > 5)){
				console.log('when you add article there is title error');
				errors.title = 'please write title char length > 5';
			}
			if(!(data.body && data.body.length > 10)){
				console.log('when you add article there is body error');
				errors.body = 'please write body char length > 10';
			}
			if(Object.keys(errors).length){
				console.log(errors);
				res.end(new Add_Page(errors,req.session.isLogin).render());		
			}else{
				database.add(data);
				res.end(new Index_Page(database.getList(),req.session.isLogin).render());
			}
		})
		
	}
	
}