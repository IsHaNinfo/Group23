import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../../API/Login/login.cy';

let credentials = {};
let response;

Given('I have valid user credentials {string} and {string}', (username, password) => {
  console.log("www",username)
  credentials = { username, password };
});

Given('I have invalid admin credentials {string} and {string}', (username, password) => {
  credentials = { username, password };
});

When('I send a POST request to the login endpoint', () => {
  Login.loginAuth(credentials.username, credentials.password).then((res) => {
    response = res;
  });
});

Then('I should receive a response with status code {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});
