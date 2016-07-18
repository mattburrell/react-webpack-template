module.exports = {
  entry: './index',
  output: {
    filename: 'browser-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader'
      }
    ],
    query: {
          presets: ['es2015', 'react']
      }
  }
};
