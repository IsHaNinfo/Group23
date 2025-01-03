Feature: sourceDemo Checkout Cancel Button

    This feature ensures that the cancel button on the Payment Information page navigates the user back to the inventory dashboard.

    Scenario: User cancels checkout and is redirected to the inventory dashboard
    Given Visit sourceDemo Website
    When User provide username
    And User provide password
    Then Click on Login button to log in into the sourceDemo Website
    And Verify that the user is redirected to the inventory page
    And User adds the first item to the cart
    And User clicks on the cart icon
    Then Verify that the cart page is displayed
    And Verify that item is displayed in the cart
    When The user clicks the "Checkout" button
    Then Verifies that the user is navigated to the userInformation page
    When User provides firstName
    And User provides lastName
    And User provides postalCode
    And The user clicks the "Continue" button
    Then Verifies that the user is navigated to the Payment Information page
    When The user clicks the "Cancel" button
    Then Verifies that the user is navigated back to the inventory dashboard
