'use strict';
const path = require('path');

const CLIENT_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');


module.exports = {
  entry: './src/index.js',
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: CLIENT_DIR,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    }],
  },
  resolve: {
    modules: [
      'node_modules',
      CLIENT_DIR,
    ],
    extensions: ['.js', '.jsx']
  },
};
