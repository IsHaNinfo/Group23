import pageElementLocators from "../PageElements/PageElements.json"
import urls from "../../../support/urls.js";

class LoginPage {
  uname(usernamee) {
    cy.get(pageElementLocators.LoginPageLocators.username_text)
      .clear()
      .type(usernamee);
    return;
  }

  pass(passwordd) {
    cy.get(pageElementLocators.LoginPageLocators.password_text)
      .clear()
      .type(passwordd);
    return;
  }

  LoginButton() {
    cy.get(pageElementLocators.LoginPageLocators.login_button).click();
    return;
  }

  visitMainPage() {
    cy.visit(urls.baseUrl);
    return this;
  }
}
const login = new LoginPage();
export default login;
