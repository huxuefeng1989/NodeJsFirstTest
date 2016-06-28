// 首页
'use strict';
var Index_Page = require('../view_nodeJS/Index_Page');
var database = require('../database');
module.exports = (req,res) => {
	if(!req.session.isLogin){
		// 这里需要注意的是  因为index.js中引用了login.js  login.js中引用了index.js  因此这里设为let 块级作用域  要不然解析不出来 一直在嵌套
		let login = require('./login');
		login(req,res);
		return;
	}
	res.end(new Index_Page(database.getList(),req.session.isLogin).render());
}
/*这种方式是根据es6中的文档写法 可以自动生成静态html 是~下面那个*/
// res.end(`
// 			<!DOCTYPE html>
// 			<html>
// 				<body>
// 					${name};
// 				</body>
// 			</html>

// 		`);