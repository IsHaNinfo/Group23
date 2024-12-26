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

When("User selects the filter option {string}", (filterOption) => {
    Page_Elements.selectFilterOption(filterOption);
});

Then("The items should be displayed in ascending order by name", () => {
    Page_Elements.verifyAscendingOrderByName();
});

Then("The items should be displayed in descending order by name", () => {
    Page_Elements.verifyDescendingOrderByName();
});

Then("The items should be displayed in ascending order by price", () => {
    Page_Elements.verifyAscendingOrderByPrice();
});

Then("The items should be displayed in descending order by price", () => {
    Page_Elements.verifyDescendingOrderByPrice();
});
