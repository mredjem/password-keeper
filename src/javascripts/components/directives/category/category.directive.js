(function() {

  'use strict';

  angular.module('comp.directives')
    .component('category', {
      bindings: {
        title: '='
      },
      templateUrl: 'javascripts/components/directives/category/category.template.html',
      controller: function() {}
    });

}());
