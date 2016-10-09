var gulp = require('gulp');
var config = require('./gulp/config');

require('./gulp/tasks/less.parser.js');
require('./gulp/tasks/react_js.parser.js');
require('./gulp/tasks/view.parser.js');

gulp.task('default', ['parseLess:watch', 'parseReactJs:watch', 'view:watch']);

// gulp.task('test', ['parseReactJs:watch']);






