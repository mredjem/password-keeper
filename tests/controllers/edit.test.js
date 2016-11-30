(function() {

  'use strict';

  describe('EditController', function() {

    let ctrl, scope;

    beforeEach(module('app'));
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('EditController', { $scope: scope })
    }));

    it('should have three categories', function() {
      expect(ctrl.categories.length).toEqual(3);
    });

  });

}());
