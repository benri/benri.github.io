'use strict';

describe('bodyCtrl', function(){

  beforeEach(module('benri'));

  it('should create "stuff" model with empty string, and "stuff2" model with "stuff"', inject(function($controller) {
    var scope = {},
      ctrl = $controller('bodyCtrl', {$scope:scope});

    expect(scope.stuff).toBe('Pizza');
    expect(scope.stuff2).toBe('Hotpocket');
  }));

});