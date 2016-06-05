const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const DEV = process.env.NODE_ENV==='development';

const config = {
  entry: './src',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  devtool: DEV ? 'cheap-module-source-map' : null,
  devServer: {
    contentBase: 'public',
    historyApiFallback:{
      index: '/index.html'
    }
  },
  plugins: [],
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

if(DEV){
  config.plugins.push(
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
  )
}

module.exports = config;