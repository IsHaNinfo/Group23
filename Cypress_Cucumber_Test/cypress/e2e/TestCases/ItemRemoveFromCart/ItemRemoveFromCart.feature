Feature: sourceDemo Item Remove from Cart Feature

  Through this feature, users should be able to log in to the sourceDemo website, add items to the cart, view the cart, and remove items from the cart.

  Scenario: User should be able to add and remove a specific item from the cart
    Given Visit sourceDemo Website
    When User is logged in and on the inventory page
    When User adds the first item to the cart
    And User clicks on the cart icon
    Then Verify that the cart page is displayed
    And Verify that item is displayed in the cart
    When User clicks on the remove button for item in the cart
    And Verify that the cart is updated and no items are displayed
