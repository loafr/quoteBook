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
		dataService.removeData($scope.removeDataText);
		$scope.showRemoveData = false;
		$scope.removeDataText = '';
	};
	$scope.showAddData = function() {
		$scope.showAddData = !$scope.showAddData;
		$scope.showRemoveData = false;
		$scope.showFilter = false;
		//$scope.addDataText = '';
		//$scope.addDataAuthor = '';
	};
	$scope.showRemoveData = function() {
		$scope.showRemoveData = !$scope.showRemoveData;
		$scope.showAddData = false;
		$scope.showFilter = false;
		//$scope.removeDataText = '';
	};
	$scope.showFilter = function() {
		$scope.showFilter = !$scope.showFilter;
		$scope.showAddData = false;
		$scope.showRemoveData = false;
		//$scope.filterText = '';
	};






});

/*

var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
  $scope.quote = {};
  $scope.quotes = dataService.getData();
  $scope.showAddQuote = false;
  $scope.showRemoveQuote = false;
  $scope.showFilterQuotes = false;

  $scope.toggleAddQuote = function(){
    $scope.showAddQuote = !$scope.showAddQuote;
    $scope.showRemoveQuote = false;
    $scope.showFilterQuotes = false;
  };

  $scope.toggleRemoveQuote = function(){
    $scope.showRemoveQuote = !$scope.showRemoveQuote;
    $scope.showAddQuote = false;
    $scope.showFilterQuotes = false;
  };

  $scope.toggleFilterQuotes = function(){
    $scope.showFilterQuotes = !$scope.showFilterQuotes;
    $scope.showAddQuote = false;
    $scope.showRemoveQuote = false;
  }

  $scope.addQuote = function(){
    dataService.addData($scope.quote);
    $scope.quotes = dataService.getData();
    $scope.showAddQuote = false;
    $scope.quote = {};
  };

  $scope.removeQuote = function(){
    dataService.removeData($scope.removeQuoteText);
    $scope.showRemoveQuote = false;
    $scope.removeQuoteText = '';
  }
})
*/