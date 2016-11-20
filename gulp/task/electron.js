(function() {

  'use strict';

  const gulp = require('gulp');

  const process = require('child_process');
  const electron = require('electron');

  let electronTask = () => {
    process.spawn(electron, ['./src'], { stdio: 'inherit' });
  };

  gulp.task('electron', electronTask);
  module.exports = electronTask;

}());
