'use strict';
//数据库
const fs = require('fs');
const filepath = __dirname + '/data.json';
var list;
try{
	//先从内存中读取
	list = JSON.parse(fs.readFileSync(filepath));
}catch(e){
	list = [];
}
module.exports = {
	add(article){
		list.push(article);
		this.store();
	},
	del(index){
		list.splice(index,1);
		this.store();
	},
	update(index,newArticle){
		list.splice(index,1,newArticle);
		this.store();
	},
	getList(){
		return list;
	},
	store(){
		//持久化  写到文件中去
		fs.writeFile(filepath,JSON.stringify(list),(err) => {
			if(err){
				throw err;
			}
			console.log('database method store has errors!');
		});
	}
}