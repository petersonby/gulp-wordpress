import browserSync from "browser-sync";
const server = browserSync.create();

export function serve(done) {
	server.init({
		proxy: "http://localhost/boilerplate"
	});

	server.watch('build/**/*.*').on('change', server.reload);
	server.watch("**/*.php").on('change', server.reload);
	done();
}