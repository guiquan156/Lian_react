var notify = require('gulp-notify');

module.exports = function(errorObj, cb){
	notify.onError(errorObj.toString()).apply(this, arguments);

	//防止进程挂掉？
	if(typeof this.emit === 'function') this.emit('end');
}

