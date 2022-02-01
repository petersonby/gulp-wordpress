import { series, parallel } from 'gulp';
import { clean } from './clean';
import { serve } from './serve';
import { scripts } from './scripts';
import { lint } from './lint';
import { styles } from './styles';
import { svgSprites } from './svgSprites';
import { watcher } from './watcher';

export function build(done) { 
	return series(
		clean, 
		svgSprites,
		parallel(styles, lint, scripts)
		)(done)
}

export function defaultTask() {
	return series(build, parallel(watcher, serve))()
}

exports.serve = serve;
exports.clean = clean;
exports.scripts = scripts;
exports.lint = lint;
exports.styles = styles;
exports.svgSprites = svgSprites;
exports.build = build;
exports.watcher = watcher;
exports.default = defaultTask;