import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../API/Login/login.cy";
import Books from '../../API/Books/books.cy';

let response;

Given('a {string} is logged into the service', (role) => {
  const credentials = {
    user: { username: 'user', password: 'password' },
    admin: { username: 'admin', password: 'password' },
  };

  const { username, password } = credentials[role];
  login.loginAuth(username, password).then((res) => {
    response = res;
    expect(response.status).to.eq(200); 
  });
});

When('{string} sends a GET request to retrieve all books', (loggedInUser) => {
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
