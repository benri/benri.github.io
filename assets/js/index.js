
(function() {

	var app = angular.module('benri', ['ngSanitize']);

	app.controller('name', ['$scope', function name($scope){
		
		$scope.stuff = '';

		$scope.stuff = 'stuff';

		$scope.dostuff = function() {
			$scope.stuff = 'stuff';
		};
	}])

})