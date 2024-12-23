import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios';
import { expect } from 'chai';

let response;
const baseURL = "http://localhost:7081/api/books";

Given('I am authenticated as {string}', async function (role) {
  // Replace 'password' with the correct password if necessary
  const basicAuth = getBasicAuthHeader(role, 'password');
  this.authHeader = { Authorization: basicAuth };
});

// Helper function to encode the username and password into Base64 format
function getBasicAuthHeader(username, password) {
  const authString = `${username}:${password}`;
  return 'Basic ' + Buffer.from(authString).toString('base64');
}

When('I retrieve the list of books', async function () {
  try {
    response = await axios.get(baseURL, {
      headers: this.authHeader
    });
  } catch (error) {
    response = error.response;
  }
});

Then('the list of books should be retrieved successfully', function () {
  if (!response || !response.status) {
    throw new Error("Response is undefined or missing the 'status' property");
  }
  
  expect(response.status).to.equal(200); // Expecting a 200 OK status
  
  // Verify that the response contains a list of books
  expect(response.data).to.be.an('array').that.is.not.empty;
  
  // Validate the structure of the first book in the list
  expect(response.data[0]).to.have.property('id');
  expect(response.data[0]).to.have.property('title');
  expect(response.data[0]).to.have.property('author');
});

Then('I should see the books in the list', function () {
  // Log the list of books for debugging
  console.log('Books List:', response.data);
  
  // Validate the contents of the books (e.g., checking if the book has a specific title)
  expect(response.data).to.satisfy(books => books.every(book => book.title && book.author));
});
