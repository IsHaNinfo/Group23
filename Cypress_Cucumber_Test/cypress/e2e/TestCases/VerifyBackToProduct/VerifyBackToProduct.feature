Feature: sourceDemo Product Navigation Feature

    Scenario: A015-Verify the "Back to products" option on the item's new page
    Given Visit sourceDemo Website
    When User provide username
    When User provide password
    Then Click on Login button to log in into the sourceDemo Website
    And Verify that the user is redirected to the inventory page
    When User click on the first inventory item
    Then User should be redirected to the item detail page
    And Verify that the "Back to products" option is visible
    When User clicks on the "Back to products" option
    Then User should be navigated back to the dashboard
