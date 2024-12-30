import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../API/Login/login.cy";
import Books from "../../API/Books/books.cy";

let response;

Given('user is logged into the service', () => {
  login.loginUser('admin', 'password').then((res) => {
    response = res;
  });
});

Given('user is authenticated as {string}', (role) => {
  login.loginUser(role, 'password').then((res) => {
    response = res;
  });
});

Given('the following book exists:', (dataTable) => {
  const bookId = parseInt(dataTable.hashes()[0].id); // Extract the book ID from the table

  Books.getBookById(bookId).then((res) => {
    // Assert that the book exists (status 200)
    if (res.status !== 200) {
      throw new Error(`Book with ID ${bookId} does not exist.`);
    }
  });
});

When('user sends a DELETE request for the book with ID {int}', (bookId) => {
    Books.deleteBook(bookId).then((res) => {
        response = res;
    });
});

Then('the delete response status should be {int}', (statusCode) => {
    expect(response.status).to.eq(statusCode);
});

And('the response should contain the error message {string}', (expectedErrorMessage) => {
    expect(response.body.message).to.eq(expectedErrorMessage);
});

