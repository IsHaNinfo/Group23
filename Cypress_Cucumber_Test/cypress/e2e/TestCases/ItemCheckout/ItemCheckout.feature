Feature: Checkout Feature in Cart

    Through this feature, the user should be able to log in to the sourceDemo Website, add items to the cart, and proceed to checkout.

    Scenario: User should be able to log in using valid credentials and add an item to the cart,and proceed to checkout
        Given Visit sourceDemo Website
        When User is logged in and navigate to the inventory page
        And User adds the first item to the cart
        And User clicks on the cart icon in the inventory page
        Then Verify that the cart page is displayed
        And Verify that item is displayed in the cart
        When The user clicks the "Checkout" button
        Then verify that the user is navigated to the Checkout user_Information page
        When User provide firstName
        When User provide lastName
        When User provide postalCode
        And  The user clicks the "Continue" button
        Then Verify that the user is navigated to the Payment Information page
