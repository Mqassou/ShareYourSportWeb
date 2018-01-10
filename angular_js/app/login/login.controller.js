'use strict';

angular.module('ShareYourSport')
	.controller('LoginCtrl', ['$scope','$location','$cookies','serviceData','Page',function($scope,$location,$cookies,serviceData,Page) {

 Page.setTitle('Login');
$scope.user={email:'email@gmail.fr',motdepasse:'passe'};
$scope.newUser={pseudo:'Sportif',email:'email@gmail.fr',motdepasse:'passe'};
 
$scope.connexion=function()
	{
	  serviceData.login($scope.user).then(function successCallback(response) {

		if(	response.data !='false')
		{
			$cookies.put('userId', response.data);
			$location.path('/home');
		}
		else
		{
			alert('erreur');
		}
	 
	  }, function errorCallback(response) {
	  // erreur
	  });

	}// fin connexion

$scope.creerCompte=function()
	{
	  serviceData.createUser($scope.newUser).then(function successCallback(response) {

		if(	response.data ==='true')
		{
				alert('compte crée');
		}
		else
		{
			alert('erreur');
		}
	 
	  }, function errorCallback(response) {
	  // erreur
	  });

	}// fin creerCompte

}]);


	 
