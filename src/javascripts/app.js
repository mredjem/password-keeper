(function() {

  'use strict';

  const modules = [
    'ngRoute', 'ngMaterial', 'ngMdIcons', 'comp.services', 'comp.directives', 'view.home', 'view.help', 'view.profile', 'view.settings'
  ];

  angular.module('app', modules)
    .config(route())
    .config(theme());

  function route() {
    return function($routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/home'
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
