/**
* the app of v1
*/

var express = require('express');
var template = require('art-template');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();


//set express template
app.set('views', VIEWS_PATH);
app.set('view engine', 'html');
app.engine('.html', template.__express);


app.use(express.static(PUBLIC_PATH));//statuc files
app.use(bodyParser.urlencoded({extended: false}));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());// parse application/json

app.get('/', function(req, res, next){
	res.render('index', {path: 'index.html'});
});

//分域
// var area = ['admin', 'create', 'modify'];
var area = ['admin', 'test', 'demo'];

//遍历路由
area.forEach(function(area){
	app.all('/'+area, function(req, res, next){
		try{
			require(ROUTER_PATH + '/' + area + '/index.js')(req, res);
		}catch(e){
			next();
		}
	});
	app.all('/'+area+'/:page', function(req, res, next){
		var page = req.params.page
		  , file = page === '' ? 'index.js' : page + '.js';
		try{
			require(ROUTER_PATH + '/' + area + '/' + file)(req, res);
		}catch(e){
			next();
		}
	});
});

//not found error
app.use(function(req, res, next){
	//todo error handle
	var data = {
		code: 404,
		msg: 'not found!'
	};
	res.render('error', data);
});

module.exports = app;



