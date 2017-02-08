var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './index.js',
        vendor: 'moment'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        })
    ]
}