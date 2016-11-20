(function() {

  'use strict';

  angular.module('comp.directives')
    .component('categories', {
      bindings: {},
      templateUrl: 'javascripts/components/directives/categories/categories.template.html',
      controller: function(CategoriesService) {
        CategoriesService.getAccountsByCategory().then((accounts) => {
          this.accountsByCategory = accounts;
        });
      }
    });

}());
