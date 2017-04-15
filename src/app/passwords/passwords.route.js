(function() {
  'use strict';

  angular
    .module('app.passwords')
    .run(appRun);

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'passwords',
        config: {
          url: '/',
          controller: 'PasswordsController',
          controllerAs: 'pwdCtrl',
          templateUrl: 'app/passwords/passwords.html',
          title: 'Passwords'
        }
      }
    ];
  }

})();
