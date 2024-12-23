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
  const basicAuth = getBasicAuthHeader(role, 'password'); // Replace 'password' with the correct password if needed
  this.authHeader = { Authorization: basicAuth };
});

When('I retrieve the book with ID {int}', async function (bookId) {
  try {
    response = await axios.get(`${baseURL}/${bookId}`, {
      headers: this.authHeader
    });
  } catch (error) {
    response = error.response;
  }
});

Then('the book details should be retrieved successfully', function () {
  if (!response || !response.status) {
    throw new Error("Response is undefined or missing the 'status' property");
  }

  expect(response.status).to.equal(200); // Expecting a 200 OK status
  expect(response.data).to.have.property('id');
  expect(response.data).to.have.property('title');
  expect(response.data).to.have.property('author');
});

Then('the book should have the title {string}', function (title) {
  expect(response.data.title).to.equal(title);
});

Then('the book should have the author {string}', function (author) {
  expect(response.data.author).to.equal(author);
});

Then('the book details should not be retrieved', function () {
  if (!response || !response.status) {
    throw new Error("Response is undefined or missing the 'status' property");
  }

  expect(response.status).to.equal(404); // Expecting a 404 Not Found for invalid book ID
  expect(response.data).to.equal('Book not found'); // Update the error message to match the API response
});

Then('I should see an error message {string}', function (errorMessage) {
  expect(response.data).to.equal(errorMessage); // Check if the error message matches the expected message
});
