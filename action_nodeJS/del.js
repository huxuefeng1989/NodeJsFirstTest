'use strict';
var query = require('./query');
var database = require('../database');
var index = require('./index');
var post = require('./post');
var getJsonId = require('./getJsonId');
var login = require('./login');
module.exports = (req,res) => {
	if(!req.session.isLogin){
		login(req,res);
		return;
	}
	getJsonId((id) => {
		database.del(id);
		index(req,res);
	},req);
}