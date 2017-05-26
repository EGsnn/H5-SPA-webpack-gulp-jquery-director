var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry:{
		app:'./src/js/myroute.js'
		// home2:'./src/index2'该行可以编译出两个不同的js文件
	},
	output:{
		publicPath: '/dist/', //服务器根路径
		path: __dirname + '/dist', //编译到当前目录下的dist目录下!!!!请勿随意修改
		filename: '[name].js' //编译后的文件名字
	},
	module: {
	  loaders: [{
			  test: /\.js$/,
			  loader: 'babel?presets=es2015'
		  }/*, {
			  test: /\.css$/,
			  loaders: ['style', 'css', 'autoprefixer']
		  }, {
			  test: /\.less/,
			  loaders: ['style', 'css', 'autoprefixer', 'less'],
		  }, {
			  test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
			  loader: 'file-loader?name=[hash].[ext]'
		  }, {
			  test: /\.(png|jpg)$/,
			  loader: 'url?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
		  }*/
	  ]
	},
	 plugins: [
	 		//new ExtractTextPlugin('style.css'),
			new webpack.optimize.CommonsChunkPlugin('test.common.js'), //将公用模块，打包进common.js
	  		//new webpack.optimize.DedupePlugin(),
	  		//new webpack.optimize.UglifyJsPlugin()	
	  ]
}