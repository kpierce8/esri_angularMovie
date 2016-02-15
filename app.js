angular.module('esriApp', ['ngRoute']);


angular.module('esriApp').config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
			controller: 'MapCntl',
			templateUrl: '/views/mapTemplate.html'
		});
}]);

angular.module('esriApp').controller('MapCntl', function($scope){
		$scope.name = "Ken Pierce";

		
require([
	'esri/map',
	'esri/layers/FeatureLayer',
	'esri/tasks/query',
	'esri/tasks/QueryTask',
	'esri/symbols/SimpleMarkerSymbol',
	'dojo/domReady'], function(Map, FeatureLayer, Query, QueryTask, SimpleMarkerSymbol){

		var map = new Map('mapDiv', {
			basemap: 'gray',
			center: [-122, 47],
			zoom: 12
		});

	})


});