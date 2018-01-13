'use strict';

describe('data service', function () {


    beforeEach(module('ShareYourSport'));

    var serviceData, httpBackend,data={};
    beforeEach(inject(function (_serviceData_, _$httpBackend_) {
        serviceData = _serviceData_;
        httpBackend = _$httpBackend_;
    }));

    it('should make a request to the right URL when calling login function', function () {

        serviceData.login(data);

        httpBackend.expectPOST('http://localhost:8080/login').respond({});

        httpBackend.flush();

    });


     it('should make a request to the right URL when calling createUser function', function () {

        serviceData.createUser(data);

        httpBackend.expectPOST('http://localhost:8080/createUser').respond({});

        httpBackend.flush();

    });

      it('should make a request to the right URL when calling createEvent function', function () {

        serviceData.createEvent(data);

        httpBackend.expectPOST('http://localhost:8080/createEvent').respond({});

        httpBackend.flush();

    });

       it('should make a request to the right URL when calling allEvent function', function () {

        serviceData.allEvent();

        httpBackend.expectGET('http://localhost:8080/allEvent').respond({});

        httpBackend.flush();

    });



       it('should make a request to the right URL when calling allField function', function () {

        serviceData.allField();

        httpBackend.expectGET('http://localhost:8080/allField').respond({});

        httpBackend.flush();

    });

        it('should make a request to the right URL when calling joinEvent function', function () {

        serviceData.joinEvent(data);

        httpBackend.expectPOST('http://localhost:8080/joinEvent').respond({});

        httpBackend.flush();

    });

         it('should make a request to the right URL when calling dataUser function', function () {

        serviceData.dataUser(data);

        httpBackend.expectPOST('http://localhost:8080/dataUser').respond({});

        httpBackend.flush();

    });

          it('should make a request to the right URL when calling updateDataUser function', function () {

        serviceData.updateDataUser(data);

        httpBackend.expectPOST('http://localhost:8080/updateDataUser').respond({});

        httpBackend.flush();

    });

});
