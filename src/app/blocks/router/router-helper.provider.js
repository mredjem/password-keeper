(function() {
  'use strict';

  angular
    .module('blocks.router')
    .provider('routerHelperProvider', routerHelperProvider);

  function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
    let config = {
      docTitle: ''
    };

    if (!(window.history && window.history.pushState)) {
      window.location.hash = '/';
    }

    $locationProvider.html5Mode(true);

    this.$get = RouterHelper;
    function RouterHelper($location, $rootScope, $state, logger) {
      let hasOtherwise = false;

      let service = {
        configureStates: configureStates,
        getStates: getStates
      };

      init();

      return service;

      ////////////

      function init() {
        handleRoutingErrors();
      }

      function handleRoutingErrors() {
        $rootScope.$on('$stateChangeError', () => {
          $location.path('/');
        });
      }

      function configureStates(states, otherwisePath) {
        states.forEach(state => {
          $stateProvider.state(state.state, state.config);
        });

        if (otherwisePath && !hasOtherwise) {
          hasOtherwise = true;
          $urlRouterProvider.otherwise(otherwisePath);
        }
      }

      function getStates() {
        return $state.get();
      }
    }
  }

})();
