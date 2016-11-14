(function() {

  'use strict';

  const process = require('child_process');
  const electron = require('electron');

  module.exports = function() {
    process.spawn(electron, ['./src'], { stdio: 'inherit' })
  };

}());
