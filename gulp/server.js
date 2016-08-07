"use strict";

const gulp = require('gulp');
const browser = require('browser-sync');
const rewrite = require('connect-modrewrite');
const config = require('../config');

gulp.task('server', (done) => {
    browser({
        ghostMode: {
            clicks: false,
            location: false,
            forms: false,
            scroll: false
        },
        server: {
            baseDir: config.dist,
            middleware: [
                rewrite([
                    '^[^\\.]*$ /index.html [L]'
                ])
            ]
        },
        notify: false
    });
    done();
});