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
        otherwise('/login');
 
}]);
