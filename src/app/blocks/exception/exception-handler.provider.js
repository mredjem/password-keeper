(function() {
  'use strict';

  angular
    .module('blocks.exception')
    .config(config);

  function config($provider) {
    $provider.decorator('$exceptionHandler', extendExceptionHandler);
  }

  function extendExceptionHandler($delegate, logger) {
    return (exception, cause) => {
      $delegate(exception, cause);
    };
  }

})();
