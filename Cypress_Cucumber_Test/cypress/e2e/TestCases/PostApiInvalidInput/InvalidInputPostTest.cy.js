import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../API/Login/login.cy";
import Books from "../../API/Books/books.cy";

let response;

Given('user is logged into the service', () => {
  login.loginUser('user', 'password').then((res) => {
    response = res;
  });
});

Given('user sends a POST request to add the following book with invalid author:', (dataTable) => {
  console.log("dataTable",dataTable)
    const book = dataTable.hashes()[0];
    Books.addBook(book).then((res) => {
      response = res;
    });
});

Then('the insert response status for Invalid Input test should be {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});


