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
  const bookData = dataTable.hashes().map((row) => ({
    id: row.id ? parseInt(row.id) : undefined, // Convert id to integer if provided
    title: row.title.replace(/"/g, ''), // Remove quotes from the title
    author: row.author.replace(/"/g, ''), // Remove quotes from the author
  }));

  Books.addBook(bookData[0]).then((res) => {
    response = res;
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

