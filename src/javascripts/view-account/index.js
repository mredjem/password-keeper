(function() {

  'use strict';

  angular.module('view.account', ['ngRoute'])
    .config(route());

  function route() {
    return function($routeProvider) {
      $routeProvider.when('/account/:accountId', {
        templateUrl: 'javascripts/view-account/account.template.html',
        controller: 'AccountController',
        controllerAs: 'accountCtrl'
      });
    };
  }

}());
