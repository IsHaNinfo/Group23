import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios';
import { expect } from 'chai';

let response;
const baseURL = "http://localhost:7081/api/books";

// Helper function to encode the username and password into Base64 format
function getBasicAuthHeader(username, password) {
  const authString = `${username}:${password}`;
  return 'Basic ' + Buffer.from(authString).toString('base64');
}

Given('I am authenticated as {string}', async function (role) {
  const basicAuth = getBasicAuthHeader(role, 'password'); // Replace 'password' if necessary
  this.authHeader = { Authorization: basicAuth };
});

When('I delete the book with ID {int}', async function (bookId) {
  try {
    response = await axios.delete(`${baseURL}/${bookId}`, {
      headers: this.authHeader
    });
  } catch (error) {
    response = error.response;
  }
});

Then('the book should be deleted successfully', function () {
  if (!response || !response.status) {
    throw new Error("Response is undefined or missing the 'status' property");
  }

  expect(response.status).to.equal(200); // Expecting a 200 OK status for successful deletion
  expect(response.data).to.equal('Successfully deleted the book'); // Verify success message
});

Then('the book should not be deleted', function () {
  if (!response || !response.status) {
    throw new Error("Response is undefined or missing the 'status' property");
  }

  expect(response.status).to.equal(404); // Expecting a 404 Not Found for invalid book ID
});

Then('I should see an error message {string}', function (errorMessage) {
  expect(response.data).to.equal(errorMessage); // Check if the error message matches the expected message
});
