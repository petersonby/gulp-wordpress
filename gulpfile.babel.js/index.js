import {series, parallel} from 'gulp';
import {clean} from './clean';
import {serve} from './serve';
import {assets} from './assets';
import {scripts} from './scripts';
import {styles} from './styles';
import {svgSprites} from './svgSprites';
import {watcher} from './watcher';

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


exports.serve = serve;
exports.clean = clean;
exports.scripts = scripts;
exports.styles = styles;
exports.svgSprites = svgSprites;
exports.build = build;
exports.assets = assets;
exports.watcher = watcher;
exports.default =	defaultTask;