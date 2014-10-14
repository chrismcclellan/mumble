var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jsdoc2md = require('gulp-jsdoc-to-markdown');

gulp.task('clean', function(cb) {
	del(['./build/*', './docs/*'], cb);
});

gulp.task('build', ['clean'], function() {
	return gulp
		.src('./src/mumble.js')
		.pipe(uglify({ preserveComments: 'some' }))
		.pipe(rename('mumble.min.js'))
		.pipe(gulp.dest('./build'));
});

gulp.task('jsdoc', ['clean'], function() {
	return gulp
		.src('./src/mumble.js')
		.pipe(jsdoc2md())
		.pipe(rename('mumble.md'))
		.pipe(gulp.dest('./docs'));
});

gulp.task('default', ['clean', 'build', 'jsdoc']);