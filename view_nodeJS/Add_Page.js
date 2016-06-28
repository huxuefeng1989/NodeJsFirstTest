'use strict';
var AbstractPage = require('./AbstractPage');
class Add_Page extends AbstractPage{
	constructor(errors,isLogin){
		super();
		this.isLogin = isLogin;
		this.errors = errors || { };
	}
	_render(){
		let titleError = this.errors.title || '';
		let bodyError = this.errors.body || '';
		return `
			<form action='/add' method='post'>
			  <div class="form-group">
			    <label for="title">this is the title</label>
			    <input type="text" class="form-control" id="title" name="title" placeholder="please write title" >
			    <p>${titleError}</p>
			  </div>
			  <div class="form-group">
			    <label for="body">this is the body</label>
			    <textarea class="form-control" rows="3" placeholder="please write something" id="body" name="body"></textarea>
			    <p style="align:center;">${bodyError}</p>
			  </div>
			  <button type="submit" class="btn btn-default">Submit</button>
			</form>
		`;
	}
}
module.exports = Add_Page;