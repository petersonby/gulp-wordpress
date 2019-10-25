import {src, dest} from 'gulp';
import gulpIf from 'gulp-if';
import svgSprite from 'gulp-svg-sprite';
import svgo from 'gulp-svgo';
import yargs from 'yargs';
const PROD = yargs.argv.prod;

export function svgSprites() {
	return src('src/assets/img/*.svg')
		.pipe(svgSprite({
      mode: {
        stack: {
            sprite: "../sprite.svg"
        }
      },
    }))
    .pipe(gulpIf(PROD,svgo()))
		.pipe(dest('build/sprite'));
}
