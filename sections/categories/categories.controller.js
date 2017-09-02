(function() {
  'use strict';

  angular
    .module('app.categories')
    .controller('CategoriesController', CategoriesController);

  function CategoriesController() {
    const vm = this;

    vm.items = [];

    init();

    //////////

    function init() {
      loadCategories();
    }

    function loadCategories() {
      vm.items = [
        {
          title: 'Important',
          subtitle: 'Store important passwords'
        },
        {
          title: 'Internet',
          subtitle: 'Passwords related to Wifi, Netflix, ...'
        }
      ];
    }
  }

})();
