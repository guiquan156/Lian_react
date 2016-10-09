var gutil = require('gulp-util');
var handleErrors = require('./handle_errors.js');

module.exports = function(err, stats) {
	if (err) throw new gutil.pluginError('webpack', err);
	var statColor = stats.compilation.warnings.lenght < 1 ? 'green' : 'yellow';
	if (stats.compilation.errors.length > 0) {
		stats.compilation.errors.forEach(function(err){
			handleErrors(err);
			stats = 'red';
		});
	}else{
		gutil.log(stats.toString({
			colors: gutil.colors.supportsColor,
			hash: false,
			timings: true,
			chunks: true,
			chunkModules: false,
			modules: false,
			children: false,
			version: false,
			cached: false,
			cachedAssets: false,
			resons: false,
			source: false,
			errorDetail: false
		}));
	} 	
}
