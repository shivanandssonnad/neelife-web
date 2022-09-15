const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = merge(commonConfig, {
  mode: 'production',
  clean: true,
  module: {
    rules: [
      {
        test: /\.module.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:6]',
                exportLocalsConvention: 'camelCase',
              },
              sourceMap: true,
            },
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
});

module.exports = prodConfig;
