(function() {

  'use strict';

  const gulp = require('gulp');

  const process = require('child_process');
  const electron = require('electron');

  const configJson = require('../config.json');

  let electronTask = () => {
    process.spawn(electron, configJson.path, { stdio: 'inherit' });
  };

  gulp.task('start', electronTask);
  module.exports = electronTask;

}());
