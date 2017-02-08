var path = require('path');
var webpack = require('webpack');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
var WebpackChunkHash = require('webpack-chunk-hash')

module.exports = {
    entry: {
        main: './index.js',
        vendor: 'moment'
    },
    output: {
        filename: '[chunkhash][name].bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest']
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
            filename:'chunk-manifest.json',
            manifestVariable:'webpackManifest'
        })
    ]
}