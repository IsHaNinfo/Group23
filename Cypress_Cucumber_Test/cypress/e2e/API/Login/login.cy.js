const baseUrl = Cypress.config('baseUrlAPI');

class Login {
    /**
     * Login using a POST request with authentication headers
     * @param {string} username - The username for login
     * @param {string} password - The password for login
     * @returns {Cypress.Chainable} - The response of the POST request
     */
    loginUser(username, password) {
      return cy.request({
        method: 'OPTIONS',
        url: baseUrl, // Replace with your actual login API endpoint
        auth: {
            username: username,
            password: password,
          }, 
        failOnStatusCode: false,       
      });
    }
  }
  
  export default new Login();
  