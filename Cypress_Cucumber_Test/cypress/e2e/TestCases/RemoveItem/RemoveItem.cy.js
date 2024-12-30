import  login  from "../../UIPages/LoginPage/LoginPage.cy.js";
import  inventory  from "../../UIPages/inventoryPage/InventoryPage.cy.js";

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json"


Given("Visit sourceDemo Website", function () {
    login.visitMainPage()
});
  
  When("User provide username", function () {
    login.uname(user.username);
  });
  
  When("User provide password", function () {
    login.pass(user.password);
  });
  
  Then("Click on Login button to log in into the sourceDemo Website", function () {
    login.LoginButton("");
  });
  And("Verify that the user is redirected to the inventory page", function () {
    inventory.verifyInventoryPage();
  });
  
  When("User adds the first item to the cart", function () {
    inventory.addFirstItemToCart();
  });
  
  Then('the "Add to cart" button should change to "Remove"', () => {
    inventory.verifyAddToCartButtonChanged();
    });
    //bug
    And('the cart icon should display an item count', () => {
        inventory.verifyCartIconCount();
    });
    
    When('User click the "Remove" button for the first inventory item', () => {
        inventory.removeFirstItemFromCart();
    });
    
    Then('the "Remove" button should change back to "Add to cart"', () => {
        inventory.verifyRemoveButtonChanged();
    });
    
    And('the cart icon should no longer display an item count', () => {
        inventory.verifyCartIconNoCount();
    });