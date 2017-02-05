const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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

  plugins: [
    new ExtractTextPlugin({ filename: '[name].css', allChunks: false }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: [
          path.resolve(__dirname, '../src'),
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
      },
    ],
  },

  resolve: {
    modules: [
      path.join(__dirname, '../src'),
      'node_modules',
    ],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },
};

module.exports = config;
