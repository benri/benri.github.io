'use strict';

describe('bodyCtrl', function() {

  var $rootScope, $scope, $controller;

  beforeEach(function () {
    module('benri');
  });

  beforeEach(inject(function(_$rootScope_, _$controller_){
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;

    $controller('bodyCtrl', {'$rootScope' : $rootScope, '$scope': $scope});
  }));

  it('should create "stuff" model with empty string, and "stuff2" model with "stuff"', function() {

    expect($scope.stuff.length).toBe(2);
    expect($scope.stuff[0]).toBe('Pizza');

  });

  it('should increase length of stuff by 1', function(){

    //expect(finalSize).toBe(initialSize + 1);

  });

});