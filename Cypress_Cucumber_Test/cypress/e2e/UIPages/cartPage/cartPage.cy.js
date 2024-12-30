import urls from "../../../support/urls.js";
const pageElementLocators = require("../pageElements/PageElements.json");

class Cart {
  verifyCartPage() {
    cy.url().should("include", urls.cart);
    return this;
  }

  verifyAddedItemInCart() {
    cy.get(pageElementLocators.cartPage.cartItem).should("have.length", 1);
    return this;
  }
  removeItemFromCart() {
    cy.get(pageElementLocators.cartPage.cartItem)
      .first()
      .within(() => {
        cy.get(pageElementLocators.cartPage.removeBtnInCart).click();
      });
    return this;
  }

  verifyCartIsEmpty() {
    cy.get(pageElementLocators.cartPage.cartItem).should("not.exist");
    return this;
  }

  ClickCheckoutButton() {
    cy.get(pageElementLocators.cartPage.checkoutButton).click();
    return;
  }

  verifyContinueShoppingIcon() {
    cy.get(pageElementLocators.cartPage.continueShoppingButton)
      .and("contain", "Continue Shopping");
    return this;
  }
  clickContinueShoppingIcon() {
    cy.get(pageElementLocators.cartPage.continueShoppingButton).click();
    return this;
  }

  clickItemNameInCart() {
    cy.get(pageElementLocators.CartPageLocators.cartItemName).click();
  }

}

const cart = new Cart();
export default cart;
