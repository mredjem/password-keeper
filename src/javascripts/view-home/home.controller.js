(function() {

  'use strict';

  angular.module('view.home').controller('HomeController', function() {
    const ctrl = this;

    ctrl.account = { origin: 'www.gmail.com', user: 'medhi.redjem@gmail.com', password: 'toto' };
    ctrl.account.tags = ['GMail', 'Mail', 'Google'];

  });

}());
