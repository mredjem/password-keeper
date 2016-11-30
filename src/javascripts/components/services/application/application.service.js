(function() {

  'use strict';

  let appConfig = null;

  // mandatory for karma-electron tests
  try {
    appConfig = require('./config/appConfig');
  }
  catch(err) {
    appConfig = { version: '', name: '', environment: '' };
  }

  angular.module('comp.services').value('Application', {
    version: appConfig.version,
    name: appConfig.name,
    environment: appConfig.env
  });

}());
