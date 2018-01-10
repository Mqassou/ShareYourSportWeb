	'use strict';

// Declare app level module which depends on views, and components
angular.module('ShareYourSport', [
  'ngRoute',
  'ngMap',
  'ngCookies'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
 $routeProvider.
        when('/login', {
          templateUrl: 'login/login.template.html',
           controller: 'LoginCtrl'
        }).
         when('/home', {
          templateUrl: 'home/home.template.html',
          controller: 'HomeCtrl'
        }).
         when('/creer', {
          templateUrl: 'create.event/create.event.template.html',
          controller: 'CreateEventCtrl'
        }).
         when('/parametres', {
          templateUrl: 'parameters/parameters.template.html',
          controller: 'ParametersCtrl'
        }).
        otherwise('/login');
 
}]);
