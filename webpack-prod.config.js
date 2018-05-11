const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname);
const template = path.resolve(root, 'src', 'index.html.ejs');

const cssLoader = {
  loader: 'css-loader',
  options: {
    minimize: true
  }
};

module.exports = {
  mode: 'production',
  context: path.join(root, 'src'),
  entry: ['babel-polyfill', './index.js'],
  output: {
    publicPath: '/',
    path: path.join(root, 'dist', 'client'),
    filename: '[name].[chunkhash].bundle.js',
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
    new HtmlWebpackPlugin({title: 'App title', template, inject: 'body'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      __DEV__: false
    }),
    new webpack.NamedModulesPlugin(),
    new UglifyJsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      // A name of the chunk that will include the dependencies.
      // This name is substituted in place of [name] from step 1
      name: 'vendor',

      // A function that determines which modules to include into this chunk
      minChunks: module =>
        module.context && module.context.includes('node_modules')
    }),
    // This plugin must come after the vendor one (because webpack
    // includes runtime into the last chunk)
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',

      // minChunks: Infinity means that no app modules
      // will be included into this chunk
      minChunks: Infinity,
      filename: 'runtime.js'
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
};
