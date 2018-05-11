const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname);
const template = path.resolve(root, 'src', 'index.html.ejs');

const cssLoader = {
  loader: 'css-loader',
  options: {
    minimize: process.env.NODE_ENV === 'production'
  }
};

module.exports = {
  context: path.join(root, 'src'),
  entry: ['babel-polyfill', './index.js'],
  output: {
    publicPath: '/',
    path: path.join(root, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id]_chunk.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {
        test: /\.(css)$/,
        loaders: ['style-loader', cssLoader, 'postcss-loader']
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style-loader', cssLoader, 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|mp4)$/,
        loaders: ['url-loader?limit=8192']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'App title', template, inject: 'body'})
  ]
};
