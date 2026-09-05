import { Given, When, Then } from '@cucumber/cucumber';
import { RegisterPage } from '../../pages/RegisterPage_task_StudentRegistration';
import { CustomWorld } from '../../support/world';

let register: RegisterPage;

Given('User is on Student Registration page', async function (this: CustomWorld) {
  register = new RegisterPage(this.page);
  await register.navigateToRegistrationPage();
});


When('User fills registration form with {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}', async function (string, string2, string3, string4, string5, string6, string7, string8, string9, string10) {
  // Write code here that turns the phrase above into concrete actions
    const studentData = {
      firstName: string,
      email: string2,
      gender: string3,
      mobileNumber: string4,
      dob: string5,
      subject: string6,
      hobby: string7,
      address: string8,
      state: string9,
      city: string10,
    };
    await register.registerStudent(studentData);
});

When('User submits the registration form', async function () {
  // Write code here that turns the phrase above into concrete actions
  await register.verifyAndClickLoginButton();
  
});

Then('Registration should be successful', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log('Registration Data filling successful');
  
});