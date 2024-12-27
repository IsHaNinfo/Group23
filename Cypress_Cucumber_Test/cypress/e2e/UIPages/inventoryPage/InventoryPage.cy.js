import urls from "../../../support/urls.js";
const pageElementLocators = require("../pageElements/PageElements.json");

class Inventory {
    
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

  verifyNavigationToDashboard() {
    cy.url().should("include", urls.inventory);
    return this;
  }
}


const inventory = new Inventory();
export default inventory;
