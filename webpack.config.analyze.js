const { smart } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const base = require('./webpack.config.base')
const prod = require('./webpack.config.prod')



module.exports = smart(base, prod, {
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: 'server'
		})
	]
})
