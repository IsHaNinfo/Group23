const baseUrl = Cypress.config('baseUrlAPI');

class Books {
  visitBooksPage() {
    cy.url().should('eq', `${baseUrl}books`);
  }
  getBooks() {
    return cy.request('GET', `${baseUrl}/api/books`);
  }

  deleteBook(bookId, token) {
    return cy.request({
      method: 'DELETE',
      url: `${baseUrl}/api/books/${bookId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      failOnStatusCode: false,  
    });
  
}
  
  addBook(bookData) {
    return cy.request({
      method: 'POST',
      url: `${baseUrl}/api/books`, 
      body: bookData, 
      headers: {
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false, 
    });
  }


}

const books = new Books();
export default books;
