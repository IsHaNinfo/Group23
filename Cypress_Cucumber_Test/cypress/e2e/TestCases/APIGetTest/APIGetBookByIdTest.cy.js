import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../API/Login/login.cy";
import Books from "../../API/Books/books.cy";

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

When('{string} sends a GET request to retrieve a book with ID {int}', (loggedInUser, bookId) => {
  Books.getBookById(bookId).then((res) => {
    response = res;
  });
});

Then('the response status should {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

And('the response should contain the book data with ID {int}', (bookId) => {
  expect(response.body).to.have.property('id', bookId);
  expect(response.body).to.have.property('title'); 
  expect(response.body).to.have.property('author'); 
});

And('the response should contain the error message {string}', (expectedErrorMessage) => {
  expect(response.body).to.eq(expectedErrorMessage);
});
