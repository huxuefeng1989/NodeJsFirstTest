'use strict';
var AbstractPage = require('./AbstractPage');
class Login_Page extends AbstractPage{
	constructor(errors){
		super();
		this.errors = errors || '';
	}
	_render(){
		var nowTime = Date.now();
		return `
			<form action='/login' method='post'>
			  <div class="form-group">
			    <label for="username">username:</label>
			    <input type="text" class="form-control" id="username" name="username" placeholder="please write username" >
			  </div>
			  <div class="form-group">
			    <label for="password">password:</label>
			    <input type="password" class="form-control" id="password" name="password" placeholder="please write password" >
			  </div>
			  <button type="submit" class="btn btn-default">Submit</button>
			  <p>${this.errors}</p>
			</form>
		`;
	}
}
module.exports = Login_Page;