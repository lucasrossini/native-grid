'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
  source: './src/grid.scss',
  destiny: './dist'
};

gulp.task('sass', function () {
  return gulp.src(config.source)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(config.destiny));
});

gulp.task('sass:watch', function () {
  gulp.watch(config.source, ['sass']);
});
