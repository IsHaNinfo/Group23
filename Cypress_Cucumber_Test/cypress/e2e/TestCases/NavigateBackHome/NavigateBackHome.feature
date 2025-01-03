Feature: sourceDemo Checkout Feature 


    Scenario: A user logs in using valid credentials, adds an item to the cart, proceeds to checkout,
              completes the checkout process successfully, and then navigates back to the home page.
        Given Visit sourceDemo Website
        When User is logged in and on the inventory page
        And User adds the first item to the cart
        And User clicks on the cart icon
        Then Verify that the cart page is displayed
        And Verify that item is displayed in the cart
        When The user clicks the "Checkout" button
        Then verifies that the user is navigated to the userInformation page
        When User provide firstName
        And User provide lastName
        And User provide postalCode
        And The user clicks the "Continue" button
        Then Verifies that the user is navigated to the Payment Information page
        When User clicks the "Finish" button
        Then Verify that user is navigated to the checkout complete page
        And The user clicks the "BackHome" button
        Then Verify that user is navigated to the inventory page