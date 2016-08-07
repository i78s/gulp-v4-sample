'use strict';

const gulp = require('gulp');
const util = require("gulp-util");
const webpack = require('webpack');
const browser = require('browser-sync');
const conf = require('../webpack.config.js');

gulp.task('webpack', (done) => {
    return exeWebpack(false, done);
});

gulp.task('webpack.watch', (done) => {
    return exeWebpack(true, done);
});

function exeWebpack(watch, done) {
    conf.watch = watch;
    webpack(conf, (err, stats) => {
        if(err) return console.error(err);
        let jsonStats = stats.toJson();
        if(jsonStats.errors.length > 0) {
            jsonStats.errors.forEach((value) => {
                console.error(value);
            });
            return;
        }
        if(jsonStats.warnings.length > 0) {
            jsonStats.warnings.forEach((value) => {
                console.log(value);
            });
        }
        browser.reload();
        done();
    })
}