(function() {

  'use strict';

  const gulp = require('gulp');
  const jsdoc = require('gulp-jsdoc3');

  const configJson = require('../config.json');

  let jsdocTask = () => {
    gulp.src(['README.md', configJson.src[0]], { read: false })
    .pipe(jsdoc({
      access: 'all',
      source: {
        exclude: configJson.lib
      },
      opts: {
        destination: configJson.doc
      },
      tags: {
        allowUnknownTags: true
      }
    }));
  };

  gulp.task('doc', jsdocTask);
  module.exports = jsdocTask;

}());
