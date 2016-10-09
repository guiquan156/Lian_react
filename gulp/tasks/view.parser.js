var gulp = require('gulp');
var gHtmlmin = require('gulp-htmlmin');
var gIf = require('gulp-if');
var plumber = require('gulp-plumber');
var gNewer = require('gulp-newer');
var gLog = require('gulp-logger');

var config = require('../config.js');
var handleError = require('../lib/handle_errors.js');

//view解析任务 增量
gulp.task('view', function(){
	gulp.src(config.src + '/**/*.html')
	.pipe(plumber(handleError))
	.pipe(gNewer(config.dest))
	.pipe(gLog({ showChange: true }))
	.pipe(gHtmlmin())	
	.pipe(gulp.dest(config.dest));
});

//全量
gulp.task('viewAll', function(){
	gulp.src(config.src + '/**/*.html')
	.pipe(plumber(handleError))
	.pipe(gNewer(config.dest))
	.pipe(gLog({ showChange: true }))
	.pipe(gHtmlmin())
	.pipe(gulp.dest(config.dest));
});

gulp.task('view:watch', function(){
	gulp.watch(config.src + '/**/*.html', ['view']);
});

//直接调用 没有返回值