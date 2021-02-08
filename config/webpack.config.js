/*global __dirname, require, module*/
const path = require('path');

const root = path.join(__dirname, '..');
const nodeRoot = path.join(__dirname, '..', 'node_modules');
const outputPath = path.join(__dirname, '..', 'dist');

const config = {
  entry: {
    base: root + '/base.js',
    extra: root + '/extra.js',
    image: root + '/image.js',
    md1: root + '/md1.js',
    minimal: root + '/minimal.js',
    nonMinimal: root + '/nonMinimal.js',
    all: root + '/all.js',
    presetPackMeta: root + '/presetPackMeta.js',
  },
  output: {
    path: outputPath,
    filename: '[name]',
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
    modules: [root, nodeRoot],
    extensions: ['.js']
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    config.output.filename += '.min';
  }

  config.output.filename += '.js';

  return config;
};
