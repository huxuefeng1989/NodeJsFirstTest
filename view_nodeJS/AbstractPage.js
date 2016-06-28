'use strict';
/*render()方法放置公共的部分页面  _render()方法放置的是差异化的东西包括一些页面·值等等  这个就是公共页的抽象类*/
class AbstractPage{
	constructor(){
	}
	_render(){
		throw new Error('you must write something in this method for render html5!');
	}
	render(){
		return `
			<!DOCTYPE html>
			<html>
				<head>
				<meta charset="utf-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
			    <meta name="viewport" content="width=device-width, initial-scale=1">
			    <meta name="description" content="">
			    <meta name="author" content="">
				<link rel='stylesheet' href='//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css' />
				<link rel="stylesheet" href="http://v3.bootcss.com/examples/cover/cover.css">
				</head>
				<body>
					<div class="site-wrapper">
				      	<div class="site-wrapper-inner">
				        	<div class="cover-container">
				          		<div class="masthead clearfix">
				           			<div class="inner">
				              			<h3 class="masthead-brand">My Blog</h3>
				              		<nav>
						                <ul class="nav masthead-nav">
						                  <li style="display:${this.isLogin ? 'none' : ''}" class="active"><a href="/">Login</a></li>
						                  <li style="display:${this.isLogin ? '' : 'none'}"><a href="/index">Look</a></li>
						                  <li style="display:${this.isLogin ? '' : 'none'}"><a href="/add">Add</a></li>
						                  <li style="display:${this.isLogin ? '' : 'none'}"><a href="/logout">Logout</a></li>
						                </ul>
				              		</nav>
				            	</div>
				          	</div>
							<div class="inner cover">
								<h1 class="cover-heading">Welcome to My Blog.</h1>
								${this._render()}
							</div>
							<div class="mastfoot">
					            <div class="inner">
					              <p>This is Test template for My Blog.</p>
					            </div>
		         			</div>
		        		</div>
		      		</div>
		    	</div>
				</body>
			</html>
		`;
	}
}
module.exports = AbstractPage;
