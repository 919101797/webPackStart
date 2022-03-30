/*
 * @Author: cc
 * @Date: 2022-03-30 18:06:53
 * @LastEditors: cc
 * @LastEditTime: 2022-03-30 19:10:49
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \webpack\express\server.js
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../config/webpack.config.js');
const compiler = webpack(config);

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置。
app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
  console.log('开启服务,端口：3000\n');
});