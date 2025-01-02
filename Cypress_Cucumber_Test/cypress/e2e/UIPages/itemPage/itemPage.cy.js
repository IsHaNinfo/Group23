const pageElementLocators = require("../pageElements/PageElements.json");

class ItemPage {
    displayItemName(){
        cy.get(pageElementLocators.itemPage.itemName).should('be.visible');
      }
    addItemToCart(){
      cy.get(pageElementLocators.itemPage.addToCartButton).click();
    }
    removeItemFromCart(){   
      cy.get(pageElementLocators.itemPage.removeButton).click();
    }
    displayAddToCartButton(){
      cy.get(pageElementLocators.itemPage.addToCartButton).should('be.visible');
    }

}
const item = new ItemPage();
export default item;
