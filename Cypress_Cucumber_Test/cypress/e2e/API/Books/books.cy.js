const baseUrl = Cypress.config('baseUrlAPI');

class Books {
  visitBooksPage() {
    cy.url().should('eq', `${baseUrl}books`);
  }

  getAllBooks() {
    return cy.request('GET', baseUrl + '/api/books');
  }

  getBookById(bookId) {
    return cy.request({
        method: 'GET',
        url: baseUrl + '/api/books/' + bookId,
        failOnStatusCode: false,
    });
  }

  deleteBook(bookId) {
    return cy.request({
        method: 'DELETE',
        url: baseUrl + '/api/books/' + bookId,
        failOnStatusCode: false,
    });
  }

  addBook(bookData,auth) {
    console.log("book dataaa",bookData)
    return cy.request({
      method: 'POST',
      url: `${baseUrl}/api/books`, 
      body: bookData, 
      headers: auth,
      failOnStatusCode: false, 
    });
  }
  updateBook(bookData,auth) {
    return cy.request({
      method: "PUT",
    url: `${baseUrl}/api/books/${bookData.id}`,
    headers: auth,
    failOnStatusCode: false,
    body: {
      id: parseInt(bookData.id),
      title: bookData.title,
      author: bookData.author,
    },
    });
  }
}

const books = new Books();
export default books;
