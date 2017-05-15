const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve('src/index.js'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve('build'),
	},
	plugins: [
		new HtmlPlugin({
			title: 'landing_boiler',
			template: path.resolve('src/template.html'),
		}),
	],
};
