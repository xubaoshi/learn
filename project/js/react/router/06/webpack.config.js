/**
 * Created by xubaoshi on 2016/8/11.
 */
// var Dashboard = require('webpack-dashboard');
// var DashboardPlugin = require('webpack-dashboard/plugin');
// var dashboard = new Dashboard();
var webpack = require('webpack')

module.exports = {
	entry: './index.js',
	output: {
		path: 'public',
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    plugins: ['transform-class-properties']
                }
            },
		]
		,
		plugins:
		process.env.NODE_ENV === 'production'
			?
			[
				new webpack.optimize.DedupePlugin(),
				new webpack.optimize.OccurrenceOrderPlugin(),
				new webpack.optimize.UglifyJsPlugin()
			]
			:
			[
				// new DashboardPlugin(dashboard.setData)
			]
	}
}