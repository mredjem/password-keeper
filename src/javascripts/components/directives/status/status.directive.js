(function() {

  'use strict';

  angular.module('comp.directives')
    .component('status', {
      bindings: {},
      templateUrl: 'javascripts/components/directives/status/status.template.html',
      controller: function($mdBottomSheet) {
        this.showProfiles = () => {
        };

        this.openSettings = () => {
          $mdBottomSheet.show({
            templateUrl: 'javascripts/view-settings/settings.template.html',
            controller: 'SettingsController',
            controllerAs: 'settingsCtrl',
            clickOutsideToClose: true
          });
        };
      }
    });

}());
