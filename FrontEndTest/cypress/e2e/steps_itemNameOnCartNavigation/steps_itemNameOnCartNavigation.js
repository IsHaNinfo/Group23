import { PageElements } from "../../../pageObject/pageActions/PageActions.js";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../fixtures/user.json";
import urls from "../../support/urls.js";
const Page_Elements = new PageElements();

Given("Visit sourceDemo Website", function () {
  cy.visit(urls.baseUrl);
});

When("User provide username", function () {
  Page_Elements.uname(user.username);
});

When("User provide password", function () {
  Page_Elements.pass(user.password);
});

Then("Click on Login button to log in into the sourceDemo Website", function () {
  Page_Elements.LoginButton("");
});

And("Verify that the user is redirected to the inventory page", function () {
  Page_Elements.verifyInventoryPage();
});

When("User adds the first item to the cart", function () {
  Page_Elements.addFirstItemToCart();
});

And("User clicks on the cart icon", function () {
  Page_Elements.clickCartIcon();
});

Then("Verify that the cart page is displayed", function () {
  Page_Elements.verifyCartPage();
});

And("Verify that the added item is displayed in the cart", function () {
  Page_Elements.verifyAddedItemInCart();
});

When("User clicks on the item name in the cart", function () {
  Page_Elements.clickItemNameInCart();
});

Then("User should be navigated to the product details page", function () {
  Page_Elements.verifyProductDetailsPage();
});

And("The product details page should display the item name", function () {
  Page_Elements.verifyProductNameOnDetailsPage();
});
