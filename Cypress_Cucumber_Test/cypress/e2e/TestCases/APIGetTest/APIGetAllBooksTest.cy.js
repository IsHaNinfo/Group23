import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../API/Login/login.cy";
import Books from '../../API/Books/books.cy';

let response;

Given('user is logged into the service', () => {
  login.loginAuth('user', 'password').then((res) => {
    response = res;
    expect(response.status).to.eq(200); 
  });
});

When('user sends a GET request to retrieve all books', () => {
  Books.getAllBooks().then((res) => {
    response = res;
  });
});

Then('the response status should be {int}', (statusCode) => {
  //expect(response.status).to.eq(statusCode);
});

And('the response should contain a list of books', () => {
  expect(response.body).to.be.an('array').that.is.not.empty;
});
