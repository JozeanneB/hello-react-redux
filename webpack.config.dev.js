import path from 'path'

export default {
  devtools: 'eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    filename: 'bundle.js',
    path:'/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname,'client'),
        loaders: [ 'babel' ]
      }
    ]
  },
  resolve: {
    extentions:[ '', '.js']
  }
}
