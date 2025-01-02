const baseUrl = Cypress.config('baseUrlAPI');

class Login {
  /**
   * Login using a POST request with Basic Authentication headers
   * @param {string} username - The username for login
   * @param {string} password - The password for login
   * @returns {Cypress.Chainable} - The response of the POST request
   */
  loginAuth(username, password) {
    const authHeader = `Basic ${btoa(username + ':' + password)}`; // Create Basic Auth header

    return cy.request({
      method: 'OPTIONS', // Adjust this method based on your API
      url: `${baseUrl}`, // Adjust the URL if necessary
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false, // Continue even if the status code is not 2xx
    });
  }
}

export default new Login();
