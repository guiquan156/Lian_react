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
app.set('views', [BUILD_PATH, VIEWS_PATH]);
app.set('view engine', 'html');
app.engine('.html', template.__express);

app.use(express.static(BUILD_PATH));//statuc files
app.use(bodyParser.urlencoded({extended: false}));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());// parse application/json
app.use(cookieParser());

//遍历路由
//index
app.all('/', function(req, res, next){
	try{
		require(ROUTER_PATH + '/index.js')(req, res);
	}catch(e){
		next();
	}
});
app.all('/:page', function(req, res, next){
	var page = req.params.page
	  , file = page === '' ? 'index.js' : page + '.js';
	try{
		require(ROUTER_PATH + '/' + file)(req, res);
	}catch(e){
		console.log(e);
		next();
	}
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



