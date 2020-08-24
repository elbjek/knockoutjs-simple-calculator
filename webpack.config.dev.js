const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	devServer: {
		contentBase: 'dist',
		port: 3000
	},
	devtool: 'inline-source-map',
	plugins: [
		new HTMLWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html'
		}),
	],
	module: {
		rules: [
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
		},
		],
	},
}