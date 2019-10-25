import {src, dest} from 'gulp';
import gulpIf from 'gulp-if';
import csso from 'gulp-csso';
import concat from 'gulp-concat';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import yargs from 'yargs';
const PROD = yargs.argv.prod;


export function styles() {
	const plugins = [
		autoprefixer()
	];
	
  return src('src/css/**/*.css')
		.pipe(concat('style.css'))
		.pipe(postcss(plugins))
		.pipe(gulpIf(PROD, csso()))
	  	.pipe(dest('build/css'));
}
