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

When('User click on the first inventory item', () => {
    Page_Elements.clickFirstInventoryItem();
  });

  Then('User should be redirected to the item detail page', () => {
    Page_Elements.navigateInventoryItemPage()
  });

  And('the item details page should display the item name', () => {
    Page_Elements.displayItemName()
});