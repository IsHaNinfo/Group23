import { Given, When, Then } from "@cucumber/cucumber";
import axios from "axios";
import { expect } from "chai";

const baseURL = "http://localhost:7081/api/books";
let response; // Global variable to hold the API response

// Helper function to encode the username and password into Base64 format
function getBasicAuthHeader(username, password) {
    const authString = `${username}:${password}`;
    return "Basic " + Buffer.from(authString).toString("base64");
  }
  
  // Step: Authenticate as admin
  Given("I am authenticated as admin for delete operation", function () {
    this.authHeader = { Authorization: getBasicAuthHeader("admin", "password") };
  });

  // Step: Delete a book by ID
When("I delete the book with ID {int}", async function (id) {
    try {
      response = await axios.delete(`${baseURL}/${id}`, {
        headers: this.authHeader,
      });
      this.response = response; // Store response for later use
    } catch (err) {
      this.response = err.response; // Handle errors gracefully
    }
  });
  
  // Step: Verify successful deletion
  Then("the book should be deleted successfully", function () {
    expect(this.response.status).to.equal(200);
    expect(this.response.data).to.include({ message: "Book deleted successfully" });
  });
  
  // Step: Verify the book is not in the list
  Then("I should not see the book in the list", async function () {
    const listResponse = await axios.get(baseURL, {
      headers: this.authHeader,
    });
  
    const deletedBook = listResponse.data.find(
      (book) => book.id === this.response.data.id
    );
  
    expect(deletedBook).to.be.undefined; // The deleted book should not exist
  });
  
  // Step: Verify deletion failure for invalid ID
  Then("the book should not be deleted", function () {
    expect(this.response.status).to.equal(404); // Adjust status code based on API behavior
    expect(this.response.data).to.include("Book is not found");
  });
  
  // Step: Verify error message for invalid deletion
  Then("I should see an error message {string}", function (errorMessage) {
    expect(this.response.data).to.equal(errorMessage);
  });
  