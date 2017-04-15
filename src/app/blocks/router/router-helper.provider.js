(function() {
  'use strict';

  angular
    .module('blocks.router')
    .provider('routerHelper', routerHelperProvider);

  function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
    let config = {
      docTitle: ''
    };

    if (!(window.history && window.history.pushState)) {
      window.location.hash = '/';
    }

    $locationProvider.html5Mode(true);

    this.$get = RouterHelper;
    function RouterHelper($rootScope, $location, $state, logger) {
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
        $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
          let message = `Error routing to ${toState.title}`;

          logger.warning(message, [toState]);
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
