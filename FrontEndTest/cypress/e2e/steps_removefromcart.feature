Feature: sourceDemo RemoveCart Feature

    Scenario: Verify Add to Cart and Remove functionality directly from the dashboard
    Given Visit sourceDemo Website
    When User provide username
    When User provide password
    Then Click on Login button to log in into the sourceDemo Website
    And Verify that the user is redirected to the inventory page
    When User adds the first item to the cart
    Then the "Add to cart" button should change to "Remove"
    And  the cart icon should display an item count 
    When User click the "Remove" button for the first inventory item
    Then the "Remove" button should change back to "Add to cart"
    And  the cart icon should no longer display an item count