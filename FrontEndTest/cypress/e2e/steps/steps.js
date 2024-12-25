import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Visit Login Page", () => {
  cy.visit('https://www.saucedemo.com/');
});

When("Click on Property", () => {
  cy.get('.todo-list li').should('have.length', 2);
  cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
});

Then("Outcome", () => {
  cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
})