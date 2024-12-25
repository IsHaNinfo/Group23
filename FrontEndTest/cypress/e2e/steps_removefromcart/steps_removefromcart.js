import { PageElements } from "../../../pageObject/pageActions/PageActions.js";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../fixtures/user.json"
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

Then('the "Add to cart" button should change to "Remove"', () => {
    Page_Elements.verifyAddToCartButtonChanged();
  });
  //bug
  And('the cart icon should display an item count', () => {
    Page_Elements.verifyCartIconCount();
  });
  
  When('User click the "Remove" button for the first inventory item', () => {
    Page_Elements.removeFirstItemFromCart();
  });
  
  Then('the "Remove" button should change back to "Add to cart"', () => {
    Page_Elements.verifyRemoveButtonChanged();
  });
  
  And('the cart icon should no longer display an item count', () => {
    Page_Elements.verifyCartIconNoCount();
  });