import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';
import login from '../../API/Login/login.cy';
import Books from '../../API/Books/books.cy';

let response;

Given('user is logged into the service', () => {
  login.loginAuth('user', 'password').then((res) => {
    response = res;
    expect(response.status).to.eq(200); 
  });
});
Given('the user sends a POST request to create a new book with the following details:', (dataTable) => {
  const book = dataTable.hashes()[0]; 
  const bookData = {
    id: book.id ? parseInt(book.id, 10) : undefined,  
    title: book.title.replace(/"/g, ''), 
    author: book.author.replace(/"/g, ''), 
  };

  Books.addBook(bookData).then((res) => {
    response = res;
  });
});

Then('the response status should be {int} Created', (statusCode) => {
  expect(response.status).to.eq(statusCode);  
});

And('the response should contain the book data with title {string} and author {string}', (expectedTitle, expectedAuthor) => {
  expect(response.body).to.have.property('title', expectedTitle);  
  expect(response.body).to.have.property('author', expectedAuthor);  
});
