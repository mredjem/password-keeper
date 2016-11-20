(function() {

  'use strict';

  const Datastore = require('nedb');
  const db = new Datastore({ filename: `${__dirname}/datas/settings.db`, autoload: true });

  angular.module('comp.services').factory('SettingsService', function($q) {

    let getSettings = () => {
      let deferred = $q.defer();

      db.find({}, (err, docs) => {
        if (err) {
          return deferred.reject;
        } else {
          deferred.resolve(docs);
        }
      });

      return deferred.promise;
    };

    return {
      getSettings: getSettings
    }

  });

}());
