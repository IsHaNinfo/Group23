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

// Step to authenticate the user
Given('I am authenticated as {string}', async function (role) {
  const basicAuth = getBasicAuthHeader(role, 'password'); // Replace 'password' if necessary
  this.authHeader = { Authorization: basicAuth };
});

// Step to ensure a book with the given ID exists
Given('a book with ID {int} exists', async function (bookId) {
  try {
    await axios.post(baseURL, { id: bookId, title: `Book ${bookId}`, author: 'Author' }, {
      headers: this.authHeader,
    });
  } catch (error) {
    throw new Error(`Failed to create a book with ID ${bookId}: ${error.message}`);
  }
});

// Step to delete a book with the given ID
When('I delete the book with ID {int}', async function (bookId) {
  try {
    response = await axios.delete(`${baseURL}/${bookId}`, {
      headers: this.authHeader,
    });
  } catch (error) {
    response = error.response; // Capture error response
  }
});

// Step to verify the book deletion is successful
Then('the book should be deleted successfully', function () {
  if (!response || !response.status) {
    throw new Error("Response is undefined or missing the 'status' property");
  }

  // Verify the status code and response message
  expect(response.status).to.equal(200); // Expecting a 200 OK status
  expect(response.data).to.equal('Successfully deleted the book'); // Verify success message
});

// Step to verify the book was not deleted due to an invalid ID
Then('the book should not be deleted', function () {
  if (!response || !response.status) {
    throw new Error("Response is undefined or missing the 'status' property");
  }

  // Verify the status code is 404 (Book not found)
  expect(response.status).to.equal(404);
});

// Step to check for a specific error message
Then('I should see an error message {string}', function (errorMessage) {
  if (!response || !response.data) {
    throw new Error("Response is undefined or missing the 'data' property");
  }

  // Verify the error message matches the expected one
  expect(response.data).to.include(errorMessage);
});
