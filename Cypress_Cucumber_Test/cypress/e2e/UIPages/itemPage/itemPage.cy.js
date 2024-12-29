const pageElementLocators = require("../pageElements/PageElements.json");

class ItemPage {
    displayItemName(){
        cy.get(pageElementLocators.itemPage.itemName).should('be.visible');
      }
    displayItemImage(){
      cy.get(pageElementLocators.itemPage.itemImage).should('be.visible');
    }
    verifyBackToProductsOptionVisible() {
      cy.get(pageElementLocators.itemPage.backToProduct).should(
          "be.visible"
      );
  }

  clickBackToProductsOption() {
      cy.get(pageElementLocators.itemPage.backToProduct).click();
  }
}
const item = new ItemPage();
export default item;
