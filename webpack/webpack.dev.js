const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const portFinder = require('portfinder-sync');

const DEV_PORT = 3000;
const OPEN_PORT = portFinder.getPort(DEV_PORT);

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: __dirname + '/public',
    port: OPEN_PORT,
    hot: true,
    open: true,
    historyApiFallback: true,
    /*Proxy request to backend target domain*/
    // proxy: {
    //   "/api/v1/": {
    //     target: "https://crm-apis.dev.licious.app",
    //     changeOrigin: true,
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.module.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:6]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          'resolve-url-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
});
module.exports = devConfig;
