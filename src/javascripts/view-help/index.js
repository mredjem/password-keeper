(function() {

  'use strict';

  angular.module('view.help', ['ngRoute'])
    .config(route());

  function route() {
    return function($routeProvider) {
      $routeProvider.when('/help', {
        templateUrl: 'javascripts/view-help/help.template.html',
        controller: 'HelpController',
        controllerAs: 'helpCtrl'
      });
    };
  }

}());
