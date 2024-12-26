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
}

const cart = new Cart();
export default cart;
