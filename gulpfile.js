'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const del = require('del');
const browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  return gulp.src('source/**/style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('html', function() {
  return gulp.src('source/**/*.html', {base: 'source'})
    .pipe(gulp.dest('build'));
});

gulp.task('assets', function() {
  return gulp.src('source/**/*.{woff,woff2,svg,jpg,png,js}')
    .pipe(gulp.dest('build'));
})

gulp.task('clean', function() {
  return del('build');
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'build'
  });

  gulp.watch("source/**/*.scss", ['styles']);
  gulp.watch("source/**/*.html", ['html']);
});

gulp.task(`build`, gulp.series('clean', gulp.parallel('styles', 'html', 'assets')));
