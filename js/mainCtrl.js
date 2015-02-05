var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {
  
	$scope.quotes = dataService.getData();
	$scope.showAddData = false;
	$scope.showRemoveData = false;
	$scope.showFilter = false;

	$scope.addData = function() {
		dataService.addData($scope.addDataText, $scope.addDataAuthor);
		$scope.showAddData = false;
		$scope.addDataText = '';
	};
	$scope.removeData = function() {
		dataService.removeData($scope.index);
		$scope.showRemoveData = false;
		$scope.removeDataText = '';
	};
	$scope.toggleAddData = function() {
		$scope.showAddData = !$scope.showAddData;
		$scope.showRemoveData = false;
		$scope.showFilter = false;
		$scope.addDataText = '';
		$scope.addDataAuthor = '';
	};
	$scope.toggleRemoveData = function() {
		$scope.showRemoveData = !$scope.showRemoveData;
		$scope.showAddData = false;
		$scope.showFilter = false;
		$scope.removeDataText = '';
	};
	$scope.toggleFilter = function() {
		$scope.showFilter = !$scope.showFilter;
		$scope.showAddData = false;
		$scope.showRemoveData = false;
		$scope.filterText = '';
	};

});

