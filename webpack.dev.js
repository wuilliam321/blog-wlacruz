const merge = require('webpack-merge');
const {DefinePlugin} = require('webpack');
const common = require('./webpack.common');

const apiHost = process.env.API_HOST || '';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map ',
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    })
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
});
