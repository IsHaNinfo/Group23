Feature: Continue Shopping Feature in Cart

  Through this feature, the user should be able to log in to the sourceDemo Website, navigate to the cart page and click on the Continue shopping.

  Scenario: User should log in with valid credentials, adds an item to the cart, and uses the "Continue Shopping" feature in the cart.
    Given Visit sourceDemo Website
    When User is logged in and navigate to the inventory page
    And User adds the first item to the cart
    And User clicks on the cart icon in inventory page
    Then Verify that the cart page is displayed
    And Verify that item is displayed in the cart
    And Verify the "Continue Shopping" icon in the cart page
    When User clicks on the "Continue Shopping" icon
    Then Verify that it should navigate to the inventory page

