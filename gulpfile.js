'use strict';

const gulp = require('gulp');

gulp.task('copy', function() {
  return gulp.src('source/**/*.{html,js,css}')
    .on('data', function(file) {
      console.log({
        base: file.base
      });
    })
    .pipe(gulp.dest('build'));
});
