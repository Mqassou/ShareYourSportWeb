'use strict';

angular.module('ShareYourSport')
	.controller('CreateEventCtrl', ['$scope','serviceData','Page','NgMap',function($scope,serviceData,Page,NgMap) {

 Page.setTitle('Creer evenement');

 	$scope.fields=[{}];
 	$scope.show=false;
 	$scope.event={
 		sport:'',
 		lieupratique:'',
 		ville:'',
 		adresse:'',
 		latitude:'',
 		longitude:'',
 		date:'',
 		heuredebut:'',
 		heurefin:'',
 		nbrpersonne:''
 	}
 
 	  serviceData.allField().then(function successCallback(response) {
		$scope.fields=response.data;
		}, function errorCallback(response) {
		alert(response);
		});


 	  $scope.choisir=function(field)
 		{
 
 			$scope.event.lieupratique=field.nom;
 			$scope.event.adresse=field.adresse;
 			$scope.event.ville=field.ville;
 			$scope.event.latitude=field.latitude;
 			$scope.event.longitude=field.longitude;
 			 	
 		}


$scope.creer=function()
 		{

 		serviceData.createEvent($scope.event).then(function successCallback(response) {
			response.data==='true'?alert('Evenement cree '):alert('erreur');
			}, function errorCallback(response) {
			alert(response);
			});
 }

}]);


	 
