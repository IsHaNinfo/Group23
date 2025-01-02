Feature: SauceDemo Product Image Navigation Feature

  Scenario: Verify that clicking on a product image navigates to the item detail page
    Given Visit sourceDemo Website
    When User provides username
    And User provides password
    Then Click on Login button to log in to the SauceDemo Website
    And Verify that the user is redirected to the inventory page
    When User clicks on the image of the first inventory item
    Then User should be redirected to the item detail page
    And The item details page should display the item image
