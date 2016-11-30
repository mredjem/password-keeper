(function() {

  'use strict';

  angular.module('comp.directives')
    .component('categories', {
      bindings: {},
      templateUrl: 'javascripts/components/directives/categories/categories.template.html',
      controller: function($rootScope, CategoriesService) {
        const ctrl = this;

        /**
         *
         */
        ctrl.selectAccount = (account) => {
          $rootScope.$broadcast('account-selected', account._id);
        };

        /**
         *
         */
        let searchAccounts = () => {
          CategoriesService.getAccountsByCategory()
            .then((accounts) => {
              ctrl.accountsByCategory = accounts;
            });
        };

        // update directive bindings when account is edited
        $rootScope.$on('account-edited', (event, args) => {
          searchAccounts();
        });

        // load initial values
        searchAccounts();
      }
    });

}());
