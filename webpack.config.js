var path = require('path')

module.exports = {
  entry: ['./src/index'], // file extension after index is optional for .js files
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'ketchup-notifications',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'bundle.js'
  },
  module: {
    // Special compilation rules
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
