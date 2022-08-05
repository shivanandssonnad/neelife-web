const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(process.cwd(), 'src/index.js'),
  resolve: {
    extensions: ['.jsx', '.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: '/src/assets/icons/*.svg',
        type: 'asset/resource',
        issuer: /\.[jt]sx?$/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|woff(2)?|ttf|otf|)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'public/index.html'),
    }),
  ],
  stats: 'errors-only',
};
