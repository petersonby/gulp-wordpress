import { watch,series } from 'gulp';
import {styles} from './styles';
import {scripts} from './scripts';
import {svgSprites} from './svgSprites';

export function watcher(done) {
	watch('src/scss/**/*.scss', series(styles));
	watch('src/js/**/*.js', series(scripts));
	watch('assets/**/*.svg', series(svgSprites));
	done();
}