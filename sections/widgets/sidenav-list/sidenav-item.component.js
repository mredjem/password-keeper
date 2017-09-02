(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('sidenavItem', sidenavItem);

  function sidenavItem() {
    let directive = {
      restrict: 'E',
      scope: {
        title: '@',
        subtitle: '@'
      },
      require: '^sidenav',
      templateUrl: 'sections/widgets/sidenav-list/sidenav-item.html',
      link: link
    };

    return directive;

    /////////

    function link(scope, elem, attrs, ctrl) {
      elem.bind('click', function() {
        ctrl.selectItem(scope.$new({ title: attrs.title }));
      });
    }
  }

})();
