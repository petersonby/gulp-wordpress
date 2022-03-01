import { watch, series } from 'gulp';
import { styles } from './styles';
import { scripts } from './scripts';
import { lint } from './lint';
import { svgSprites } from './svgSprites';

export function watcher(done) {
	watch('src/scss/**/*.scss', { ignoreInitial: false }, series(styles));
	watch('src/js/**/*.js', { ignoreInitial: false }, series(scripts, lint));
	watch('assets/img/svg/*.svg', { ignoreInitial: false }, series(svgSprites));
	done();
}