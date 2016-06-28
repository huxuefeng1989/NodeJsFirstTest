'use strict';
const querystring = require('querystring');
/*表单用Post请求处理的方式*/
module.exports = (req) => {
	return new Promise((resolve,reject) => {
		let results = '';
		let jsonObj;
		//req 提交上来的是片段字符串chunk  req先执行data事件 将信息提交 然后再进行end事件 chunk为二进制的
		req.on('data',(chunk) => {
			results += chunk;
		})
		req.on('end',() => {
			jsonObj = querystring.parse(results);
			resolve(jsonObj);
		})
	});
}