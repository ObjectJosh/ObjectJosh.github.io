'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed')
var livereload = require('gulp-livereload');

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// Compile SCSS

gulp.task('compile_scss', function() {
    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});

// Detect changes in SCSS
gulp.task('watch_scss', function() {
    // livereload.listen();
    gulp.watch(SCSS_SRC, gulp.series('compile_scss'));
});

// Run tasks
gulp.task('default', gulp.series('watch_scss'));