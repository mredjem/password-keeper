(function() {

  'use strict';

  const Datastore = require('nedb');
  const db = new Datastore({ filename: './passwords.db', autoload: true });

  angular.module('comp.services')
    .factory('PasswordService', service());

  function service() {
    return function($q) {

      let save = (datas) => {
        let deferred = $q.defer();

        db.persist(datas, (err, docs) => {
          if (err) {
            return deferred.reject;
          }
          deferred.resolve(docs);
        });

        return deferred.promise;
      };

      let getById = (id) => {

      };

      return {
        save: save,
        getById: getById
      };
    };
  }

}());
