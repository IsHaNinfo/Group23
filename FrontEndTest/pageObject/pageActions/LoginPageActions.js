const loginElementLocators = require("../pageElements/LoginPageElements.json");

export class loginPageElements {
  uname(usernamee) {
    cy.get(loginElementLocators.LoginPageLocators.username_text)
      .clear()
      .type(usernamee);
    return;
  }

  pass(passwordd) {
    cy.get(loginElementLocators.LoginPageLocators.password_text)
      .clear()
      .type(passwordd);
    return;
  }

  LoginButton() {
    cy.get(loginElementLocators.LoginPageLocators.login_button).click();
    return;
  }
}
