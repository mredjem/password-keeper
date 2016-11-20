(function() {

  'use strict';

  angular.module('view.settings').controller('SettingsController', function(SettingsService) {
    this.settings = SettingsService.getSettings();
  });

}());
