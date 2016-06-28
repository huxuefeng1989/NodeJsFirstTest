'use strict';
var login = require('./login');
module.exports = (req,res) => {
	delete req.session.isLogin;
	login(req,res);
}