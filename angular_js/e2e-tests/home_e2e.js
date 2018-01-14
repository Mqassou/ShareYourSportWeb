'use strict';


describe('ShareYourSport - E2E ', function() {

    describe('- Page home ', function() {
        var eventList = element.all(by.css('.custom-marker'))
        var lastCustomMarker=eventList.last();// last car celui-ci est visible sur la fenêtre
        var img=lastCustomMarker.element( by.tagName('img'));
        var modal=lastCustomMarker.element( by.css('.eventinfomodal'));
        var buttonClose=lastCustomMarker.element(by.buttonText('Fermer'));
        var buttonJoin=lastCustomMarker.element(by.buttonText('Rejoindre'));
        var EC = protractor.ExpectedConditions;

    

            beforeEach(function() {
                browser.get('');

                var connexion = element(by.buttonText('Connexion'));
                var userEmail = element(by.model('user.email'));
                var userMotdepasse = element(by.model('user.motdepasse'));

                userEmail.sendKeys('mohamed@gmail.com');
                userMotdepasse.sendKeys('mohamed95');
                connexion.click();

                browser.get('#!/home');
            });

            it('should render home when user navigates to #!/home', function() {
                expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#!/home');
            });

            it('should display a modal when clicking on the  customMarker img ', function() {
           
                expect(modal.isDisplayed()).toBe(false);
            
                img.click();
          
                browser.waitForAngular();

                expect(modal.isDisplayed()).toBe(true);

            
            });


             it('should close the modal when clicking the close button ', function() {
           
                expect(modal.isDisplayed()).toBe(false);
            
                img.click();
          
                browser.waitForAngular();

                expect(modal.isDisplayed()).toBe(true);

                buttonClose.click();

                browser.waitForAngular();

                expect(modal.isDisplayed()).toBe(false);

            
            });

             it('should display an alert when joining an event ', function() {
           
                expect(modal.isDisplayed()).toBe(false);
            
                img.click();
          
                browser.waitForAngular();

                expect(modal.isDisplayed()).toBe(true);

                buttonJoin.click();

                browser.waitForAngular();

                browser.switchTo().alert().then(function(alert) {
                    expect(alert.getText()).toBe('Evenement rejoint');
                    alert.accept();
                }, function(err) {
                    fail('Fail this spec');
                });

                 

            
            });
 

      
       

    }); //fin Page HOME
});