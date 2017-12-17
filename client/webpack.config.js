const path = require('path');

const dist = path.join(__dirname, '..', 'server', 'public', 'dist');

module.exports = {

  entry: path.join(__dirname, 'src', 'app.js'),

  output: {
    path: dist,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },


  module: {
    loaders: [
      {test: /\.jsx?$/, loader: "babel-loader"},

      // Used for Bootstrap Less Source Files
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
      // Used for Bootstrap Less Source Files
      { test: /\.css/, loader: 'style-loader!css-loader' },
      // Used for Bootstrap Glyphicon Fonts
      { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file-loader' }
    ]
  }
};