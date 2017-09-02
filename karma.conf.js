(function() {
  'use strict';

  module.exports = config => {
    const gulpConfig = require('./gulp.config');

    config.set({

      // base path to resolve patterns
      basePath: './',

      // frameworks to use
      frameworks: ['mocha'],

      // list of files / patterns to load
      files: gulpConfig.files,

      // list of files to exclude
      exclude: gulpConfig.exclude,

      // preprocess matching files beforehand
      preprocessors: gulpConfig.preprocessors,

      // web server port
      port: 9876,

      // enable / disable colors in console
      colors: true,

      // level of logging
      logLevel: config.LOG_INFO,

      // enable / disable file watching
      autoWatch: true,

      // browsers to start
      browsers: ['Electron'],

      // plugins to enable
      plugins: [
        'karma-electron'
      ],

      captureTimeout: 60000,

      // client settings
      client: {
        useIframe: false
      }

    });

  };
})();
