var gulp = require('gulp');
var vNamed = require('vinyl-named');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var webpack = require('webpack');
var uglify = require('gulp-uglify');
var path = require('path');

var config = require('../config.js');
var webpackConf = require('../../webpack.config.js');
var prettifyLog = require('../lib/prettify_log.js');

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

//用webpack的watch参数监听
// gulp.task('parseReactJs:watch', function(callback){
// 	webpack(webpackConf).run(function(err, stats){
// 		prettifyLog(err, stats);
// 		//阻塞掉，监听
// 	});
// })

// 用gulp.watch实现曾量监听 感觉效率不如webpack watch
gulp.task('parseReactJs:watch', function(){
	gulp.watch(config.src + '/**/*.js', function(files){
		var supDir = path.dirname(files.path).split(path.sep).pop();
		var filename = supDir + path.sep + path.basename(files.path, '.js')

		if(supDir == 'comm') return;

		webpackConf.entry = {};//清空
		webpackConf.entry[filename] = files.path;
		//跑起来
		webpack(webpackConf).run(function(err, stats){
			prettifyLog(err, stats);
		});
	});
});




