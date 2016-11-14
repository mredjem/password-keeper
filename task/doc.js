(function() {

  'use strict';

  const gulp = require('gulp');
  const docco = require('gulp-docco');

  module.exports = function() {
    return gulp.src('./app/javascripts/**/*.js')
      .pipe(docco())
      .pipe(gulp.dest('./doc'));
  };

}());
