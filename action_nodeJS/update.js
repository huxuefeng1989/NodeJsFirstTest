'use strict';
var Update_Page = require('../view_nodeJS/Update_Page');
var Index_Page = require('../view_nodeJS/Index_Page');
var query = require('./query');
var database = require('../database');
var post = require('./post');
var login = require('./login');
module.exports = (req,res) => {
	if(!req.session.isLogin){
		login(req,res);
		return;
	}
	if(req.method === 'GET'){
		let _idJson = query(req);
		let _jsonObject = database.getList()[_idJson.id];
		res.end(new Update_Page(_idJson.id,_jsonObject,'',req.session.isLogin).render());
	}else{
		post(req).then((data) => {
			let _id = data.id;
			delete data.id;
			let errors = {};
			if(!(data.title && data.title.length > 5)){
				errors.title = 'please write title char length > 5';
			}
			if(!(data.body && data.body.length > 10)){
				errors.body = 'please write body char length > 10';
			}
			if(Object.keys(errors).length){
				console.log('have errors');
				res.end(new Update_Page(_id,data,errors,req.session.isLogin).render());	
			}else{
				database.update(_id,data);
				res.end(new Index_Page(database.getList(),req.session.isLogin).render());
			}
		})

	}
}