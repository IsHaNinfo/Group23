import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../../API/Login/login.cy';
import Books from '../../API/Books/books.cy';

let response;

Given('user is logged into the service', () => {
  login.loginAuth('user', 'password').then((res) => {
    response = res;
    expect(response.status).to.eq(200); // Ensures login is successful
  });
});

When('the user sends a POST request to create a new book with empty id:', (dataTable) => {
  const book = dataTable.hashes()[0]; // Extracts book details from the table
  Books.addBook(book).then((res) => {
    response = res; // Saves the response from the POST request
  });
});

Then('the insert response status should be {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode); // Validates if response status is 201
});
