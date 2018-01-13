'use strict';
describe('navBar controller', function(){

  beforeEach(module('ShareYourSport'));
   beforeEach(module('navbar/navbar.template.html'));

 var navBarCtrl, element,$scope;
	

		    beforeEach(inject(function($componentController,_$rootScope_) {

		      navBarCtrl = $componentController('navBar');
			  $scope=_$rootScope_.$new();
		    }));

    it('should defined the controller', inject(function() {
      expect(navBarCtrl).toBeDefined();
    }));


	it('should set a default values for the url' , function() {
		     const url={
		        login:'#!/login',
		        home:'#!/home',
		        createEvent:'#!/creer',
		        myEvent:'#!/evenements',
		        parameters:'#!/parametres'
		        };

		        expect(navBarCtrl.url).toEqual(url);

		       
	});


	it('should display a link  corresponding to the property of url', inject(function ($compile) {
   
        element = angular.element('<nav-bar></nav-bar>');
        element = $compile(element)($scope);
        $scope.$digest();

        let a = angular.element(element.find('a')[0]);
        expect( a.attr('ng-href')).toEqual(navBarCtrl.url.login);

        a = angular.element(element.find('a'));

         expect( a.length).toBe(4);

    }));

});
