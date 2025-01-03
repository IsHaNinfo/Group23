Feature: sourceDemo Filter Functionality

    The filter feature allows users to sort items on the inventory page by name and price.

    Background:
        Given Visit sourceDemo Website
        When User provide username
        And User provide password
        Then Click on Login button to log in into the sourceDemo Website
        And Verify that the user is redirected to the inventory page

    Scenario: A009-Verify filtering by Name (A to Z)
        When User selects the filter option "Name (A to Z)"
        Then The items should be displayed in ascending order by name

    Scenario: Verify filtering by Name (Z to A)
        When User selects the filter option "Name (Z to A)"
        Then The items should be displayed in descending order by name

    Scenario: Verify filtering by Price (Low to High)
        When User selects the filter option "Price (low to high)"
        Then The items should be displayed in ascending order by price

    Scenario: Verify filtering by Price (High to Low)
        When User selects the filter option "Price (high to low)"
        Then The items should be displayed in descending order by price