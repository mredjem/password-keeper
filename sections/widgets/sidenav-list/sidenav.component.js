(function() {
  'use strict';

  angular
    .module('app.widgets')
    .component('sidenav', sidenav());

  function sidenav() {
    let component = {
      bindings: {
        items: '<'
      },
      controller: 'SidenavController',
      controllerAs: 'sidenavCtrl',
      templateUrl: 'sections/widgets/sidenav-list/sidenav.html'
    };

    return component;
  }

})();
