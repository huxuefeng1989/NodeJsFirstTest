'use strict';
var query = require('./query');
var database = require('../database');
var index = require('./index');
var post = require('./post');
module.exports = (callback,req) => {
	if(req.method === 'GET'){
		var data = query(req);
		callback(data.id);
	}else{
		post(req).then((data) => {
			callback(data.id);
		})
	}
}
