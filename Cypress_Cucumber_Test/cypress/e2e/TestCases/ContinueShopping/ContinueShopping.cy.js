import  login  from "../../UIPages/LoginPage/LoginPage.cy.js";
import  inventory  from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import  cart  from "../../UIPages/cartPage/cartPage.cy.js";import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json"

Given("Visit sourceDemo Website", function () {
    login.visitMainPage()
});

When("User is logged in and navigate to the inventory page", function () {
    login.uname(user.username);
    login.pass(user.password);
    login.LoginButton("");
    inventory.verifyInventoryPage();
});


And("User adds the first item to the cart", function () {
    inventory.addFirstItemToCart();
});

And('User clicks on the cart icon in inventory page', () => {
    inventory.clickCartIcon();
  });
Then('Verify that the cart page is displayed', () => {
    cart.verifyCartPage();
  });
  
  And('Verify that item is displayed in the cart', () => {
    cart.verifyAddedItemInCart();
  });
  
  And('Verify the "Continue Shopping" icon in the cart page', () => {
    cart.verifyContinueShoppingIcon();
  });
  
  When('User clicks on the "Continue Shopping" icon', () => {
    cart.clickContinueShoppingIcon();
  });

  Then('Verify that it should navigate to the inventory page', () => {
    inventory.verifyNavigationToDashboard();
  });
