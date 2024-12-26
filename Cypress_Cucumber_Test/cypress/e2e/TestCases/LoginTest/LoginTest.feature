Feature: sourceDemo Login Feature

    Through this feature User should be able to login into sourceDemo Website

    Scenario: user should be able to login using Valid Credentials
    Given Visit sourceDemo Website
    When User provide username
    When User provide password
    Then Click on Login button to log in into the sourceDemo Website
