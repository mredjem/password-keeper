(function() {

  'use strict';

  angular.module('view.account').controller('AccountController', function($location, $routeParams, AccountService) {
    const ctrl = this;

    //
    ctrl.editAccount = () => {
      $location.path('/edit');
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
