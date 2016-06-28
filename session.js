'use strict';
var querystring = require('querystring');
var cache = {};
module.exports = (req,res) => {
	// 获取 请求头部信息中的cookie
	var cookies = req.headers.cookie;
	var cookiesObj = {};
	var sessionid = 19891107;
	// cookies 形式 xxx;xxx 因此要分段 将cookie形成一个json格式对象  如果没有sessionid自己设置sessionid
	if(cookies){
		cookiesObj = querystring.parse(cookies.split(';').join('&'));
	}
	if(cookiesObj && cookiesObj.sessionid && cache[cookiesObj.sessionid]){
		return cache[cookiesObj.sessionid];
	}else{
		sessionid += 1000;
		res.setHeader('Set-Cookie',[`sessionid=${sessionid}`]);
		cache[sessionid] = {};
		return cache[sessionid];
	}
}