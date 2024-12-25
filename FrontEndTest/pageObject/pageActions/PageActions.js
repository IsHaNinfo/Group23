import urls from "../../cypress/support/urls";

const pageElementLocators = require("../pageElements/PageElements.json");

export class PageElements {
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

  verifyInventoryPage() {
    cy.url().should("include", urls.inventory);
    return this;
  }

  addFirstItemToCart() {
    cy.get(pageElementLocators.InventoryPageLocators.firstInventoryItem)
      .within(() => {
        cy.get(pageElementLocators.InventoryPageLocators.addToCartButton).click();
      });
    return this;
  }

  clickCartIcon() {
    cy.get(pageElementLocators.InventoryPageLocators.cartIcon).click();
    return this;
  }

  verifyCartPage() {
    cy.url().should("include", urls.cart);
    return this;
  }

  verifyAddedItemInCart() {
    cy.get(pageElementLocators.cartPage.cartItem).should("have.length", 1);
    return this;
  }

  verifyAddToCartButtonChanged() {
    cy.get(pageElementLocators.InventoryPageLocators.firstInventoryItem)
      .within(() => {
        cy.get(pageElementLocators.InventoryPageLocators.removeButton)
          .should("contain", "Remove");
      });
    return this;
  }

  verifyCartIconCount( ) {
    cy.get(pageElementLocators.InventoryPageLocators.cartIcon);
    return this;
  }

  removeFirstItemFromCart() {
    cy.get(pageElementLocators.InventoryPageLocators.firstInventoryItem)
      .within(() => {
        cy.get(pageElementLocators.InventoryPageLocators.removeButton)
          .contains('Remove')
          .click();
      });
    return this;
  }

  verifyRemoveButtonChanged() {
    cy.get(pageElementLocators.InventoryPageLocators.firstInventoryItem)
      .within(() => {
        cy.get(pageElementLocators.InventoryPageLocators.addToCartButton)
          .should("contain", "Add to cart");
      });
    return this;
  }

  verifyCartIconNoCount() {
    cy.get(pageElementLocators.InventoryPageLocators.cartIcon)
      .should("not.contain", /\d+/);
    return this;
  }

  clickFirstInventoryItem() {
    cy.get(pageElementLocators.InventoryPageLocators.firstInventoryItem)
      .first()
      .within(() => {
        cy.get(pageElementLocators.InventoryPageLocators.itemTitleLink).click();
      });
    return this;
  }

  navigateInventoryItemPage() {
    cy.url().should("include", urls.inventory_item);
    return this;
  }

  displayItemName(){
    cy.get(pageElementLocators.itemPage.itemName).should('be.visible');
  }
}
