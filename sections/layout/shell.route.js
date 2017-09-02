(function() {
  'use strict';

  angular
    .module('app.layout')
    .run(appRun);

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates(), '/');
  }

  function getStates() {
    return [
      {
        state: 'home',
        config: {
          url: '/',
          views: {
            'categories': {
              controller: 'CategoriesController',
              controllerAs: 'categoriesCtrl',
              templateUrl: 'sections/categories/categories.html'
            },
            'passwords': {
              controller: 'PasswordsController',
              controllerAs: 'passwordsCtrl',
              templateUrl: 'sections/passwords/passwords.html'
            }
          }
        }
      }
    ];
  }

})();
