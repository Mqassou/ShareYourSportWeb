'use strict';
angular.module('ShareYourSport')
  .factory('serviceData', function ($http, $q) {
    let server='http://localhost:8080/';
     var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            };
    return{
        login: function(data){
            return $http.post(server+'login',data,config);
        },
         createUser: function(data){
            return $http.post(server+'createUser',data,config);
        },
        allEvent: function(){
            return $http.get(server+'allEvent');
        },
        joinEvent: function(data){
            return $http.post(server+'joinEvent',data,config);
        }
    }
  });
