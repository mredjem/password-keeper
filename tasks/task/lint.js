(function() {

  'use strict';

  const gulp = require('gulp');
  const jshint = require('gulp-jshint');

  const configJson = require('../config.json');

  let jshintTask = () => {
    return gulp.src(configJson.src)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  };

  gulp.task('lint', jshintTask);
  module.exports = jshintTask;

}());
