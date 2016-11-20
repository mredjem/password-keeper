(function() {

  'use strict';

  const appConfig = require('./config/appConfig');

  angular.module('comp.services').value('Application', {
    version: appConfig.version,
    name: appConfig.name,
    environment: appConfig.env
  });

}());
