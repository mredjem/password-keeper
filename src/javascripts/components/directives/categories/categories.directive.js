(function() {

  'use strict';

  angular.module('comp.directives')
    .component('categories', {
      bindings: {},
      templateUrl: 'javascripts/components/directives/categories/categories.template.html',
      controller: function() {
        const ctrl = this;

        ctrl.categories = [
          {
            title: 'Websites',
            tags: [
              { name: 'Facebook' },
              { name: 'Google' },
              { name: 'Twitter' },
              { name: 'Stackoverflow' }
            ]
          },
          {
            title: 'Personals',
            tags: []
          },
          {
            title: 'Others',
            tags: []
          }
        ];
      }
    });

}());
