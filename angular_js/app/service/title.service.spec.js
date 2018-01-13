'use strict';
describe('title service ', function(){

  beforeEach(module('ShareYourSport'));


 var Page;

  beforeEach(inject(function (_Page_) {

         Page=_Page_;
        

    }));//END beforeEach

    it('should defined the title service', inject(function() {
      expect(Page).toBeDefined();
    }));

	 it('should set the page title expected', inject(function() {
	 	Page.setTitle('Titre');
	     expect(Page.title()).toEqual('Titre');
	    }));


  

});
