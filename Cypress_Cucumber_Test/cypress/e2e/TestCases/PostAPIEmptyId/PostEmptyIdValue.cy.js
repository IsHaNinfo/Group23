import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import login from "../../API/Login/login.cy";
import Books from "../../API/Books/books.cy";

let response;

Given("user is logged into the service", () => {
  login.loginAuth("user", "password").then((res) => {
    response = res;
    expect(response.status).to.eq(200);
  });
});

When(
  "the user sends a POST request to create a new book with empty id:",
  (dataTable) => {
    console.log("dataTable", dataTable);
    const book = dataTable.hashes()[0];
    console.log("book", book);
    Books.addBook(book).then((res) => {
      response = res;
      console.log("response for creating POST with invalid id", response);
    });
  }
);
Then(
  "the insert response status for Empty Id should be {int}",
  (statusCode) => {
    expect(response.status).to.eq(statusCode);
  }
);
