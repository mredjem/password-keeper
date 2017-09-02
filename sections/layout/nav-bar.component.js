(function() {
  'use strict';

  angular
    .module('app.layout')
    .component('navBar', navBar());

  function navBar() {
    let component = {
      bindings: {},
      controller: NavBarController,
      templateUrl: 'sections/layout/nav-bar.html'
    };

    return component;
  }

  function NavBarController() {
  }

})();
