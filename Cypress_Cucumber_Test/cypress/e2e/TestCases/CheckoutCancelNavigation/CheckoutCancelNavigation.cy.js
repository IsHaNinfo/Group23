import  login  from "../../UIPages/LoginPage/LoginPage.cy.js";
import  inventory  from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import  cart  from "../../UIPages/cartPage/cartPage.cy.js";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json"
import userinfo from "../../UIPages/userInfoPage/userInfoPage.cy.js";

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

And("User clicks on the cart icon", function () {
    inventory.clickCartIcon();
});

Then("Verify that the cart page is displayed", function () {
    cart.verifyCartPage();
});

And("Verify that the added item is displayed in the cart", function () {
    cart.verifyAddedItemInCart();
});

When("User clicks on the checkout button in the cart", function () {
    cart.ClickCheckoutButton();
});

Then("User should be navigated to the user details page", function () {
    userinfo.navigateUserInformationPage();
});

When("The user clicks the Cancel button", function () {
    userinfo.ClickCancelButton();
  });

Then("Verify that the cart page is displayed", function () {
    cart.verifyCartPage();
});