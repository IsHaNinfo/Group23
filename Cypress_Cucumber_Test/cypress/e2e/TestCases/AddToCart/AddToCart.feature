
Feature: Add to Cart Feature in inventory page

    Through this feature User should be able to add a item to the cart
    Scenario: user should be able to login using Valid Credentials and click on the add to cart option of the inventory page
    Given Visit sourceDemo Website
    When User provide username
    When User provide password
    Then Click on Login button to log in to the sourceDemo Website
    And Verify that the user is redirected to the inventory page
    When User clicks on the add to cart option in the inventory page first item
    And User clicks on the cart icon
    Then Verify that the cart page is displayed
    And Verify that the added item is displayed in the cart