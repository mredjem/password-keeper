(function() {

  'use strict';

  const Datastore = require('nedb');
  const db = new Datastore({ filename: `${__dirname}/datas/profiles.db`, autoload: true });

  angular.module('comp.services').factory('ProfileService', function($q) {

    let getProfiles = () => {
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
      getProfiles: getProfiles
    }

  });

}());
