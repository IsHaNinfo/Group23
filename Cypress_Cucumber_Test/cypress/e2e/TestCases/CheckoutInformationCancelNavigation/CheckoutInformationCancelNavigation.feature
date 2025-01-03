Feature: sourceDemo Add to Cart Feature

    Through this feature User should be able to login into sourceDemo Website

    Scenario: A013-user should be able to login using Valid Credentials
        Given Visit sourceDemo Website
        When User provide username
        When User provide password
        Then Click on Login button to log in into the sourceDemo Website
        And Verify that the user is redirected to the inventory page
        When User adds the first item to the cart
        And User clicks on the cart icon
        Then Verify that the cart page is displayed
        And Verify that the added item is displayed in the cart
        When User clicks on the checkout button in the cart
        Then User should be navigated to the user details page
        When The user clicks the Cancel button
        Then Verify that the cart page is displayed