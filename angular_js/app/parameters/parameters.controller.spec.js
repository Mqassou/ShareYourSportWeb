'use strict';
describe('parameters controller', function(){

  beforeEach(module('ShareYourSport'));


 var $scope,serviceData, Page, NgMap,$cookies,ParametersCtrl, $q,deferred;

  beforeEach(inject(function ($controller, _$rootScope_,_$cookies_,_$q_,_serviceData_,_NgMap_,_Page_) {
         $scope = _$rootScope_.$new();
         serviceData = _serviceData_;
         Page=_Page_;
         $cookies=_$cookies_;
         $q=_$q_;
 		 NgMap=_NgMap_;
         deferred = _$q_.defer();//create a mock instance of deferred

 		spyOn(serviceData, 'dataUser').and.returnValue(deferred.promise);
 		spyOn(serviceData, 'updateDataUser').and.returnValue(deferred.promise);
		spyOn($cookies, 'get');
		
         ParametersCtrl = $controller('ParametersCtrl', {
            $scope: $scope,
            serviceData: serviceData,
            Page:Page,
            $cookies:$cookies,
            NgMap:NgMap
        });

    }));//END beforeEach

    it('should defined the controller', inject(function() {
      expect(ParametersCtrl).toBeDefined();
    }));

	 it('should set the page title to Connexion', inject(function() {
	     expect(Page.title()).toEqual('Paramètres');
	    }));

 	it('should called  the method dataUser of the service serviceData and set $scope.user ', inject(function() {

		$scope.$apply();
		
		expect(serviceData.dataUser).toHaveBeenCalled();

		}));
	
 		it('should called  the method updateDataUser of the service serviceData when calling $scope.update() ', inject(function() {
			$scope.user.userId='1e6e';
			$scope.user.pseudo='pseudo';
			$scope.user.motdepasse='e6e15r';
			$scope.user.email='pseudo@gmail.com';
			$scope.user.tel='060120304';
			$scope.user.nom='nom';
			$scope.user.prenom='prenom';
			$scope.user.adresse='10 rue';
			$scope.user.ville='Paris';
			$scope.user.date_de_naissance='17/01/1991';
			$scope.user.sexe='homme';

			$scope.update();

			expect(serviceData.updateDataUser).toHaveBeenCalledWith($scope.user);

		    }));


 			 it('should print window alert  when calling $scope.update and response data is true ', inject(function() {
		
			spyOn(window, 'alert');
			deferred.resolve({data:'true'});
			
			$scope.update();
			$scope.$apply();

			expect(window.alert).toHaveBeenCalledWith('Paramètres mis à jour');
		    }));

		      it('should print window alert  when calling $scope.update and response data is NOT true ', inject(function() {
		
			spyOn(window, 'alert');
			deferred.resolve({data:'WhatEver'});
			
			$scope.update();
			$scope.$apply();

			expect(window.alert).toHaveBeenCalledWith('erreur');
		    }));
	

		 

});
