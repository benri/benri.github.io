'use strict';

(function(){

  var app = angular.module('benri', []);

  app.controller('bodyCtrl', ['$scope', function bodyController($scope){
  
    $scope.stuff = ['Pizza','Hotpocket'];

    $scope.add_stuff = function() {
      var new_stuff = '';
      var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var possible = "abcdefghijklmnopqrstuvwxyz";
      new_stuff += caps.charAt(Math.floor(Math.random() * caps.length));
      for (var i = 1; i < 6; i++) {
        new_stuff += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      $scope.stuff.push(new_stuff);
    };

  }])

})();


