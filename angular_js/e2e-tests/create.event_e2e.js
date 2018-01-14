'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('ShareYourSport - E2E ', function() {

    describe('- Page create event ', function() {
        //////// NgMap//////
        var fieldList = element.all(by.css('.custom-marker'))
        var firstCustomMarker=fieldList.last();// last car celui-ci est visible sur la fenêtre
        var img=firstCustomMarker.element( by.tagName('img'));
        var modal=firstCustomMarker.element( by.css('.fieldinfomodal'));

        var nomBind=firstCustomMarker.element( by.binding('field.nom'));
        var adresseBind=firstCustomMarker.element( by.binding('field.adresse'));
        var villeBind=firstCustomMarker.element( by.binding('field.ville'));

        var buttonClose=firstCustomMarker.element(by.buttonText('Fermer'));
        var buttonChoose=firstCustomMarker.element(by.buttonText('Choisir ce lieu'));

        //////////////////////////////////////////
        var inputSport=element(by.model('event.sport'));//element(by.model('orderProp')).$('[value="age"]').click();
        var inputDate=element(by.model('event.date'));
        var inputHdebut=element(by.model('event.heuredebut'));
        var inputHfin=element(by.model('event.heurefin'));
        var inputNbpersonne=element(by.model('event.nbrpersonne'));
        var buttonCreate=element(by.buttonText('Créer l\'événement'));


        var EC = protractor.ExpectedConditions;

    

            beforeEach(function() {
                browser.get('#!/creer');
            });

            it('should render creer when user navigates to #!/creer', function() {
                expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#!/creer');
            });

            it('should fill the input when the user is typing or selecting ', function() {

                inputSport.$('[value="Tennis"]').click();
                expect(inputSport.getAttribute('value')).toEqual('Tennis');

                inputDate.sendKeys('14/01/2018');
                expect(inputDate.getAttribute('value')).toEqual('2018-01-14');

                inputHdebut.sendKeys('14:00');
                expect(inputHdebut.getAttribute('value')).toEqual('14:00');

                inputHfin.sendKeys('16:00');
                expect(inputHfin.getAttribute('value')).toEqual('16:00');

                inputNbpersonne.sendKeys('2');
                expect(inputNbpersonne.getAttribute('value')).toEqual('2');
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


              it('should set lieu, ville  and adresse when  clicking on the choose button ', function() {
                img.click();
          
                browser.waitForAngular();

                buttonChoose.click();

                browser.waitForAngular();

                expect(element(by.binding('event.lieupratique')).getText()).toEqual(nomBind.getText());
                expect(element(by.binding('event.adresse')).getText()).toEqual(adresseBind.getText());
                expect(element(by.binding('event.ville')).getText()).toEqual(villeBind.getText());    

            
            });


               it('should display an alert when creating an event ', function() {


                inputSport.$('[value="Tennis"]').click();

                img.click();
          
                browser.waitForAngular();

                buttonChoose.click();

                inputDate.sendKeys('14/01/2018');

                inputHdebut.sendKeys('14:00');

                inputHfin.sendKeys('16:00');

                inputNbpersonne.sendKeys('2');

                buttonCreate.click();

                 browser.waitForAngular();

                browser.switchTo().alert().then(function(alert) {
                    expect(alert.getText()).toBe('Evenement crée');
                    alert.accept();
                }, function(err) {
                    fail('Fail this spec');
                });
                     
            });
              

                 

            
            });//fin Pagecreate event
 

      
       

}); 
