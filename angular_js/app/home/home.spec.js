'use strict';
describe('home controller', function(){

  beforeEach(module('ShareYourSport'));


 var $scope,serviceData, Page, NgMap,$cookies,HomeCtrl, $q,deferred;

  beforeEach(inject(function ($controller, _$rootScope_,_$cookies_,_$q_,_serviceData_,_NgMap_,_Page_) {
         $scope = _$rootScope_.$new();
         serviceData = _serviceData_;
         Page=_Page_;
         $cookies=_$cookies_;
         $q=_$q_;
 		 NgMap=_NgMap_;
         deferred = _$q_.defer();//create a mock instance of deferred

 		spyOn(serviceData, 'allEvent').and.returnValue(deferred.promise);
 		spyOn(serviceData, 'joinEvent').and.returnValue(deferred.promise);
		spyOn($cookies, 'get');
		
         HomeCtrl = $controller('HomeCtrl', {
            $scope: $scope,
            serviceData: serviceData,
            Page:Page,
            $cookies:$cookies,
            NgMap:NgMap
        });

 
		

    }));//END beforeEach

    it('should defined the controller', inject(function() {
      expect(HomeCtrl).toBeDefined();
    }));

	 it('should set the page title to Connexion', inject(function() {
	     expect(Page.title()).toEqual('Accueil');
	    }));

 	it('should called  the method allEvent of the service serviceData and set $scope.events ', inject(function() {

		// let events=[{lieupratique:'gymnase1',ville:'Paris'},{lieupratique:'gymnase2',ville:'Nanterre'}];
		//deferred.resolve(events);
		$scope.$apply();
		
		expect(serviceData.allEvent).toHaveBeenCalled();

		//expect($scope.events).toEqual(events);
		}));

 		it('should called  $cookies.get when calling $scope.rejoindre', inject(function() {
		
			$scope.rejoindre(1);

			expect($cookies.get).toHaveBeenCalled();

		    }));


 		it('should called  the method joinEvent of the service serviceData  when calling $scope.rejoindre', inject(function() {

			$scope.rejoindre(1);
			expect(serviceData.joinEvent).toHaveBeenCalled();

		    }));


		     it('should print window alert  when calling $scope.rejoindre and response data is true ', inject(function() {
		
			spyOn(window, 'alert');
			deferred.resolve({data:'true'});
			
			$scope.rejoindre(1);
			$scope.$apply();

			expect(window.alert).toHaveBeenCalledWith('Evenement rejoint');
		    }));

		      it('should print window alert  when calling $scope.rejoindre and response data is NOT true ', inject(function() {
		
			spyOn(window, 'alert');
			deferred.resolve({data:'WhatEver'});
			
			$scope.rejoindre(1);
			$scope.$apply();

			expect(window.alert).toHaveBeenCalledWith('erreur');
		    }));

		 

});
