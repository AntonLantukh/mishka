'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const del = require('del');
const browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  return gulp.src('source/sass/style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest('source/css/'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css/'));
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

  gulp.watch("source/**/*.scss", gulp.series('clean','styles'));
  gulp.watch("source/**/*.html", gulp.series('clean','html'));
});

gulp.task(`build`, gulp.series('clean', gulp.parallel('styles', 'html', 'assets')));
