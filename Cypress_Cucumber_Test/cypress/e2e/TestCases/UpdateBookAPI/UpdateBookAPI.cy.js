import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';
import login from '../../API/Login/login.cy';
import Books from '../../API/Books/books.cy';


let response;
let auth = {};

Given('user is authenticated as {string}',(role) => {
  login.loginAuth(role, "password", { timeout: 10000 }).then((res) => {
    response = res;
    expect(response.status).to.eq(200); 
    auth = {
      Authorization: `Basic ${btoa(username + ":" + password)}`,
      "Content-Type": "application/json",
    };
  });
});

Given('user is not authenticated as "user"', () => {
  auth = {}; 
});

Given('user post book details with ID {int}', (id) => {
    const bookData = { id, title: "Sample Book", author: "Sample Author" }
    console.log(bookData);
    Books.addBook(bookData,auth ).then((res) => {
      response = res; // Assign the response to the global variable
    });
  });


  When('the user sends update to following details:', (dataTable) => {
  const bookData = dataTable.hashes()[0];
  Books.updateBook(bookData,auth).then((res) => {
    response = res; 
  });
  console.log(response);
});

Then('the response status should be {int} status', (statusCode) => {
    expect(response.status).to.eq(statusCode);  
    console.log("aaa",response.body);
    });

And('the responses should contain the updated title and author', (dataTable) => {
    const expectedData = dataTable.hashes()[0];
    expect(response.body.title).to.eq(expectedData.title);
    expect(response.body.author).to.eq(expectedData.author);
});

And('the response body show {string}', (message) => {
  expect(response.statusText).to.eq(message)||
  expect(response.body.message).to.eq(message);
});
