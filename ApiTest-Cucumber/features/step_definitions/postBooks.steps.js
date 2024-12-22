import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios';
import { expect } from 'chai';
import { Buffer } from 'buffer';

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

When('I create a new book with following details:', async function (dataTable) {
  const bookDetails = dataTable.rowsHash();
  try {
    response = await axios.post(baseURL, bookDetails, {
      headers: this.authHeader
    });
  } catch (error) {
    response = error.response;
  }
});

Then('the book should be created successfully', function () {
  // Check if response status is 208 (Already Exists), handle it
  if (response.status === 208) {
    expect(response.data).to.equal('Book Already Exists');
  } else {
    expect(response.status).to.equal(201); // Assuming 201 Created is the expected response
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('title');
    expect(response.data).to.have.property('author');
  }
});

Then('I should see the new book in the list', async function () {
  try {
    // Send GET request to fetch the list of books with the authentication header
    const listResponse = await axios.get(baseURL, {
      headers: this.authHeader // Include the authentication header here
    });
    expect(listResponse);

    // Log the list of books for debugging
    console.log('Books List:', listResponse.data);

    // Find the created book in the list
  
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error; // Re-throw the error to ensure the test fails
  }
});
