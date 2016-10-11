/**
* learning the nodejs and express!!!
* run.js ----- the entry of this app
*/

var http = require('http');


//define static value
global.BASE_PATH = __dirname;
global.PUBLIC_PATH = BASE_PATH + '/public';
global.BUILD_PATH = BASE_PATH + '/public/build';
global.VIEWS_PATH = BASE_PATH + '/views';
global.ROUTER_PATH = BASE_PATH + '/router';

global.INDEX_PATH = process.env['INDEX_PATH'] ? "process.env['INDEX_PATH']" : 'http://localhost:3333';

global.COOKIES = {};


//use app v1
var app = require('./app/app.v2');

//get the server port, 3333 is default!!
function getPort(){
	return process.env.EXPRESS_PORT || 3333;
}

http.createServer(app).listen(getPort());

console.log('app v2 server now is running!!!~');



