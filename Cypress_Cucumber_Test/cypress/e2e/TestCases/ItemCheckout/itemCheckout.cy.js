import  login  from "../../UIPages/LoginPage/LoginPage.cy.js";
import  inventory  from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import  cart  from "../../UIPages/cartPage/cartPage.cy.js";
import userinfo from "../../UIPages/userInfoPage/userInfoPage.cy.js";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json"
import paymentinfo from "../../UIPages/paymentPage/paymentPage.cy.js";

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

And('User clicks on the cart icon in the inventory page', () => {
    inventory.clickCartIcon();
  });
  //bug
  Then('Verify that the cart page is displayed', () => {
    cart.verifyCartPage();
  });
  
  And('Verify that item is displayed in the cart', () => {
    cart.verifyAddedItemInCart();
  });
  
  When('The user clicks the "Checkout" button', () => {
    cart.ClickCheckoutButton();
  });
  
  Then('verify that the user is navigated to the Checkout user_Information page', () => {
    userinfo.navigateUserInformationPage();
  });

  When('User provide firstName', () => {
    userinfo.firstName(user.firstName);
  });
  When('User provide lastName', () => {
    userinfo.lastName(user.lastName);
  });
  When('User provide postalCode', () => {
    userinfo.postalCode(user.postalCode);
  });
  And('The user clicks the "Continue" button', () => {
    userinfo.ClickContinueButton();
  });
  And('Verify that the user is navigated to the Payment Information page', () => {
    paymentinfo.navigatePaymentInformationPage();
  });