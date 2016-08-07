"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browser = require('browser-sync');
const config = require('../config');

gulp.task('style', () => {
    return gulp.src(config.path.sass.src)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(sass())
        .pipe(gulp.dest(config.path.sass.dest))
        .pipe(browser.stream());
});