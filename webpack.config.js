var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/mole-redux.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'mole-redux.js',
    publicPath: '/dist/'

  },
  externals: {
    'mole-reporter': 'Mole'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};