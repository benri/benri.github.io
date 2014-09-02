'use strict';

(function(){

	var app = angular.module('benri', []);

	app.controller('bodyCtrl', ['$scope', function bodyController($scope){
	
		$scope.stuff = 'Pizza';

		$scope.stuff2 = 'Hotpocket';

	}])

})();


