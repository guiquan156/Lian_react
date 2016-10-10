var gulp = require('gulp');
var less = require('gulp-less');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var gWatch = require('gulp-watch');
var gNewer = require('gulp-newer');
var gLog = require('gulp-logger');

var config = require('../config.js');
var handleError = require('../lib/handle_errors.js');

//只改动带有'*.sheets.less'后缀的文件，其他less一般通过webpack引入到js之中
//less解析任务 全量的
gulp.task('parseLessAll', function(){
	gulp.src(config.src + '/**/*.sheets.less')
	.pipe(plumber(handleError))
	.pipe(gLog({ showChange: true }))
	//解析less
	.pipe(less({
		paths: ['./public/src/less/comm']
	}))
	.pipe(autoprefixer({
		browsers: ['last 2 versions', 'ie 8'],
		cascade: false
	}))
	//压缩css
	.pipe(csso())
	.pipe(gulp.dest(config.dest));
});

//less解析任务 增量
gulp.task('parseLess', function(){
	gulp.src(config.src + '/**/*.sheets.less')
		.pipe(plumber(handleError))
		.pipe(gNewer(config.dest))
		// .pipe(gWatch(config.src + '/**/*.less'))
		.pipe(gLog({ showChange: true }))
		//解析less
		.pipe(less({
			paths: ['./public/src/less/comm']
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'ie 8'],
			cascade: false
		}))
		//压缩css
		.pipe(csso())
		.pipe(gulp.dest(config.dest));
});
//监听less解析任务 全量
gulp.task('parseLessAll:watch', function(){
	gulp.watch(config.src + '/**/*.sheets.less', ['parseLessAll']);
});

//监听 增量版
gulp.task('parseLess:watch', function(){
	gulp.watch(config.src + '/**/*.sheets.less', ['parseLess']);	
});

//直接调用 没有返回值