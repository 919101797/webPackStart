/*
 * @Author: cc
 * @Date: 2022-03-30 18:06:53
 * @LastEditors: cc
 * @LastEditTime: 2022-03-30 18:06:55
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
