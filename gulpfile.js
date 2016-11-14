(function() {

  'use strict';

  const gulp = require('gulp');

  gulp.task('lint', require('./task/lint'));
  gulp.task('doc', require('./task/doc'));
  gulp.task('electron', require('./task/electron'));

}());
