(function() {

  'use strict';

  angular.module('comp.directives')
    .component('notifications', {
      bindings: {},
      templateUrl: 'javascripts/components/directives/notifications/notifications.template.html',
      controller: function(Application) {
        this.application = Application;
      }
    });

}());
