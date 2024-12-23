/// <reference types = "Cypress"/>

import { loginPageElements } from "../../../pageObject/pageActions/LoginPageActions.js";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const Login_Elements = new loginPageElements();

Given("Visit opencart Website", function () {
  cy.visit("https://demo.opencart.com/admin/index.php?route=common/login");
});

When("User provide username", function () {
  Login_Elements.uname("demo");
});

When("User provide password", function () {
  Login_Elements.pass("demo");
});

Then("Click on Login button to log in into the opencart Website", function () {
  Login_Elements.LoginButton("");
});
