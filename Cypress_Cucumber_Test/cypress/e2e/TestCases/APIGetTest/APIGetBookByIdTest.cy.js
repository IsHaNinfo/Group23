import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../API/Login/login.cy";
import Books from '../../API/Books/books.cy';

let response;

Given('admin is logged into the service',() => {
  login.loginUser('admin','password').then((res) => {
    response = res;
  });

})

When('admin sends a GET request to retrieve a book with ID {int}', (bookId) => {
  Books.getBookById(bookId).then((res) => {
    response = res;
  });
});

Then('the response status should {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

And('the response should contain the book data with ID {int}', (bookId) => {
  expect(response.body).to.have.property('id', bookId);
});
