'use strict';

angular.module('ShareYourSport')
	.controller('LoginCtrl', ['$scope','$location','serviceData','Page',function($scope,$location,serviceData,Page) {

  Page.setTitle('Login');
$scope.user={email:'email@gmail.fr',motdepasse:'passe'};
 
 
$scope.send=function()
	{
	  serviceData.login($scope.user).then(function successCallback(response) {

	  	response.data.login ==='true'?$location.path('/home' ):alert('erreur');

	  }, function errorCallback(response) {
	  // erreur
	  });

	}
}]);


	 
