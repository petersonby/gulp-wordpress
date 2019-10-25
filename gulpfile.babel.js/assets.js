import {src, dest, lastRun} from 'gulp';

export function assets() {
	return src('src/assets/**', {since: lastRun('assets')})
		.pipe(dest('build'));
}