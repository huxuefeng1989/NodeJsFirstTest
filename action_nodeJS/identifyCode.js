'use strict';
var PW = require("png-word");
var Randoms = require("random-word");
module.exports = function(req,res){
	var r = new Randoms('abcdefghigklmnopqrstuvwxyz0123456789');
	var word = r.random(4);
	var pngword = new PW(PW.GREEN);
	res.writeHead('Content-Type','image/png');
	pngword.createReadStream(word).pipe(res);
}