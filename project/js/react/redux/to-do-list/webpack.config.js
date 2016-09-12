/**
 * Created by xubaoshi on 2016/8/11.
 */
module.exports = {
	entry : './todo.js',
	output : {
		filename : 'bundle.js'
	},
	resolve : {
		extensions : ['', '.js', '.jsx']
	},
	module : {
		loaders : [
			{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','stage-2'],
                    plugins: ['transform-class-properties']
                }
            },
		]
	}
}