(function() {
  'use strict';

  angular
    .module('app.layout')
    .component('appFooter', appFooter());

  function appFooter() {
    let component = {
      bindings: {},
      controller: AppFooterController,
      templateUrl: 'app/layout/app-footer.html'
    };

    return component;
  }

  function AppFooterController() {
  }

})();
