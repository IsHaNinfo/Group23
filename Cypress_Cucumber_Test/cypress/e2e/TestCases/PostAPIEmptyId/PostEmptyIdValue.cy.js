import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';
import login from '../../API/Login/login.cy';
import Books from '../../API/Books/books.cy';

let response;

Given('user is logged into the system', () => {
  login.loginAuth('user', 'password').then((res) => {
    response = res;
    expect(response.status).to.eq(200); 
  });
});


When('the user sends a POST request to create a new book with the following details:', (dataTable) => {
  const book = dataTable.hashes()[0]; 
  Books.addBook(book).then((res) => {
    response = res;
  });
  console.log("www",response)
});

Then('the response status should be {int}', (statusCode) => {
  console.log("sss",statusCode)
  expect(response.status).to.eq(statusCode);
});

