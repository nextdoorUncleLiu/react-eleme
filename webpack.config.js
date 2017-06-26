let path = require('path');
module.exports = {
	entry:path.resolve(__dirname,'./app/app.js'),
	output:{
		path:path.resolve(__dirname,'./build'),
		filename:'js/build.js'
	},
	module:{
		loaders:[
			{
				test:/\.js|jsx?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']
				}
			},
			{
				test: /\.css$/,
				exclude: ['/node_modules/antd/dist/'],
				loader: 'style-loader!css-loader'
			},
			{
	　　　　　　test: /\.(png|jpg)$/,
	　　　　　　loader: 'url-loader?limit=8192'
	　　　　},
			{
				test: /\.svg/,
				loader: 'svg-url-loader'
			}
		]
	},
	resolve: {
		extensions: ['.web.js', '.js', '.json']
	}
}
