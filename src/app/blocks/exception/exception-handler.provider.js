(function() {
  'use strict';

  angular
    .module('blocks.exception')
    .config(config);

  function config($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
  }

  function extendExceptionHandler($delegate) {
    return (exception, cause) => {
      $delegate(exception, cause);
    };
  }

})();
