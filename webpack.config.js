const path = require('path');
const {DefinePlugin, NamedModulesPlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname);
const apiHost = process.env.API_HOST || '';
const template = path.resolve(root, 'src', 'index.html.ejs');

module.exports = {
  mode: 'development',
  context: path.join(root, 'src'),
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  devtool: 'cheap-eval-source-map ',
  output: {
    publicPath: '/',
    path: path.join(root, 'dist', 'client'),
    filename: '[name].bundle.js',
    chunkFilename: '[id]_chunk.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.(css)$/, loaders: ['style-loader', 'css-loader', 'postcss-loader']},
      {test: /\.(scss|sass)$/, loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']},
      {test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|mp4)$/, loaders: ['url-loader?limit=8192']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'App title', template, inject: 'body'}),
    new DefinePlugin({
      __DEV__: true
    }),
    new NamedModulesPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: apiHost,
        secure: false
      },
      '/': {
        target: apiHost,
        secure: false
      }
    }
  }
};
