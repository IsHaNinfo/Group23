import pageElementLocators from "../PageElements/PageElements.json"

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
