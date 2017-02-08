var path = require('path');
var webpack = require('webpack');

var options = {devtool:'cheap-module-source-map'}
// var options = {}

module.exports = {
    devtool: options.devtool,
    entry: {
        main: './index.js',
        vendor: 'moment'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // 公共模块抽取
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        // 7种模式
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: options.devtool && (options.devtool.indexOf('sourcemap') >= 0 || options.devtool.indexOf('source-map') >= 0)
        }),
        // 全局变量配置
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}