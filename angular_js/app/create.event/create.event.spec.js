'use strict';
describe('create.event controller', function(){

  beforeEach(module('ShareYourSport'));


 var $scope,serviceData, Page,NgMap,CreateEventCtrl, $q,deferred;

  beforeEach(inject(function ($controller, _$rootScope_,_NgMap_,_$q_,_serviceData_,_Page_) {
         $scope = _$rootScope_.$new();
         serviceData = _serviceData_;
         Page=_Page_;
         NgMap=_NgMap_;
        
         $q=_$q_;

         deferred = _$q_.defer();//create a mock instance of deferred

		spyOn(serviceData, 'allField').and.returnValue(deferred.promise);
 		spyOn(serviceData, 'createEvent').and.returnValue(deferred.promise);

         CreateEventCtrl = $controller('CreateEventCtrl', {
            $scope: $scope,
            serviceData: serviceData,
            Page:Page,
            NgMap:NgMap
        });

        

    }));//END beforeEach

    it('should defined the controller', inject(function() {
      expect(CreateEventCtrl).toBeDefined();
    }));

	 it('should set the page title to Creer evenement', inject(function() {
	     expect(Page.title()).toEqual('Creer evenement');
	    }));

	

	 it('should called  the method allField of the service serviceData and set $scope.fields ', inject(function() {

	 //	let fields=[{lieupratique:'gymnase1',ville:'Paris'},{lieupratique:'gymnase2',ville:'Nanterre'}];
		//deferred.resolve(fields);
		$scope.$apply();
		
		expect(serviceData.allField).toHaveBeenCalled();

	//	expect($scope.fields).toEqual(fields);
		}));


	 it('should set $scope.event   when calling  $scope.choisir ', inject(function() {
	 	let field={
	 		nom:"terrain",
	 		adresse:"10 rue",
	 		ville:"Paris",
	 		latitude:"10.23875",
	 		longitude:"1.234675"
	 	};

		$scope.choisir(field);
		
		expect($scope.event.lieupratique).toEqual(field.nom);
		expect($scope.event.adresse).toEqual(field.adresse);
		expect($scope.event.ville).toEqual(field.ville);
		expect($scope.event.latitude).toEqual(field.latitude);
		expect($scope.event.longitude).toEqual(field.longitude);


		}));

 		it('should called  the method createEvent of the service serviceData when calling $scope.creer ', inject(function() {
		
		$scope.event={
		 		sport:'basket',
		 		lieupratique:'gymnase',
		 		ville:'Paris',
		 		adresse:'11 rue',
		 		latitude:'1.234679',
		 		longitude:'10.43467',
		 		date:'14/05/2018',
		 		heuredebut:'14:00',
		 		heurefin:'16:00',
		 		nbrpersonne:'10'
		 	}
			$scope.creer();

			expect(serviceData.createEvent).toHaveBeenCalled();

			expect(serviceData.createEvent).toHaveBeenCalledWith($scope.event);

		    }));


		     it('should print window alert  when calling $scope.creer and response data is true ', inject(function() {
		
			spyOn(window, 'alert');
			deferred.resolve({data:'true'});
			
			$scope.creer();
			$scope.$apply();

			expect(window.alert).toHaveBeenCalledWith('Evenement cree');
		    }));


  			it('should print window alert  when calling $scope.creer and response data is NOT true ', inject(function() {
  			spyOn(window, 'alert');
			deferred.resolve({data:'Whatever'});
			$scope.creer();
			$scope.$apply();

			expect(window.alert).toHaveBeenCalledWith('erreur');
			 }));

  	
  

});
