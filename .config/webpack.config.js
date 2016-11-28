const webpack = require('webpack');
const path = require('path');

let config = {
  context: path.resolve(__dirname, '../src'),

  output: {
    path: path.resolve(__dirname, '../public/assets'),
    publicPath: '/assets/',
    sourcePrefix: '',

    // client side
    filename: '[name].js',
  },

  devServer: {
    contentBase: 'public',
    compress: true,
  },

  entry: {
    app: ['./client.js']
  },

  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../src'),
        ],
      },
    ],
  },

  resolve: {
    root: path.resolve(__dirname, '../src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },
};

module.exports = config;
