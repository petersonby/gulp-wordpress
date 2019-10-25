import { watch,series } from 'gulp';
import {styles} from './styles';
import {scripts} from './scripts';
import {svgSprites} from './svgSprites';
import {assets} from './assets';

export function watcher(done) {
	watch('src/css/**/*.*', series(styles));
	watch('src/js/**/*.*', series(scripts));
	watch('src/assets/**/*.svg', series(svgSprites));
	watch('src/assets/**/*.*', series(assets));
	done();
}