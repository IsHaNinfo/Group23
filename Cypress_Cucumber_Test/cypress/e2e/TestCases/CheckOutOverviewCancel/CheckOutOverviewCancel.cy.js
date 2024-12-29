import login from "../../UIPages/LoginPage/LoginPage.cy.js";
import inventory from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import cart from "../../UIPages/cartPage/cartPage.cy.js";
import userinfo from "../../UIPages/userInfoPage/userInfoPage.cy.js";
import paymentinfo from "../../UIPages/paymentPage/paymentPage.cy.js";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json";

Given("Visit sourceDemo Website", function () {
    login.visitMainPage();
});

When("User provide username", function () {
    login.uname(user.username);
});

When("User provide password", function () {
    login.pass(user.password);
});

Then("Click on Login button to log in into the sourceDemo Website", function () {
    login.LoginButton();
});

And("Verify that the user is redirected to the inventory page", function () {
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

And("Verify that item is displayed in the cart", () => {
    cart.verifyAddedItemInCart();
});

When('The user clicks the "Checkout" button', () => {
    cart.ClickCheckoutButton();
});

Then("Verifies that the user is navigated to the userInformation page", () => {
    userinfo.navigateUserInformationPage();
});

When("User provides firstName", () => {
    userinfo.firstName(user.firstName);
});

And("User provides lastName", () => {
    userinfo.lastName(user.lastName);
});

And("User provides postalCode", () => {
    userinfo.postalCode(user.postalCode);
});

And('The user clicks the "Continue" button', () => {
    userinfo.ClickContinueButton();
});

Then("Verifies that the user is navigated to the Payment Information page", () => {
    paymentinfo.navigatePaymentInformationPage();
});

When('The user clicks the "Cancel" button', () => {
    cart.clickCancelButton();
});

Then("Verifies that the user is navigated back to the inventory dashboard", () => {
    inventory.verifyNavigationToDashboard();
});