(function() {

  'use strict';

  angular.module('comp.services').factory('CategoriesService', function($q, AccountService) {
    const categories = ['Websites', 'Personals', 'Others'];

    let getCategories = () => {
      return categories;
    };

    let accountsByCategory = {};

    let getAccountsByCategory = () => {
      let promises = [];

      getCategories().forEach((category) => {
        promises.push(
          AccountService.getAccounts({ category: category }).then((accounts) => {
            accountsByCategory[category] = accounts;
          })
        );
      });

      return $q.all(promises).then(() => {
        return accountsByCategory;
      });
    };

    return {
      getCategories: getCategories,
      getAccountsByCategory: getAccountsByCategory
    }

  });

}());
