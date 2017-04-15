(function() {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  function logger($log) {
    let service = {

      info: info,
      warn: warn,
      success: success,
      error: error,

      log: $log.log
    };

    return service;

    ////////////

    function info(message, data) {
      $log.info('Info: ' + message, data);
    }

    function warn() {
      $log.warn('Warn: ' + message, data);
    }

    function success() {
      $log.info('Success: ' + message, data);
    }

    function error() {
      $log.error('Error: ' + message, data);
    }
  }

})();
