import login from "../../UIPages/LoginPage/LoginPage.cy.js";
import inventory from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import cart from "../../UIPages/cartPage/cartPage.cy.js";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json";
import item from "../../UIPages/itemPage/itemPage.cy.js";

Given("Visit sourceDemo Website", function () {
    login.visitMainPage();
});

When("User provides username", function () {
    login.uname(user.username);
});

And("User provides password", function () {
    login.pass(user.password);
});

Then("Click on Login button to log in into the sourceDemo Website", function () {
    login.LoginButton();
});

And("Verify that the user is redirected to the inventory page", function () {
    inventory.verifyInventoryPage();
});

When("User clicks on the item name in the Inventory Page", function () {
    inventory.clickFirstInventoryItem();
});

Then("User should be navigated to the product details page", function () {
    inventory.verifyProductDetailsPage();
});

And("The product details page should display the item name", function () {
    item.displayItemName();
});

When("The user clicks Add to Cart button", function () {
    item.addItemToCart();
});

And("User clicks on remove button", function () {
    item.removeItemFromCart();
});

Then("the Remove button should change back to Add to cart", function () {
    item.displayAddToCartButton();
});

When("User clicks on the cart icon", function () {
    inventory.clickCartIcon();
});

Then("The cart must be empty", function () {
    cart.verifyCartIsEmpty()
});

