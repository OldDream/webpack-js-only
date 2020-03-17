const { smart } = require('webpack-merge');
const base = require('./webpack.config.base')
const path = require('path');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

let tempConfig = smart(base, {
	output: {
		path: path.resolve(__dirname, 'dist'), //必须是绝对路径
		filename: 'actionsAssemble.js',
		publicPath: ''
	},
	devtool: 'cheap-module-source-map',
})

module.exports =  smp.wrap(tempConfig)