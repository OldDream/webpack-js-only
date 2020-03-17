const { smart } = require('webpack-merge');
const base = require('./webpack.config.base')
const path = require('path');

module.exports = smart(base, {
	output: {
		path: path.resolve(__dirname, 'dist-dev'), //必须是绝对路径
		filename: 'actionsAssemble.js',
		publicPath: ''
	},
	devtool: 'cheap-module-eval-source-map', //开发环境下使用
})