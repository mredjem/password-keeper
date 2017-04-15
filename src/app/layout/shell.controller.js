(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  function ShellController($rootScope, $timeout) {
    $rootScope.showSplash = true;

    activate();

    function activate() {
      hideSplash();
    }

    function hideSplash() {
      $timeout(function() {
        $rootScope.showSplash = false;
      }, 2000);
    }
  }

})();
