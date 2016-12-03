(function() {

  'use strict';

  angular.module('view.edit').controller('EditController', function($rootScope, $routeParams, $location, $mdDialog, CategoriesService, AccountService) {

    const ctrl = this;

    ctrl.categories = CategoriesService.getCategories();

    let accountId = $routeParams.accountId;
    // check if edit mode
    if (accountId) {
      AccountService.getAccountById(accountId)
        .then((account) => {
          ctrl.account = account;
        })
        .catch((err) => {
          console.err(err);
        })
    }

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

    /**
     *
     */
    let cancelEdit = (accountId) => {
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
    };

    // show confirmation
    ctrl.cancelEdit = () => {
      if (accountId) {
        cancelEdit(accountId);
      } else {
        ctrl.account = {};
      }
    };

    // redirect to read only view
    $rootScope.$on('account-selected', (event, args) => {
      $location.path(`/account/${args}`);
    });

  });

}());
