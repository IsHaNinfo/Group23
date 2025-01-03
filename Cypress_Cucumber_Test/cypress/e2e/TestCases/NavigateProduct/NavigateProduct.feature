Feature: Navigates to the item details page

    Scenario: A004-User should log in to the system and Verify that when clicking on an item name it navigates to the item detail page
    Given Visit sourceDemo Website
    When User provide username
    When User provide password
    Then Click on Login button to log in into the sourceDemo Website
    And Verify that the user is redirected to the inventory page
    When User click on the first inventory item in the inventory page
    Then User should be redirected to the item detail page
    And item name should be displayed in the item details page