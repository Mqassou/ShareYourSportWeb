angular.
  module('ShareYourSport').
  component('navBar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: function NavBarController() {

        var self = this;
       self.url={
        login:'#!/login',
        home:'#!/home',
        createEvent:'#!/creer',
        myEvent:'#!/evenements',
        parameters:'#!/parametres'
       }
      }
    
  });