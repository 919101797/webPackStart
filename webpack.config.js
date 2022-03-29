/*
 * @Author: cc
 * @Date: 2022-03-28 10:44:11
 * @LastEditors: cc
 * @LastEditTime: 2022-03-29 20:00:21
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \webpack\webpack.config.js
 */
const { dirname } = require("path");
const path = require("path");
// const svgToMiniDataURI  = require('mini-svg-data-uri');

module.exports = {
  // entry: "./index.js",
  entry: {
    
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        // 加载样式
        test: /\.(s?[ac]ss)|(less)|(styl)$/i,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
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
          filename: 'static/[hash][ext][query]'
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
};
