//webpack configure file
var config = require('./config');
var glob = require('glob');
var webpack = require('webpack');


//一个生成动态生成的函数
var entry = {};
glob(config.src + '/*/*.js' , function(err, files){
	if(err) throw err;
	files.forEach(function(value){
		var pathArr = value.split('/')
		  , fileName = pathArr.pop().match(/(.*)(\.js)$/)[1]
		  , pathName = pathArr.pop();
		entry[pathName + '/' + fileName] = value;
	});
});
module.exports = {
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
	        	loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
}
