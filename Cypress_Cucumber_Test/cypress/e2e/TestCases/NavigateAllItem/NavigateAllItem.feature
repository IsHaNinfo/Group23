Feature: sourceDemo AllItem Navigation Feature

  Scenario: User should be able to log in using valid credentials, add an item to the cart, navigate cart page and navigate back to AllItem page
    Given Visit sourceDemo Website
    When User is logged in and on the inventory page
    And User adds the first item to the cart
    And User clicks on the cart icon
    Then Verify that the cart page is displayed
    When User clicks the menu icon
    And User clicks on All Items in the navbar
    Then Verify that the user is navigated to the inventory page

