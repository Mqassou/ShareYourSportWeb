'use strict';

angular.module('ShareYourSport')
	.controller('ParametersCtrl', ['$scope','$cookies','serviceData','Page','NgMap',function($scope,$cookies,serviceData,Page,NgMap) {

Page.setTitle('Paramètres');
$scope.user={};
 
		serviceData.dataUser({userId:$cookies.get('userId')}).then(function successCallback(response) {

		$scope.user.userId=response.data._id;
		$scope.user.pseudo=response.data.pseudo;
		$scope.user.motdepasse='';
		$scope.user.email=response.data.email;
		$scope.user.tel=response.data.tel;
		$scope.user.nom=response.data.nom;
		$scope.user.prenom=response.data.prenom;
		$scope.user.adresse=response.data.adresse;
		$scope.user.ville=response.data.ville;
		$scope.user.date_de_naissance=response.data.date_de_naissance;
		$scope.user.sexe=response.data.sexe;

		}, function errorCallback(response) {
		alert(response);
		});

		$scope.update=function()
		{

			serviceData.updateDataUser($scope.user).then(function successCallback(response) {
				response.data==='true'?alert('Paramètres mis à jour '):alert('erreur');
				}, function errorCallback(response) {
				alert(response);
				});
		}

 }]);
