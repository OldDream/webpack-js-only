const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	entry: './src/actionsAssemble.js',
	watch: true,
	watchOptions: {
		poll: 100, // 每秒询问多少次
		aggregateTimeout: 500,  //防抖 多少毫秒后再次触发
		ignored: /node_modules/
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								"@babel/env",
								{
									"useBuiltIns": "usage",
									"corejs": 3
								}
							]
						],
						plugins: [
							[
								"@babel/plugin-transform-runtime"
							]
						]
					}
				},
				exclude: /node_modules/ //排除 node_modules 目录
			}
		],
	},
	plugins: [
		new CleanWebpackPlugin(), // 清理输出目录
		{
      apply: (compiler) => {
        compiler.hooks.done.tap('DonePlugin', (stats) => {
					console.log('Compile is done !')
					setTimeout(()=> {
						process.exit(0)
					})
        });
      }
    }
	]
}
