const pageElementLocators = require("../pageElements/PageElements.json");
import urls from "../../../support/urls.js";

class UserInfoPage {


navigateUserInformationPage() {
    cy.url().should("include", urls.userInfo);
    return this;
  }

  firstName(firstName) {
    cy.get(pageElementLocators.userInformationPage.firstName)
      .clear()
      .type(firstName);
    return;
  }

  lastName(lastName) {
    cy.get(pageElementLocators.userInformationPage.lastName)
      .clear()
      .type(lastName);
    return;
  }
  postalCode(postalCode) {
    cy.get(pageElementLocators.userInformationPage.postalCode)
      .clear()
      .type(postalCode);
    return;
  }

  ClickContinueButton() {
    cy.get(pageElementLocators.userInformationPage.continueButton).click();
    return;
  }

  ClickCancelButton() {
    cy.get(pageElementLocators.userInformationPage.cancelButton).click(); 
    return this;
  }

  navigateToCartPage() {
    cy.url().should("include", urls.cart); 
    return this;
  }
}




const userinfo = new UserInfoPage();
export default userinfo;