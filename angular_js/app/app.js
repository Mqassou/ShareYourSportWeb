	'use strict';

// Declare app level module which depends on views, and components
angular.module('ShareYourSport', [
  'ShareYourSport.ui-map',
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
 
 $routeProvider.
        when('/login', {
          templateUrl: 'login/login.html',
           controller: 'LoginCtrl'
        }).
         when('/home', {
          templateUrl: 'home/home.html',
           controller: 'HomeCtrl'
        }).
        otherwise('/login');
 
}]);
