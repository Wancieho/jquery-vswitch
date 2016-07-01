var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var strip = require('gulp-strip-comments');
var header = require('gulp-header');
var license = '/*\n' +
		' * Project: vSwitch\n' +
		' * Description: Checkbox switch jQuery plug-in\n' +
		' * Author: https://github.com/Wancieho\n' +
		' * License: MIT\n' +
		' * Version: 0.0.2\n' +
		' * Dependancies: jquery-1.*\n' +
		' * Date: 24/06/2016\n' +
		' */\n';

gulp.task('default', [
	'css-copy',
	'css-minify',
	'css-blue-copy',
	'css-blue-minify',
	'js-copy',
	'js-minify'
]);

gulp.task('css-copy', function () {
	return gulp.src('source/css/vswitch.less')
			.pipe(less())
			.pipe(gulp.dest('dist/css'));
});

gulp.task('css-minify', function () {
	return gulp.src('source/css/vswitch.less')
			.pipe(less())
			.pipe(minify({compatibility: 'ie8'}))
			.pipe(rename('vswitch.min.css'))
			.pipe(gulp.dest('dist/css'));
});

gulp.task('css-blue-copy', function () {
	return gulp.src('source/css/vswitch-blue.less')
			.pipe(less())
			.pipe(gulp.dest('dist/css'));
});

gulp.task('css-blue-minify', function () {
	return gulp.src('source/css/vswitch-blue.less')
			.pipe(less())
			.pipe(minify({compatibility: 'ie8'}))
			.pipe(rename('vswitch-blue.min.css'))
			.pipe(gulp.dest('dist/css'));
});

gulp.task('js-copy', function () {
	return gulp.src('source/js/jquery.vswitch.js')
			.pipe(strip())
			.pipe(header(license))
			.pipe(gulp.dest('dist/js'));
});

gulp.task('js-minify', function () {
	return gulp.src('source/js/jquery.vswitch.js')
			.pipe(uglify())
			.pipe(header(license))
			.pipe(rename('jquery.vswitch.min.js'))
			.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
	gulp.watch('source/css/vswitch.less', ['css-copy']);
	gulp.watch('source/css/vswitch.less', ['css-minify']);
	gulp.watch('source/css/vswitch-blue.less', ['css-blue-copy']);
	gulp.watch('source/css/vswitch-blue.less', ['css-blue-minify']);
	gulp.watch('source/js/jquery.vswitch.js', ['js-copy']);
	gulp.watch('source/js/jquery.vswitch.js', ['js-minify']);
});