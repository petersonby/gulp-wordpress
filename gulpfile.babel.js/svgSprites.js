import {src, dest} from 'gulp';
import svgSprite from 'gulp-svg-sprite';

export function svgSprites() {
	return src('assets/img/svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            },
            shape: {
              transform: [
                {
                  svgo: {
                    plugins: [
                      {
                        removeUselessStrokeAndFill: false,
                      },
                    ],
                  },
                },
              ],
            },
        }))
        .pipe(dest('assets/sprite'));
}
