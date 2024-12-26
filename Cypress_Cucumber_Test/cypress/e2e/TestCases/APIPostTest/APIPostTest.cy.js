import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import login from "../../API/Login/login.cy";
import Books from '../../API/Books/books.cy';

let response;

Given('user is logged into the service',() => {
  login.loginUser('user','password').then((res) => {
    response = res;
  });

})

Given('user sends a POST request to add the following book:', (dataTable) => {
  const books = dataTable.hashes().map((row) => ({
    id: row.id ? parseInt(row.id) : undefined, // Convert id to an integer if provided
    title: row.title.replace(/"/g, ''), // Remove quotes from the title
    author: row.author.replace(/"/g, ''), // Remove quotes from the author
  }));
  
   Books.addBook(books[0]).then((res) => {
    response = res;
  });
  });

Then('the insert response status should be {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

And('the response should contain the book data with title {string} and author {string}', (expectedTitle, expectedAuthor) => {
  expect(response.body).to.have.property('title', expectedTitle);
  expect(response.body).to.have.property('author', expectedAuthor);
});
