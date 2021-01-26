/*global __dirname, require, module*/
const path = require('path');

const srcRoot = path.join(__dirname, '..', 'src');
const nodeRoot = path.join(__dirname, '..', 'node_modules');
const outputPath = path.join(__dirname, '..', 'lib');

const config = {
  entry: {
    butterchurnPresetsBase: srcRoot + '/base.js',
    butterchurnPresetsExtra: srcRoot + '/extra.js',
    butterchurnPresetsImage: srcRoot + '/image.js',
    butterchurnPresetsMD1: srcRoot + '/md1.js',
    butterchurnPresetsMinimal: srcRoot + '/minimal.js',
    butterchurnPresetsNonMinimal: srcRoot + '/nonMinimal.js',
    butterchurnPresetPackMeta: srcRoot + '/presetPackMeta.js',
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
    modules: [srcRoot, nodeRoot],
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
