var myApp = angular.module('resultView',[]);

myApp.controller('mainController',['$scope','$log','$http',function($scope,$log,$http){
	$log.warn($scope);
	$log.warn($http);

	$http.get('google.com').
		success(function(data,status,headers,config){
			$log.warn(data)
		}).
		error(function(data, status,headers,config){
			$log.warn(data)
		});
}]);