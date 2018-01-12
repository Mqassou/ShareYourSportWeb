'use strict';
describe('login controller', function(){

  beforeEach(module('ShareYourSport'));


 var $scope,serviceData, Page,$location,$cookies,LoginCtrl, $q,deferred;

  beforeEach(inject(function ($controller, _$rootScope_,_$location_,_$cookies_,_$q_,_serviceData_,_Page_) {
         $scope = _$rootScope_.$new();
         serviceData = _serviceData_;
         Page=_Page_;
         $location=_$location_;
         $cookies=_$cookies_;
         $q=_$q_;

         deferred = _$q_.defer();//create a mock instance of deferred


         LoginCtrl = $controller('LoginCtrl', {
            $scope: $scope,
            serviceData: serviceData,
            Page:Page,
            $location:$location,
            $cookies:$cookies
        });

        spyOn(serviceData, 'login').and.returnValue(deferred.promise);
 		spyOn(serviceData, 'createUser').and.returnValue(deferred.promise);
		spyOn($cookies, 'put');
		spyOn($location, 'path');

    }));//END beforeEach

    it('should defined the controller', inject(function() {
      expect(LoginCtrl).toBeDefined();
    }));

	 it('should set the page title to Connexion', inject(function() {
	     expect(Page.title()).toEqual('Connexion');
	    }));



	 	describe(' - Connexion', function(){

		 	 it('should called  the method login of the service serviceData when calling $scope.connexion ', inject(function() {
		

			$scope.connexion();

			expect(serviceData.login).toHaveBeenCalled();
		    }));



		    it('should called  $cookies.put and $location.path when calling $scope.connexion and  the promise not return false ', inject(function() {
		
			deferred.resolve({data:'158212zb158'});

			$scope.connexion();
			$scope.$apply();


			
			expect($cookies.put).toHaveBeenCalled();
			expect($location.path).toHaveBeenCalled();

		    }));



		    it('should NOT called  $cookies.put and $location.path when calling $scope.connexion and  the promise return false ', inject(function() {
		
			deferred.resolve({data:'false'});

			$scope.connexion();
			$scope.$apply();

			expect($cookies.put).not.toHaveBeenCalled();
			expect($location.path).not.toHaveBeenCalled();

		    }));



		    it('should call cookies  with userId and the value of the response data ', inject(function() {
		
			deferred.resolve({data:'451235451'});

			$scope.connexion();
			$scope.$apply();

			console.log($cookies.get('userId'));

		   expect($cookies.put).toHaveBeenCalledWith('userId','451235451');


		    }));



	 		it('should call $location.path to /home when calling connexion() and promise not return false', inject(function() {
		
			deferred.resolve({data:'451235451'});

			$scope.connexion();
			$scope.$apply();

			 expect($location.path).toHaveBeenCalledWith("/home");


		    }));


		     it('should print window alert  when response data false ', inject(function() {
		
			spyOn(window, 'alert');
			deferred.resolve({data:'false'});
			
			$scope.connexion();
			$scope.$apply();

			expect(window.alert).toHaveBeenCalledWith('erreur');

		    }));

  		 });//FIN describe connexion



	 	describe(' - creerCompte', function(){

		 	 it('should called  the method createUser of the service serviceData when calling $scope.creerCompte ', inject(function() {
		

			$scope.creerCompte();

			expect(serviceData.createUser).toHaveBeenCalled();
		    }));



		    it('should print window alert  when response data is true ', inject(function() {
		
			spyOn(window, 'alert');
			deferred.resolve({data:'true'});

			$scope.creerCompte();
			$scope.$apply();

			expect(window.alert).toHaveBeenCalledWith('compte crée');

		    }));

		    it('should print window alert  when response data is not true ', inject(function() {
		
			spyOn(window, 'alert');
			deferred.resolve({data:'false'});
			
			$scope.creerCompte();
			$scope.$apply();

			expect(window.alert).toHaveBeenCalledWith('erreur');

		    }));



		    it('should NOT called  $cookies.put and $location.path when calling $scope.connexion and  the promise return false ', inject(function() {
		
			deferred.resolve({data:'false'});

			$scope.connexion();
			$scope.$apply();

			expect($cookies.put).not.toHaveBeenCalled();
			expect($location.path).not.toHaveBeenCalled();

		    }));



		    it('should call cookies  with userId and the value of the response data ', inject(function() {
		
			deferred.resolve({data:'451235451'});

			$scope.connexion();
			$scope.$apply();


		   expect($cookies.put).toHaveBeenCalledWith('userId','451235451');


		    }));



	 		it('should call $location.path to /home when calling connexion() and promise not return false', inject(function() {
		
			deferred.resolve({data:'451235451'});

			$scope.connexion();
			$scope.$apply();

			 expect($location.path).toHaveBeenCalledWith("/home");


		    }));

  		 });//creerCompte


  

});
