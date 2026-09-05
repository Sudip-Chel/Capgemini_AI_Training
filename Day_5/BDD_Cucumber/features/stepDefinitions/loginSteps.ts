import {Given,When,Then} from '@cucumber/cucumber';
import {LoginPage} from '../../pages/LoginPage';
import {CustomWorld} from '../../support/world';

let login: LoginPage;


Given('the user is on the login page', async function (this : CustomWorld ) {
    login = new LoginPage(this.page);
    await login.openApp();
});

When('the user enters valid username and password', async function (this : CustomWorld) {
  await login.fillwithvalidcredential();
});

When('clicks the login button', async function (this : CustomWorld) {
    await login.clickloginbutton();
  
});

Then('the user should be redirected to the dashboard', async function (this : CustomWorld) {
  await login.verifySuccesfullogin();
});

When('the user enters invalid username or password', async function (this : CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await login.fillwithinvalidcredentials('user','sauce');
});

Then('an error message should be displayed indicating invalid credentials', async function (this : CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  console.log('Verifying error message');
  await login.Errormessagevisible();
});


When('User enters {string} and {string}', async  function (string, string2) {

    await login.loginwithmultipleusers(string,string2);
          
});
