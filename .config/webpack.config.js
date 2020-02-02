/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'production',

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
    app: ['./client.js'],
  },

  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',

  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: [path.resolve(__dirname, '../src')],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({ browsers: ['last 2 versions'] }),
              ],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  resolve: {
    modules: [path.join(__dirname, '../src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
};

module.exports = config;
