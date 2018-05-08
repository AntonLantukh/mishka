'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemap');
const browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  return gulp.src('source/**/style.scss', {base: 'source'})
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('html', function() {
  return gulp.src('source/**/*.html', {base: 'source'})
    .pipe(gulp.dest('build'));
});

gulp.task('assets', function() {
  return gulp.src('source/**/*.{woff,woff2,svg,jpg,png,js,html}')
})

gulp.task('clean', function() {
  return del('public');
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'build'
  });

  gulp.watch("source/**/*.scss", ['styles']);
  gulp.watch("source/**/*.html"), ['html']);
});

gulp.watch('source/**/style.scss', gulp.series('build'));
gulp.task(`build`, gulp.series('clean', gulp.parallel('styles', 'assets')));
