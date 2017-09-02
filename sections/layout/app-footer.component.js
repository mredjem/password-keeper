(function() {
  'use strict';

  angular
    .module('app.layout')
    .component('appFooter', appFooter());

  function appFooter() {
    let component = {
      bindings: {
        title: '@',
        version: '@'
      },
      templateUrl: 'sections/layout/app-footer.html'
    };

    return component;
  }

})();
