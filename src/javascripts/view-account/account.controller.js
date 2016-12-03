(function() {

  'use strict';

  angular.module('view.account').controller('AccountController', function($location, $routeParams, AccountService) {
    const ctrl = this;

    //
    ctrl.editAccount = () => {
      let accountId = $routeParams.accountId;
      $location.path(`/edit/${accountId}`);
    };

    //
    ctrl.deleteAccount = () => {

    };

    /**
     *
     */
    let getAccount = () => {
      AccountService.getAccountById($routeParams.accountId)
        .then((account) => {
          ctrl.selected = account;
        })
        .catch((err) => {
          console.err(err);
        });
    };

    // load selected account
    getAccount();

  });

}());
