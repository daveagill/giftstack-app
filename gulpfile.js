var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer');
var del = require('del');


var cordova_www_dir = './cordova-project/www'

var config = {
	deploy: {
		root: cordova_www_dir,
		views: cordova_www_dir + '/views',
		js: cordova_www_dir + '/js',
		css: cordova_www_dir + '/css',
		vendors: cordova_www_dir + '/vendors'
	}
}

gulp.task('clean-vendors', function() {
	return del(config.deploy.vendors + '/**/*');
});

gulp.task('deploy-vendor-angular', ['clean-vendors'], function() {
	return gulp.src(['./node_modules/angular/angular.js'])
		.pipe(gulp.dest(config.deploy.vendors + '/angular'));
});

gulp.task('deploy-vendor-onsenui', ['clean-vendors'], function()  {
	return gulp.src('./node_modules/onsenui/+(js|css)/**/*')
		.pipe(gulp.dest(config.deploy.vendors + '/onsenui'));
});

gulp.task('vendors-deploy', ['deploy-vendor-angular', 'deploy-vendor-onsenui']);




gulp.task('bundle-and-deploy-app-js', function() {
	var b = browserify({
		entries: './app.js',
		debug: false
	});

	return b.bundle()
		.pipe(source('giftstack.js'))
		.pipe(buffer())
		.pipe(gulp.dest(config.deploy.js));
});


gulp.task('deploy-html-views', function() {
	gulp.src('./index.html')
		.pipe(gulp.dest(config.deploy.root));

	del(config.deploy.views + '/**/*');

	gulp.src('./components/**/*.html')
		.pipe(gulp.dest(config.deploy.views));
});

gulp.task('deploy-css', function() {
	gulp.src('./styles.css')
		.pipe(gulp.dest(config.deploy.css));
});

gulp.task('app-deploy', ['bundle-and-deploy-app-js', 'deploy-html-views']);
gulp.task('full-deploy', ['vendors-deploy', 'app-deploy']);
gulp.task('default', ['full-deploy']);