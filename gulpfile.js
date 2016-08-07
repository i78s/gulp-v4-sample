"use strict";

const gulp = require('gulp');
const config = require('./config');

// task
require('./gulp/clean');
require('./gulp/ejs');
require('./gulp/style');
require('./gulp/server');
require('./gulp/webpack');
require('./gulp/tsconfig');


gulp.task('watch', () => {
    gulp.watch(config.path.ejs.src, gulp.parallel('ejs'));
    gulp.watch(config.path.sass.src, gulp.parallel('style'));

});

const defaultTasks = gulp.series('tsconfig','server','watch','webpack.watch');
gulp.task('default', defaultTasks);

const buildTasks = gulp.series('clean','tsconfig','style','ejs','webpack');
gulp.task('build', buildTasks);