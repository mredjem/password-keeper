(function() {

  'use strict';

  angular.module('view.edit', ['ngRoute'])
    .config(route());

  function route() {
    return function($routeProvider) {
      $routeProvider.when('/edit/:accountId?', {
        templateUrl: 'javascripts/view-edit/edit.template.html',
        controller: 'EditController',
        controllerAs: 'editCtrl'
      });
    };
  }

}());
