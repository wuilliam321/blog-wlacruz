const merge = require('webpack-merge');
const {DefinePlugin, HashedModuleIdsPlugin} = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false
    }),
    new UglifyJsPlugin(),
    new HashedModuleIdsPlugin()
  ],
  optimization: {
    splitChunks: {
      // name: true,
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          // minSize: 1,
          minChunks: 2,
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: 'common'
    }
  }
});
