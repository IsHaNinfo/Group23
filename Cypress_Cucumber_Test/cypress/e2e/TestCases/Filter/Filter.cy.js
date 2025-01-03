import  login  from "../../UIPages/LoginPage/LoginPage.cy.js";
import  inventory  from "../../UIPages/inventoryPage/InventoryPage.cy.js";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json"

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

When("User selects the filter option {string}", (filterOption) => {
    inventory.selectFilterOption(filterOption);
});

Then("The items should be displayed in ascending order by name", () => {
    inventory.verifyAscendingOrderByName();
});

Then("The items should be displayed in descending order by name", () => {
    inventory.verifyDescendingOrderByName();
});

Then("The items should be displayed in ascending order by price", () => {
    inventory.verifyAscendingOrderByPrice();
});

Then("The items should be displayed in descending order by price", () => {
    inventory.verifyDescendingOrderByPrice();
});