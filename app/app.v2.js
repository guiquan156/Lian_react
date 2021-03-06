/**
* the app of v1
*/

var express = require('express');
var template = require('art-template');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fs = require('fs');

var app = express();

//set express template
app.set('views', [BUILD_PATH]);

//没有必要 由前端来负责渲染
app.set('view engine', 'html');
app.engine('.html', template.__express);
app.use(express.static(BUILD_PATH));//statuc files
app.use(bodyParser.urlencoded({extended: false}));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());// parse application/json
app.use(cookieParser());

//简单过滤掉favicon.ico
app.all('/favicon.ico', function(req, res){
	res.end();
});

//todo 修改简单的打印日志
app.use(function(req, res, next){
	var dateStart = +new Date();
	next();
	var dateEnd = +new Date();
	var cost = dateEnd - dateStart
	console.log(req.originalUrl + ' cost: ' + cost + 'ms');
})

//遍历路由
//index
// app.all('/', function(req, res, next){
// 	try{
// 		require(ROUTER_PATH + '/index.js')(req, res);
// 	}catch(e){
// 		throw e;
// 		next();
// 	}
// });


app.all('/:page', function(req, res, next){
	var page = req.params.page
	  , file = page + '.js';
	try{
		require(ROUTER_PATH + '/' + file)(req, res);
	}catch(e){
		require(ROUTER_PATH + '/notfound.js')(req, res);
		throw e;
	}
});

module.exports = app;



