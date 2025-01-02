import  login  from "../../UIPages/LoginPage/LoginPage.cy.js";
import  inventory  from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import  cart  from "../../UIPages/cartPage/cartPage.cy.js";

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json"

Given("Visit sourceDemo Website", function () {
    login.visitMainPage()
});

When("User is logged in and on the inventory page", function () {
    login.uname(user.username);
    login.pass(user.password);
    login.LoginButton("");
    login.verifyInventoryPage();
});


When("User adds the first item to the cart", function () {
    inventory.addFirstItemToCart();
});

And('User clicks on the cart icon', () => {
    inventory.clickCartIcon();
  });
  //bug
  Then('Verify that the cart page is displayed', () => {
    cart.verifyCartPage();
  });
  
  And('Verify that item is displayed in the cart', () => {
    cart.verifyAddedItemInCart();
  });
  
  When('User clicks on the remove button for item in the cart', () => {
    cart.removeItemFromCart();
  });
  
  And('Verify that the cart is updated and no items are displayed', () => {
    cart.verifyCartIsEmpty();
  });