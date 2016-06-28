'use strict';
const url = require('url');
const querystring = require('querystring');
module.exports = (req) => {
	let _jsonObj = querystring.parse(url.parse(req.url).query);
	return _jsonObj;
}