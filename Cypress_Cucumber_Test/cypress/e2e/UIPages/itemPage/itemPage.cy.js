import pageElementLocators from "../PageElements/PageElements.json"

class ItemPage {
    displayItemName(){
        cy.get(pageElementLocators.itemPage.itemName).should('be.visible');
      }
}
const item = new ItemPage();
export default item;
