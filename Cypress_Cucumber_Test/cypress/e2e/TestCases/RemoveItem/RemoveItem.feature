
    Feature: Remove option in the inventory page 
    Scenario: user should be able to login using Valid Credentials and click the add to cart option and remove option in the inventory page 
    Given Visit sourceDemo Website
    When User provide username
    When User provide password
    Then Click on Login button to log in to the sourceDemo Website
    And  Verify that the user is redirected to the inventory page
    When User click the "Add to cart" option in the inventory page for first item
    Then the "Add to cart" button should change to "Remove"
    And  the cart icon should display an item count 
    When User click the "Remove" button for the first inventory item in the inventory page
    Then the "Remove" button should change back to "Add to cart"
    And  the cart icon should no longer display an item count