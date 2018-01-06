'use strict';

angular.module('ShareYourSport')
	.controller('LoginCtrl', ['$scope','$location','serviceServer',function($scope,$location,serviceServer) {

$scope.user={email:'email@gmail.fr',motdepasse:'passe'};
 
 
$scope.send=function()
	{
	  serviceServer.login($scope.user).then(function successCallback(response) {

	  	response.data.login ==='true'?$location.path('/home' ):alert('erreur');

	  }, function errorCallback(response) {
	  // erreur
	  });

	}
}]);


	 
