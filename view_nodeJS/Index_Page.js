'use strict';
var AbstractPage = require('./AbstractPage');
//传进来的是一个数组   你所需要的页面的等
class Index_Page extends AbstractPage{
	constructor(articlArr,isLogin){
		super();
		this.isLogin = isLogin;
		this.articlArr = articlArr;
	}
	_render(){
		var _imformation = this.articlArr.map((article,index) => `<p class="class="lead"">
			<span>标题:${article.title}</span></br>正文:${article.body}</br>操作:
			<a href='/del?id=${index}'>del</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href='/update?id=${index}'>update</a>
			</p>`).join('');
		return `
			${_imformation}
		`;
	}
}
module.exports = Index_Page;