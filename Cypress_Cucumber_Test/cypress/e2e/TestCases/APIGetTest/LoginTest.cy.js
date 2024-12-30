import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Login from '../../API/Login/login.cy';

let response;

Given('I send a GET request to login with username {string} and password {string}', (username, password) => {
  Login.loginUser(username, password).then((res) => {
    response = res;
  });
});

Then('the response status should be {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});
