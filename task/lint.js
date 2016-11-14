(function() {

  'use strict';

  const gulp = require('gulp');
  const jshint = require('gulp-jshint');

  module.exports = function() {
    return gulp.src('./app/javascripts/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  };

}());
