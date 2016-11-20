(function() {

  'use strict';

  angular.module('view.profile', ['ngRoute'])
    .config(route());

  function route() {
    return function($routeProvider) {
      $routeProvider.when('/profile', {
        templateUrl: 'javascripts/view-profile/profile.template.html',
        controller: 'ProfileController',
        controllerAs: 'profileCtrl'
      });
    };
  }

}());
