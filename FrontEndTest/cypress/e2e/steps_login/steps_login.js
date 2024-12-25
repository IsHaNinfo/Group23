import { PageElements } from "../../../pageObject/pageActions/PageActions.js";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
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
