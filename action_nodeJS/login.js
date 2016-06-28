'use strict';
var Login_Page = require('../View_nodeJS/Login_Page');
var post = require('./post');
var IndexAction = require('./index');
module.exports = (req,res) => {
	if (req.method === 'GET') {
		res.end(new Login_Page().render());
	}else{
		post(req).then(data => {
			if(data && data.username == 'hxf' && data.password == '19891107'){
				req.session.isLogin = true;
				IndexAction(req,res);
			}else{
				res.end(new Login_Page('There has errors when your username or password is not right !').render());
			}
		})
	}
}