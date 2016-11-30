(function() {

  'use strict';

  const modules = [
    'ngRoute', 'ngMaterial', 'ngMdIcons', 'comp.services', 'comp.directives', 'view.account', 'view.edit', 'view.help', 'view.profile', 'view.settings'
  ];

  angular.module('app', modules)
    .config(route())
    .config(theme());

  function route() {
    return function($routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/edit'
      });
    };
  }

  function theme() {
    return function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('deep-purple')
        .accentPalette('amber');
    };
  }

}());
