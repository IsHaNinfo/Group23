import  login  from "../../UIPages/LoginPage/LoginPage.cy.js";
import  inventory  from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import  item  from "../../UIPages/itemPage/itemPage.cy.js";

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json"
import urls from "../../../support/urls.js";

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
//bug click the image not name
When('User click on the first inventory item', () => {
    inventory.clickFirstInventoryItem();
  });

  Then('User should be redirected to the item detail page', () => {
    inventory.navigateInventoryItemPage()
  });

  And('the item details page should display the item name', () => {
    item.displayItemName()
});