'use strict';

angular.module('ShareYourSport')
	.controller('HomeCtrl', ['$scope','$location','NgMap','Page',function($scope,$location,NgMap,Page) {
  Page.setTitle('Home');
 
 NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
   

}]);


	 
