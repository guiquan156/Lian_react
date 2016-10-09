var gulp = require('gulp');
var vNamed = require('vinyl-named');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var webpack = require('webpack');
var uglify = require('gulp-uglify');

var config = require('../config.js');
var webpackConf = require('../webpack.config.js');
var prettifyLog = require('../lib/prettify_log.js');
// var webpackConfWatch = (function(){
// 	// var o = Object.create(webpackConf);
// 	// o.watch = true;
// 	// return o;
// 	webpackConf.watch = true;
// 	return webpackConf;
// })();

function showExceptions(errors) {
	errors.forEach(function(error){
		console.log(error);
	});
}

gulp.task('parseReactJs', function(callback){
	webpack(webpackConf).run(function(err, stats){
		prettifyLog(err, stats);
		callback();
	});
});

//不能watch
// gulp.task('parseReactJs:watch', function(){
// 	webpack(webpackConf).watch(200, function(err, stats){
// 		prettifyLog(err, stats);
// 	});
// });

// 能watch 不提示错误信息
gulp.task('parseReactJs:watch', function(){
	gulp.watch(config.src + '/**/*.js', ['parseReactJs']);
});




