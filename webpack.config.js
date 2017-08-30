'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    test1: './app/view/base.jsx',
    human: './app/view/human/index.jsx',
    // vendors: [
    //   'react', 'react-dom',
    // ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'app/public/dist'),
    filename: '[name].js',
    publicPath: 'app/public/',
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   plugins: [ 'transform-runtime' ],
          // },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.resolve(__dirname, 'manifest.json'),
    }),
  ],
};
