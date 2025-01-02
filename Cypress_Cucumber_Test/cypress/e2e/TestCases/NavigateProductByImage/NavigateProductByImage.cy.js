import  login  from "../../UIPages/LoginPage/LoginPage.cy.js";
import  inventory  from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import  item  from "../../UIPages/itemPage/itemPage.cy.js";

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json"
import urls from "../../../support/urls.js";

Given("Visit sourceDemo Website", function () {
    login.visitMainPage()
});

When("User provides username", function () {
    login.uname(user.username);
});

When("User provides password", function () {
    login.pass(user.password);
});

Then("Click on Login button to log in to the SauceDemo Website", function () {
    login.LoginButton("");
});
And("Verify that the user is redirected to the inventory page", function () {
    inventory.verifyInventoryPage();
});
//bug click the image not name
When('User clicks on the image of the first inventory item', () => {
    inventory.clickFirstInventoryItemImage();
  });

  Then('User should be redirected to the item detail page', () => {
    inventory.navigateInventoryItemPage()
  });

  And('The item details page should display the item image', () => {
    item.displayItemImage()
});