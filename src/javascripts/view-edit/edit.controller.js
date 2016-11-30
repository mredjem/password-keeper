(function() {

  'use strict';

  angular.module('view.edit').controller('EditController', function($rootScope, $location, $mdDialog, CategoriesService, AccountService) {

    const ctrl = this;

    ctrl.categories = CategoriesService.getCategories();

    // save modifications and notify children scopes
    ctrl.editAccount = () => {
      AccountService.saveAccount(ctrl.account)
        .then(() => {
          // send notification after update/create
          $rootScope.$broadcast('account-edited', {});
          // redirect to read only view
          $location.path('/account');
        })
        .catch((err) => {
          console.error(err);
        });
    };

    // show confirmation
    $rootScope.$on('account-selected', (event, args) => {
      let accountId = args;

      let confirm = $mdDialog.confirm()
        .title('Confirm')
        .textContent('Your modifications will be lost.')
        .ariaLabel('confirm-cancel')
        .ok('OK')
        .cancel('Cancel');

      $mdDialog.show(confirm)
        .then(() => {
          // redirect to read only view
          $location.path(`/account/${accountId}`);
        });
    });

  });

}());
