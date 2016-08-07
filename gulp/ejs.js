"use strict";

const gulp = require('gulp');
const ejs = require('gulp-ejs');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browser = require('browser-sync');
const config = require('../config');

gulp.task('ejs', () => {
    return gulp.src(config.path.ejs.src)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(ejs({}, {"ext": ".html"}))
        .pipe(gulp.dest(config.path.ejs.dest))
        .pipe(browser.stream());
});