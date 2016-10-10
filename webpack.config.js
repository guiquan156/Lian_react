// var webpack = require('webpack');
var glob = require('glob');
var config = require('./gulp/config.js');

//动态生成entry
var entry = (function(){
	var files = glob.sync(config.src + '/*/*.js')
	  , a = {};
	files.forEach(function(value){
		var pathArr = value.split('/')
		  , fileName = pathArr.pop().match(/(.*)(\.js)$/)[1]
		  , pathName = pathArr.pop();
		if(pathName == 'comm') return;
		a[pathName + '/' + fileName] = value;
	});
	return a;
})();

module.exports =  {
	entry: entry,
	output: {
		path: config.dest,
		filename: '[name].js'
	},
    module: {
 		loaders: [
	 		{
	        	test: /\.js$/,
	        	exclude: /node_modules/,
	        	loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!postcss-loader!less-loader'
			}
		]
	},
	postcss: function() {
		return [
			require('autoprefixer'),
			require('cssnano')
		];
	},
	plugins: [
    	// new webpack.DefinePlugin({ //生产模式
    	// 	"process.env": {
			  //   NODE_ENV: JSON.stringify("production")
			  // }
    	// }),
    	// new webpack.optimize.UglifyJsPlugin({ //js压缩代码 开发时先关掉
    	// 	compress: true
    	// })		
	],
	watch: true //监听模式
}

