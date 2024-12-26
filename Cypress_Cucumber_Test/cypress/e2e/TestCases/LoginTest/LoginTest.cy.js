import login from "../../UIPages/LoginPage/LoginPage.cy.js";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import user from "../../../fixtures/user.json";

Given("Visit sourceDemo Website", function () {
  login.visitMainPage();
});

When("User provide username", function () {
  login.uname(user.username);
});

When("User provide password", function () {
  login.pass(user.password);
});

Then(
  "Click on Login button to log in into the sourceDemo Website",
  function () {
    login.LoginButton("");
  }
);
