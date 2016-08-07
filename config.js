'use strict';

module.exports = {
    dist: 'public',
    path: {
        clean: {
            dest: 'public/*'
        },
        ejs: {
            src: ['src/ejs/**/*.ejs'],
            dest: 'public/'
        },
        sass: {
            src: ['src/sass/**/*.scss'],
            dest: 'public/css'
        }
    }
};