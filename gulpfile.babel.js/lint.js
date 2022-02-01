import { src } from 'gulp';

import eslint from '@doamatto/gulp-eslint';

export function lint() {
	return src('src/js/components/**.js')
        .pipe(eslint({
            "fix": true
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}