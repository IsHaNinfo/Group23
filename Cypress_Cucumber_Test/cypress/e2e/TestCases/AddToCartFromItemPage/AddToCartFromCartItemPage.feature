Feature: Add item to cart on sourceDemo Website

  Scenario: Add item to cart and verify in cart page
    Given Visit sourceDemo Website
    When User provides username
    When User provides password
    Then Click on Login button to log in into the sourceDemo Website
    And Verify that the user is redirected to the inventory page
    When User clicks on the item name in the Inventory Page
    Then User should be navigated to the product details page
    And The product details page should display the item name
    When The user clicks Add to Cart button
    And User clicks on the cart icon
    Then Verify that the cart page is displayed
    And Verify that the added item is displayed in the cart
