const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
        './src/js/index.js'
	],
	output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
	},
	module: {
		rules: [{
			test:/\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			options: {
				presets: ["react", "es2015"]
			},
		},{
			test:/\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	plugins: [
        new HtmlWebpackPlugin({
        	template: './index.html',
        	inject: 'body',
        	filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
	]
}