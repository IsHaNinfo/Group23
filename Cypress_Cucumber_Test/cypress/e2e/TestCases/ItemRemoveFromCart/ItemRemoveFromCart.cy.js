import  login  from "../../UIPages/LoginPage/LoginPage.cy.js";
import  inventory  from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import  cart  from "../../UIPages/cartPage/cartPage.cy.js";

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json"

Given("Visit sourceDemo Website", function () {
    login.visitMainPage()
});

When("User is logged in and navigate the inventory page", function () {
    login.uname(user.username);
    login.pass(user.password);
    login.LoginButton("");
    inventory.verifyInventoryPage();
});


When("User adds the first item to the cart", function () {
    inventory.addFirstItemToCart();
});

And('User clicks on the add to cart icon in inventory page', () => {
    inventory.clickCartIcon();
  });
  //bug
  Then('Verify that the cart page is displayed', () => {
    cart.verifyCartPage();
  });
  
  And('Verify that selected item is displayed in the cart', () => {
    cart.verifyAddedItemInCart();
  });
  
  When('user clicks the Remove button on the item in the cart', () => {
    cart.removeItemFromCart();
  });
  
  And('Verify that the selected item is removed and no items are displayed in the cart', () => {
    cart.verifyCartIsEmpty();
  });