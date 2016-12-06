var path = require('path')
var webpack = require('webpack')
module.exports = {
    entry:'./index.js',
    output:{
        filename:'bundle.index.js'
    },
    module:{
loaders: [
   { test: /\.vue$/, loader: 'vue', exclude: /node_modules/ },
  { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
]
    }
    
}