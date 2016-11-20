(function() {

  'use strict';

  const gulp = require('gulp');
  const docco = require('gulp-docco');

  let doccoTask = () => {
    return gulp.src('./app/javascripts/**/*.js')
      .pipe(docco())
      .pipe(gulp.dest('./doc'));
  };

  gulp.task('doc', doccoTask);
  module.exports = doccoTask;

}());
