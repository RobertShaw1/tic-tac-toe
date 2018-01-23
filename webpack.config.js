'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CLIENT_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');


module.exports = {
  entry: './src/index.js',
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js'
  },
  // devserver: {
  //   contentbase: PUBLIC_DIR,
  // },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: CLIENT_DIR,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    // new CleanWebpackPlugin([PUBLIC_DIR]),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Development'
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      CLIENT_DIR,
    ],
    extensions: ['.js', '.jsx']
  },
};

