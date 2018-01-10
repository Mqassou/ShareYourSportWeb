'use strict';

angular.module('ShareYourSport')
	.controller('HomeCtrl', ['$scope','$cookies','NgMap','Page','serviceData',function($scope,$cookies,NgMap,Page,serviceData) {
		// userId : $cookies.get('userId')
  		Page.setTitle('Accueil');
  		let data={};
 		$scope.events=[{}];
 		$scope.show=false;

 		$scope.img={
 			'Badminton':'marker_badminton.png',
 			'Football':'marker_football.png',
 			'Rugby':'marker_rugby.png',
 			'Course à pied':'marker_run.png',
 			'Tennis':'marker_tennis.png',
 			'Volley-ball':'marker_volleyball.png',
 			'Basketball':'marker_basketball.png',
 			'Cyclisme':'marker_cycle.png'
 		}

        serviceData.allEvent().then(function successCallback(response) {
		$scope.events=response.data;
		}, function errorCallback(response) {
		alert(response);
		});

 		$scope.rejoindre=function(eventId)
 		{
 			data.userId=$cookies.get('userId');
 			data.eventId=eventId;
	 		serviceData.joinEvent(data).then(function successCallback(response) {
			response.data==='true'?alert('Evenement rejoint '):alert('erreur');
			}, function errorCallback(response) {
			alert(response);
			});
 		}

}]);


	 
//https://ngmap.github.io/#/!custom-marker-2.html  : fermer/ouvrir fenêtre , modifier la position

//https://ngmap.github.io/#/!custom-marker-ng-repeat.html :  fermer/ouvrir fenêtre , modifier la position 2ème méthode

//https://ngmap.github.io/#/!directions-with-current-location.html
// ngmap : center="current-location"  pour avoir la position de la personne

// center="{{city.position}}"

// pour le design du marker :
	//- https://ngmap.github.io/#/!custom-marker-custom-style.html	
	//https://ngmap.github.io/#/!icon-complex.html
	//https://ngmap.github.io/#/!icon-simple.html