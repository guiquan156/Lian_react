var gulp = require('gulp');
var config = require('./gulp/config');

require('./gulp/tasks/less.parser.js');
require('./gulp/tasks/react_js.parser.js');
require('./gulp/tasks/view.parser.js');

//解析js版本
gulp.task('parseAll', ['parseLess:watch', 'view:watch', 'parseReactJs:watch']);

//不解析js
gulp.task('default', ['parseLess:watch', 'view:watch']);

