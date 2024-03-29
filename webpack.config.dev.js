const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');
const path = require('path');
const webpackKillProcess = require('webpack-kill-process');

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, 'dist-dev'), //必须是绝对路径
    filename: 'actionsAssemble.js',
    publicPath: '',
  },
  devtool: 'eval-cheap-module-source-map', //开发环境下使用
  plugins: [webpackKillProcess],
});
