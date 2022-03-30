/*
 * @Author: cc
 * @Date: 2022-03-28 10:44:11
 * @LastEditors: cc
 * @LastEditTime: 2022-03-30 18:47:02
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \webpack\config\webpack.config.js
 */
const { dirname } = require("path");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const svgToMiniDataURI  = require('mini-svg-data-uri');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
    directory:  path.join(__dirname, '../dist'),

    },
    open: true,
    port: 'auto',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
      bypass: function (req, res, proxyOptions) { // 浏览器请求api地址返回主页
        if (req.headers.accept.indexOf('html') !== -1) {
          console.log('Skipping proxy for browser request.');
          return '/index.html';
        }
      },
    },
  },
  entry: {
    'bundel_app':'./src/views/app.js',
    'bundel_index':'./src/views/index.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        // 加载样式
        test: /\.s?[ac]ss|less|styl$/i,
        use: [
          // "style-loader", // 将 JS 字符串生成为 style 节点
          {
            loader: MiniCssExtractPlugin.loader, // MiniCssExtractPlugin.loader在生产环境使用，style-loader在开发环境使用
          },
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          {
            loader: "sass-loader",
            options: {
              // `dart-sass` 是首选
              implementation: require("sass"),
            },
          }, // 将 Sass 编译成 CSS
          {
            loader: "less-loader",
          }, // 将 less 编译成 CSS
          {
            loader: "stylus-loader",
          }, // 将 stylus 编译成 CSS
        ],
      },
      { // 加载图片 和字体
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
            filename: 'static/img/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset', // svg格式图片转成base64数据格式
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 //  小于8kb的svg转换成dataUrl否则压缩成静态资源
          }
        },
        generator: {
          filename: 'static/img/[hash][ext][query]'
      }
        // generator:{
        //   dataUrl: content=> {
        //     content = content.toString();
        //    return svgToMiniDataURI(content);
        //   } //更小体积的dataurl 使用需要引用库
        // }
      },
      { // 加载图片 和字体
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
            filename: 'static/font/[hash][ext][query]'
        }
      },
      {
        test: /\.html/,
        type: 'asset/resource',
        generator: {
          filename: '../static/[hash][ext][query]'
        }
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpackapp呀',
      filename: 'index.html',
      scriptLoading: 'defer' // 'blocking'|'defer'|'module'
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new WebpackManifestPlugin(
      {
        publicPath: 'static',
        fileName: 'manifist.json',

      }
    ), //文件地址射映
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename:'[id].[hash].css',
    }) //单独打包css
  ]
};
