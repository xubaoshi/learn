/**
 * Created by xubaoshi on 2016/8/11.
 */
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
	entry: './todo.js',
	output: {
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
		],
		plugins: [
			new DashboardPlugin(dashboard.setData)
		]
	}
}