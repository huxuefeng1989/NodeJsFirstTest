'use strict';
var AbstractPage = require('./AbstractPage');
class Update_Page extends AbstractPage{
	constructor(index,article,errors){
		super();
		this.index = index;
		this.article = article;
		this.errors = errors || { };
	}
	_render(){
		let titleError = this.errors.title || '';
		let bodyError = this.errors.body || '';
		return `
			<form action='/update' method='post'>
			  <input type="hidden" value="${this.index}" name="id">
			  <div class="form-group">
			    <label for="title">this is the title</label>
			    <input type="text" class="form-control" id="title" name="title" placeholder="please write title" value="${this.article.title}" >
			    <p>${titleError}</p>
			  </div>
			  <div class="form-group">
			    <label for="body">this is the body</label>
			    <textarea class="form-control" rows="3" placeholder="please write something" id="body" name="body">${this.article.body}</textarea>
			    <p style="align:center;">${bodyError}</p>
			  </div>
			  <button type="submit" class="btn btn-default">Submit</button>
			</form>
		`;
	}
}
module.exports = Update_Page;