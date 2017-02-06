const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

/* Constants */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), {
    devtool: 'source-map',
    output: {
      path: helpers.root('dist'),
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      rules: [
        /*{
          test: /\.ts$/,
          use: ['tslint-loader'],
          exclude: [/\.(spec|e2e)\.ts$/],
        },*/
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: [helpers.root('src', 'styles')]
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: [helpers.root('src', 'styles')]
        }
      ]
    },
    devServer: {
      host: HOST,
      port: PORT,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  });
};
