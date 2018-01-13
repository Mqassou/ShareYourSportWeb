'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('ShareYourSport - E2E ', function() {

    describe('- Page login ', function() {
        var userEmail = element(by.model('user.email'));
        var userMotdepasse = element(by.model('user.motdepasse'));
        var connexion = element(by.buttonText('Connexion'));
        var newUserPseudo = element(by.model('newUser.pseudo'));
        var newUserEmail = element(by.model('newUser.email'));
        var newUserMotdepasse = element(by.model('newUser.motdepasse'));


        var creercompte = element(by.buttonText('Créer un compte'));
        var annuler = element(by.buttonText('Annuler'));
        var valider = element(by.buttonText('Valider'));

        var modal = element(by.id('creercompte'));

        describe('- Connexion ', function() {

            beforeEach(function() {
                browser.get('');
            });

            xit('should render login when user navigates to /login', function() {
                expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#!/login');
            });

            xit('should render home when user enter the correct email and password', function() {
                userEmail.sendKeys('mohamed@gmail.com');
                userMotdepasse.sendKeys('mohamed95');

                connexion.click();
                expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#!/home');
            });

            xit('should stay on the  login  page when user enter the wrong password', function() {

                userEmail.sendKeys('mohamed@gmail.com');
                userMotdepasse.sendKeys('');
                connexion.click();
                browser.waitForAngular();
                browser.switchTo().alert().then(function(alert) {
                    alert.accept();
                    expect(browser.getCurrentUrl()).not.toBe('http://localhost:8000/#!/home');
                }, function(err) {

                    fail('Fail this spec');
                });


            });

        }); //fin Connexion

        describe('Créer compte ', function() {
            beforeEach(function() {
                browser.get('');
            });

            xit('should render alert when user create an account', function() {
                var EC = protractor.ExpectedConditions;
                creercompte.click();

                browser.wait(EC.visibilityOf(modal), 5000);

                expect(modal.isDisplayed()).toBe(true);
                newUserPseudo.sendKeys('Moha');
                newUserEmail.sendKeys('mohamed2@gmail.com');
                newUserMotdepasse.sendKeys('mohamed96');

                valider.click();

                browser.waitForAngular();

                browser.switchTo().alert().then(function(alert) {
                    expect(alert.getText()).toBe('Compte crée');
                    alert.accept();
                    expect(modal.isDisplayed()).toBe(false);
                }, function(err) {
                    fail('Fail this spec');
                });
            });


        }); //fin Créer compte

    }); //fin Page LOGIN
});