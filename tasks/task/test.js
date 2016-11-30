(function() {

  'use strict';

  const gulp = require('gulp');
  const Server = require('karma').Server;

  let testTask = (done) => {
    new Server({
      configFile: `${__dirname}/../../karma.conf.js`,
      singleRun: true
    }, done).start();
  };

  gulp.task('test', testTask);
  module.exports = testTask;

}());
