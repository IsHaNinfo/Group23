Feature: sourceDemo  Checkout Feature

    Through this feature, the user should be able to log in to the sourceDemo Website, add items to the cart, and proceed to checkout.

    Scenario: User cancels the checkout and is redirected back to the cart page
    
    Given Visit sourceDemo Website
    When User is logged in and on the inventory page
    And User adds the first item to the cart
    And User clicks on the cart icon
    Then Verify that the cart page is displayed
    And Verify that item is displayed in the cart
    When The user clicks the "Checkout" button
    Then verifies that the user is navigated to the userInformation page
    
    And  The user clicks the "Cancel" button 
    Then Verifies that the user is navigated to the your cart page
