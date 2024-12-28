const pageElementLocators = require("../pageElements/PageElements.json");

class ItemPage {
    displayItemName(){
        cy.get(pageElementLocators.itemPage.itemName).should('be.visible');
      }
    displayItemImage(){
      cy.get(pageElementLocators.itemPage.itemImage).should('be.visible');
    }
}
const item = new ItemPage();
export default item;
