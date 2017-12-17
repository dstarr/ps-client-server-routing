/* eslint strict: 0 */
'use strict';

const webpack = require('webpack');
const path = require('path');
const importer = require('sass-import-modules').importer;

//
// Output directory and environment.
//
const dist = path.join(__dirname, '..', 'server', 'public', 'dist');
const env = process.env.NODE_ENV || 'development';

const loaders = [
  'style',
  'css',
  'sass',
  'postcss?parser=postcss-scss'
].join('!');

const variables = {
  'uxcore-market': process.env.UXCORE_LANG || 'en',
  'uxcore-label': process.env.UXCORE_LABEL || 'gd'
};

module.exports = {
  name: 'JS',
  devtool: 'source-map',

  entry: path.join(__dirname, 'src', 'app.js'),

  externals: {
    '@ux/uxcore2': 'ux',
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  output: {
    path: dist,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },


  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {
        // plugins: ['babel-plugin-external-helpers'],
        // TODO, remove workaround, see https://github.com/babel/babel/pull/3207.
        presets: [
          require.resolve('babel-preset-es2015'),
          require.resolve('babel-preset-react')
        ]
      }
    }, {
      test: /\.scss$/,
      loader: loaders
    }]
  },
  postcss: () => [
    require('mq4-hover-shim').postprocessorFor({hoverSelectorPrefix: '.bs-true-hover '}),
    require('postcss-discard-duplicates'),
    require('autoprefixer'),
    require('postcss-global-scss-vars')({variables})
  ],

  sassLoader: {
    importer: importer({resolvers: ['local', 'node', 'partial']})
  }
};