import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../API/Login/login.cy";
import Books from "../../API/Books/books.cy";

let response;

// Background step
Given('user is logged into the service', () => {
  login.loginAuth('admin', 'password').then((res) => {
    cy.wrap(res.body.token).as('authToken'); // Save the auth token for future use
  });
});

// Scenario-specific authentication
Given('user is authenticated as {string}', (role) => {
  login.loginAuth(role, 'password').then((res) => {
    cy.wrap(res.body.token).as('authToken'); // Save the auth token for this role
  });
});

// Step to delete a book by ID
When('user sends a DELETE request for the book with ID {int}', (bookId) => {
  cy.get('@authToken').then((token) => {
    Books.deleteBook(bookId, token).then((res) => {
      response = res; // Store the response for assertion
      
    });
  });
});

// Step to validate response status
Then('the delete response status should be {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

// Step to validate success message
And('the response should confirm deletion with message {string}', (successMessage) => {
  expect(response.body.message).to.eq(successMessage);
});

// Step to validate error message
And('the response should contain a error message {string}', (expectedErrorMessage) => {
  expect(response.body.message).to.eq(expectedErrorMessage);
});
