'use strict';


describe('ShareYourSport - E2E ', function() {

    describe('- Page parameters ', function() {

        var inputPseudo=element(by.model('user.pseudo'));
        var inputEmail=element(by.model('user.email'));
        var inputTel=element(by.model('user.tel'));
        var inputMdp=element(by.model('user.motdepasse'));
        var inputNom=element(by.model('user.nom'));
        var inputPrenom=element(by.model('user.prenom'));
        var inputAdresse=element(by.model('user.adresse'));
        var inputVille=element(by.model('user.ville'));
        var inputDate=element(by.model('user.date_de_naissance'));
        var inputSexe=element(by.model('user.sexe'));



        var buttonUpdate=element(by.buttonText('Mettre à jour'));


            beforeEach(function() {
                browser.get('');

                var connexion = element(by.buttonText('Connexion'));
                var userEmail = element(by.model('user.email'));
                var userMotdepasse = element(by.model('user.motdepasse'));

                userEmail.sendKeys('mohamed@gmail.com');
                userMotdepasse.sendKeys('mohamed95');
                connexion.click();

                browser.get('#!/parametres');
            });

            it('should render creer when user navigates to #!/parametres', function() {
                expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#!/parametres');
            });

            it('should fill the input when the user is typing or selecting ', function() {


                 inputPseudo.clear();
                 inputPseudo.sendKeys('Moha');
                 expect(inputPseudo.getAttribute('value')).toEqual('Moha');

                 inputEmail.clear();   
                 inputEmail.sendKeys('mohamed@gmail.com');
                 expect(inputEmail.getAttribute('value')).toEqual('mohamed@gmail.com');

                 inputTel.clear(); 
                 inputTel.sendKeys('0601020304');
                 expect(inputTel.getAttribute('value')).toEqual('0601020304');

                 inputMdp.clear(); 
                 inputMdp.sendKeys('mohamed95');
                 expect(inputMdp.getAttribute('value')).toEqual('mohamed95');

                 inputNom.clear();   
                 inputNom.sendKeys('qassou');
                 expect(inputNom.getAttribute('value')).toEqual('qassou');

                 inputPrenom.clear();
                 inputPrenom.sendKeys('Mohamed');
                 expect(inputPrenom.getAttribute('value')).toEqual('Mohamed');

                 inputAdresse.clear();
                 inputAdresse.sendKeys('10 rue');
                 expect(inputAdresse.getAttribute('value')).toEqual('10 rue');

                 inputVille.clear();
                 inputVille.sendKeys('Paris');
                 expect(inputVille.getAttribute('value')).toEqual('Paris');

                 inputDate.clear();
                 inputDate.sendKeys('14/01/1994');
                 expect(inputDate.getAttribute('value')).toEqual('14/01/1994');

             //    inputSexe.clear();
                 inputSexe.$('[value="Homme"]').click();
                 expect(inputSexe.getAttribute('value')).toEqual('Homme');

              
            });

           
               it('should display an alert when creating an event ', function() {


                 inputPseudo.clear();
                 inputPseudo.sendKeys('Moha');

                 inputEmail.clear();   
                 inputEmail.sendKeys('mohamed@gmail.com');

                 inputTel.clear(); 
                 inputTel.sendKeys('0601020304');

                 inputMdp.clear(); 
                 inputMdp.sendKeys('mohamed95');

                 inputNom.clear();   
                 inputNom.sendKeys('qassou');

                 inputPrenom.clear();
                 inputPrenom.sendKeys('Mohamed');

                 inputAdresse.clear();
                 inputAdresse.sendKeys('10 rue');

                 inputVille.clear();
                 inputVille.sendKeys('Paris');

                 inputDate.clear();
                 inputDate.sendKeys('14/01/1994');
  
               //  inputSexe.clear();
                 inputSexe.$('[value="Homme"]').click();
              
                buttonUpdate.click();

                browser.waitForAngular();

                browser.switchTo().alert().then(function(alert) {
                    expect(alert.getText()).toBe('Paramètres mis à jour');
                    alert.accept();
                }, function(err) {
                    fail('Fail this spec');
                });
                     
            });
              

                 

            
            });//fin Page parametres
 

      
       

}); 
