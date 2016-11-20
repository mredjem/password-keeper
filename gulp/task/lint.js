(function() {

  'use strict';

  const gulp = require('gulp');
  const jshint = require('gulp-jshint');

  let jshintTask = () => {
    return gulp.src('./app/javascripts/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  };

  gulp.task('lint', jshintTask);
  module.exports = jshintTask;

}());
