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

And("Verify that item is displayed in the cart", () => {
    cart.verifyAddedItemInCart();
});

When('The user clicks the "Checkout" button', () => {
    cart.ClickCheckoutButton();
});

Then("Verifies that the user is navigated to the userInformation page", () => {
    userinfo.navigateUserInformationPage();
});

When("User provide firstName", () => {
    userinfo.firstName(user.firstName);
});

When("User provide lastName", () => {
    userinfo.lastName(user.lastName);
});

When("User provide postalCode", () => {
    userinfo.postalCode(user.postalCode);
});

And('The user clicks the "Continue" button', () => {
    userinfo.ClickContinueButton();
});

Then("Verifies that the user is navigated to the Payment Information page", () => {
    paymentinfo.navigatePaymentInformationPage();
});

When('User clicks the "Finish" button', () => {
    paymentinfo.clickFinishButton();
});

Then("Verify that user is navigated to the checkout complete page", () => {
    paymentinfo.verifyCheckoutCompletePage();
});

And('The user clicks the "BackHome" button', () => {
    paymentinfo.clickBackHomeButton();
});

Then("Verify that user is navigated to the inventory page", () => {
    inventory.verifyInventoryPage();
});
