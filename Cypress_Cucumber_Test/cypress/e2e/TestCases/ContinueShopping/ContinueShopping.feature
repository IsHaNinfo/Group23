Feature: sourceDemo Continue Shipping Feature

  Through this feature, the user should be able to log in to the sourceDemo Website, add items to the cart, navigate to continue shopping.

  Scenario: A007-User should be able to log in using valid credentials and add an item to the cart
    Given Visit sourceDemo Website
    When User is logged in and on the inventory page
    And User adds the first item to the cart
    And User clicks on the cart icon
    Then Verify that the cart page is displayed
    And Verify that item is displayed in the cart
    And Verify the "Continue Shopping" icon in the checkout page
    When User clicks on the "Continue Shopping" icon
    Then It should navigate the user back to the dashboard

