import {src, dest, series, parallel} from 'gulp';
import {clean} from './clean';
import {serve} from './serve';
import {assets} from './assets';
import {scripts} from './scripts';
import {styles} from './styles';
import {svgSprites} from './svgSprites';
import {watcher} from './watcher';
import info from '../package.json';
import replace from "gulp-replace";
import zip from "gulp-zip";

const paths = {
	package: {
		src: [
		      "**/*",
		      "!.vscode",
		      "!node_modules{,/**}",
		      "!packaged{,/**}",
		      "!src{,/**}",
		      "!.babelrc",
		      "!.gitignore",
		      "!gulpfile.babel.js",
		      "!package.json",
		      "!package-lock.json"
    	],
		dest: 'packaged'
	}
}

export function build(done) { 
	return series(
		clean, 
		svgSprites,
		parallel(styles, scripts, assets)
		)(done)
}

export function defaultTask() {
	return series(build, parallel(watcher, serve))()
}

export function compress() {
	return src(paths.package.src)
		.pipe(replace('_themename', info.name))
		.pipe(zip(`${info.name}.zip`))
		.pipe(dest(paths.package.dest));
}

export function bundle(done) { 
	return series(
		build,compress
	)(done);
}


exports.serve = serve;
exports.clean = clean;
exports.scripts = scripts;
exports.styles = styles;
exports.svgSprites = svgSprites;
exports.build = build;
exports.bundle = bundle;
exports.assets = assets;
exports.watcher = watcher;
exports.compress =	compress;
exports.default =	defaultTask;