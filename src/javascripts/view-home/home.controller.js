(function() {

  'use strict';

  angular.module('view.home').controller('HomeController', function($mdToast, CategoriesService, AccountService) {
    const ctrl = this;

    ctrl.categories = CategoriesService.getCategories();

    ctrl.editAccount = function() {
      AccountService.saveAccount(ctrl.account).then(() => {
        console.log('saved account');
      });
    };

  });

}());
