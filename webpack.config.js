const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: './index.js',
	mode: 'development',
	module: {
		rules: [
			{
				loader: ['vue-style-loader', 'css-loader'],
				test: /\.css$/
			},
			{
				loader: 'vue-loader',
				test: /\.vue$/
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]'
					}
				}]
			}
		]},
	output: {
		filename: 'bundle.js',
		path: __dirname
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	}
}