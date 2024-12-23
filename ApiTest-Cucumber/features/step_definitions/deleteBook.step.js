import { Given, When, Then } from "@cucumber/cucumber";
import axios from "axios";
import { expect } from "chai";

let response;
const baseURL = "http://localhost:7081/api/books";

// Helper function to encode the username and password into Base64 format
function getBasicAuthHeader(username, password) {
  const authString = `${username}:${password}`;
  return "Basic " + Buffer.from(authString).toString("base64");
}

Given(
  "I am authenticated as {string} for delete operation",
  async function (role) {
    const basicAuth = getBasicAuthHeader(role, "password");
    this.authHeader = { Authorization: basicAuth };
  }
);

When('I delete the book with ID {int}', async function (id) {
    const response = await axios.delete(`http://localhost:7081/api/books/${id}`, {
        headers: {
            Authorization: 'Basic ' + Buffer.from('admin:password').toString('base64'),
        },
    });
    this.response = response;
});

Then('the book should be deleted successfully', function () {
    assert.strictEqual(this.response.status, 200, 'Failed to delete the book');
});

Then("I should not see the book in the list", async function () {
  try {
    const listResponse = await axios.get(baseURL, {
      headers: this.authHeader,
    });

    const deletedBook = listResponse.data.find(
      (book) => book.id === response.data.id
    );
    expect(deletedBook).to.be.undefined; // Verify the deleted book is not in the list
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error; // Re-throw the error to ensure the test fails
  }
});

Then('the book should not be deleted', function () {
    expect(response.status).to.equal(404); // Adjust status code based on API behavior.
    expect(response.data).to.equal('Book is not found'); // Verify the error message matches the API response.
  });

Then("I should see an error message {string}", function (errorMessage) {
  expect(response.data).to.equal(errorMessage); // Check if the error message matches the expected message
});
