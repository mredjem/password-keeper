(function() {

  'use strict';

  angular.module('view.home', ['ngRoute'])
    .config(route());

  function route() {
    return function($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'javascripts/view-home/home.template.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      });
    };
  }

}());
