var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool:'cheap-module-source-map',
    entry: {
        main: './index.js',
        vendor: 'moment'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest']
        })
    ]
}