'use strict';

angular.module('ShareYourSport')
	.controller('HomeCtrl', ['$scope','$location','NgMap','Page','serviceData',function($scope,$location,NgMap,Page,serviceData) {
  Page.setTitle('Home');
 		$scope.events=[{}];

          serviceData.allEvent().then(function successCallback(response) {
			$scope.events=response.data;
 

	  }, function errorCallback(response) {
	  // erreur
	  });
       

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