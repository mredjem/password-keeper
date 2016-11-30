(function() {

  'use strict';

  const Datastore = require('nedb');
  const db = new Datastore({ filename: `${__dirname}/datas/accounts.db`, autoload: true });

  angular.module('comp.services').factory('AccountService', function($q) {

    /**
     *
     */
    let saveAccount = (account) => {
      let deferred = $q.defer();

      db.insert(account, (err, accounts) => {
        if (err) {
          return deferred.reject;
        } else {
          deferred.resolve(accounts);
        }
      });

      return deferred.promise;
    };

    /**
     *
     */
    let getAccountById = (accountId) => {
      let deferred = $q.defer();

      db.findOne({ _id: accountId }, (err, account) => {
        if (err) {
          return deferred.reject;
        } else {
          deferred.resolve(account);
        }
      });

      return deferred.promise;
    };

    /**
     *
     */
    let getAccounts = (criterias = {}) => {
      let deferred = $q.defer();

      db.find(criterias, (err, accounts) => {
        if (err) {
          return deferred.reject;
        } else {
          deferred.resolve(accounts);
        }
      });

      return deferred.promise;
    };

    /**
     *
     */
    let deleteAccount = () => {
      let deferred = $q.defer();

      db.delete({}, (err, docs) => {
        if (err) {
          return deferred.reject;
        } else {
          deferred.resolve(docs);
        }
      });

      return deferred.promise;
    };

    return {
      saveAccount: saveAccount,
      getAccountById: getAccountById,
      getAccounts: getAccounts,
      deleteAccount: deleteAccount
    };

  });

}());
