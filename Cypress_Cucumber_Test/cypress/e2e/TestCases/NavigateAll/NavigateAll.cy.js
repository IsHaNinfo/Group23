import login from "../../UIPages/LoginPage/LoginPage.cy.js";
import inventory from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import cart from "../../UIPages/cartPage/cartPage.cy.js";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json";

Given("Visit sourceDemo Website", function () {
    login.visitMainPage();
});

When("User is logged in and on the inventory page", function () {
    login.uname(user.username);
    login.pass(user.password);
    login.LoginButton("");
    inventory.verifyInventoryPage();
});

And("User adds the first item to the cart", function () {
    inventory.addFirstItemToCart();
});

And("User clicks on the cart icon", () => {
    inventory.clickCartIcon();
});

Then("Verify that the cart page is displayed", () => {
    cart.verifyCartPage();
});


When("User clicks the menu icon", () => {
    inventory.clickMenuIcon();
});
 
When("User clicks on All Items in the navbar", () => {
    inventory.clickAllItemsLink();
});

Then("Verify that the user is navigated to the inventory page", () => {
    inventory.verifyInventoryPage();
});
