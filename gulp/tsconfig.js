'use strict';

const gulp = require('gulp');
const exec = require('child_process').exec;

gulp.task('tsconfig', (done) => {
    return exec(`$(npm bin)/tsconfig -u`, (error, stdout, stderr) => {
        if (stdout) console.log(`${stdout}`);
        if (stderr) console.error(`${stderr}`);
        if (error) console.error(`${error}`);
        done();
    });
});