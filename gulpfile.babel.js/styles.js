import { src, dest } from 'gulp';
import gulpIf from 'gulp-if';
import csso from 'gulp-csso';
import concat from 'gulp-concat';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import yargs from 'yargs';

const sass = require('gulp-sass')(require('sass'));

const PROD = yargs.argv.prod;

export function styles() {
	const plugins = [
		autoprefixer()
	];
	
  return src('src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.min.css'))
		.pipe(postcss(plugins))
		.pipe(gulpIf(PROD, csso()))
		.pipe(dest('build/css'))
}
