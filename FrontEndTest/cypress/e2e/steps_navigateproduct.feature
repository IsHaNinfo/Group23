Feature: sourceDemo Product Navigation Feature


    Scenario: Verify that clicking on an item navigates to the item detail page
    Given Visit sourceDemo Website
    When User provide username
    When User provide password
    Then Click on Login button to log in into the sourceDemo Website
    And Verify that the user is redirected to the inventory page
    When User click on the first inventory item
    Then User should be redirected to the item detail page
    And the item details page should display the item name