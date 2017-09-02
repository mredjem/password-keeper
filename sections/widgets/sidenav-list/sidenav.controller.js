(function() {
  'use strict';

  angular
    .module('app.widgets')
    .controller('SidenavController', SidenavController);

  function SidenavController() {
    const vm = this;

    vm.selectItem = selectItem;

    //////////

    function selectItem(item) {
      console.log('selected ' + item);
    }
  }

})();
