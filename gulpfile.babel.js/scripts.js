import {src, dest} from 'gulp';
import gulpIf from 'gulp-if';
import uglify from 'gulp-uglify';
import webpack from 'webpack-stream';
import yargs from 'yargs';
const PROD = yargs.argv.prod;

export function scripts() {
	return src('src/js/bundle.js')
		.pipe(webpack({
			module: {
				rules: [
					{
						test: /\.js$/,
						use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
						}
					}
				]
			},
			mode: PROD ? 'production' : 'development',
			devtool: !PROD ? 'inline-source-map' : false,
			output: {
				filename: 'bundle.js'
			},
			externals: {
				jquery: 'jQuery'
			},
		}))
		.pipe(gulpIf(PROD, uglify()))
		.pipe(dest('build/js'));
}