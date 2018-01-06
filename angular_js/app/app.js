'use strict';

// Declare app level module which depends on views, and components
<<<<<<< HEAD
<<<<<<< HEAD
angular.module('ShareYourSport', [
  'ShareYourSport.ui-map',
  'ngRoute'
=======
=======
>>>>>>> parent of c34dbcf...  ajout service login, ajout boostrap template, creation page home
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
<<<<<<< HEAD
>>>>>>> parent of c34dbcf...  ajout service login, ajout boostrap template, creation page home
=======
>>>>>>> parent of c34dbcf...  ajout service login, ajout boostrap template, creation page home
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
