var config = {
	less: {
		src: './public/src/less',
		dest: './public/build/css'
	},
	js: {
		src: './public/src/js',
		dest: './public/build/js/demo'
	}
}

module.exports = {
	entry: {
		//这里添加js的文件名
		test: config.js.src + '/demo/test.js',
		login: config.js.src + '/demo/login.js'
	},
	output: {
		filename: '[name].js'
	},
    module: {
 		loaders: [{
        	test: /\.js$/,
        	exclude: /node_modules/,
        	loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	}
};