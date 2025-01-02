Feature: Selected Item Remove from Cart Feature in SourceDemo

  Through this feature, users should be able to log in to the sourceDemo website, and add items to the cart, view the cart, and remove selected item from the cart.

  Scenario: User should be able to add item and remove a selected item from the cart
    Given Visit sourceDemo Website
    When User is logged in and navigate the inventory page
    When User adds the first item to the cart
    And User clicks on the add to cart icon in inventory page
    Then Verify that the cart page is displayed
    And Verify that selected item is displayed in the cart
    When user clicks the Remove button on the item in the cart
    Then Verify that the selected item is removed and no items are displayed in the cart
