import browserSync from "browser-sync";
import info from '../package.json';

const server = browserSync.create();

export function serve(done) {
	server.init({
		proxy: `http://localhost:8888/${info.name}`
	});
	server.watch('build/**/*.*').on('change', server.reload);
	server.watch("**/*.php").on('change', server.reload);
	done();
}