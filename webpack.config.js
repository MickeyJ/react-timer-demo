const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
  entry: './src',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public',
    historyApiFallback:{
      index: '/index.html'
    }
  },
  plugins: [
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};

module.exports = config;