/*global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
const env  = require('yargs').argv.env;

const srcRoot = path.join(__dirname, '..', 'src');
const nodeRoot = path.join(__dirname, '..', 'node_modules');
const outputPath = path.join(__dirname, '..', 'lib');

let plugins = [];
let outputFile = '[name]';

if (env === 'prod') {
  outputFile += '.min';
}

let config = {
  entry: {
    butterchurnPresets: srcRoot + '/index.js',
    butterchurnPresetsExtra: srcRoot + '/extra.js',
    butterchurnPresetsExtra2: srcRoot + '/extra2.js',
    butterchurnPresetsMD1: srcRoot + '/md1.js',
    butterchurnPresetsMinimal: srcRoot + '/minimal.js',
    butterchurnPresetsNonMinimal: srcRoot + '/nonMinimal.js',
    butterchurnPresetPackMeta: srcRoot + '/presetPackMeta.js',
  },
  devtool: 'source-map',
  output: {
    path: outputPath,
    filename: outputFile + '.js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            plugins: ['@babel/plugin-transform-runtime'],
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  resolve: {
    modules: [srcRoot, nodeRoot],
    extensions: ['.js']
  },
  plugins: []
};


if (env === 'prod') {
  config.plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),

    new UglifyJsPlugin({ parallel: true })
  );
}

module.exports = config;
