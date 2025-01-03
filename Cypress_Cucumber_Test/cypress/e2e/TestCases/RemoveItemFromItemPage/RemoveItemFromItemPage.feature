Feature: Remove item from cart on sourceDemo Website

  Scenario: A018-Add item to cart and then remove it to test if the button changes back to add to cart
    Given Visit sourceDemo Website
    When User provides username
    And User provides password
    Then Click on Login button to log in into the sourceDemo Website
    And Verify that the user is redirected to the inventory page
    When User clicks on the item name in the Inventory Page
    Then User should be navigated to the product details page
    And The product details page should display the item name
    When The user clicks Add to Cart button
    And User clicks on remove button
    Then the Remove button should change back to Add to cart

  Scenario: A019-Add item to cart and then remove it to test if the item is removed from cart
    Given Visit sourceDemo Website
    When User provides username
    And User provides password
    Then Click on Login button to log in into the sourceDemo Website
    And Verify that the user is redirected to the inventory page
    When User clicks on the item name in the Inventory Page
    Then User should be navigated to the product details page
    And The product details page should display the item name
    When The user clicks Add to Cart button
    And User clicks on remove button
    When User clicks on the cart icon
    Then The cart must be empty
