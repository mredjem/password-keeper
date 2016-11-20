(function() {

  'use strict';

  angular.module('view.settings', ['ngRoute'])
    .config(route());

  function route() {
    return function($routeProvider) {
      $routeProvider.when('/settings', {
        templateUrl: 'javascripts/view-settings/settings.template.html',
        controller: 'SettingsController',
        controllerAs: 'settingsCtrl'
      });
    };
  }

}());
