(function() {

  'use strict';

  const Datastore = require('nedb');
  const db = new Datastore({ filename: './passwords.db', autoload: true });

  angular.module('comp.services').factory('PasswordService', function($q) {
    function save(datas) {
      let deferred = $q.defer();

      db.persist(datas, (err, docs) => {
        if (err) {
          return deferred.reject;
        }
        deferred.resolve(docs);
      });

      return deferred.promise;
    }

    return {
      save: save
    };
  });

}());
