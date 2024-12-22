Feature: Create Book API

  Background:
    Given I am authenticated as "admin"

  Scenario: Create a new book successfully
    When I create a new book with following details:
     | title     | new nea    |
     | author    | Test Author |
    Then the book should be created successfully
    Then I should see the new book in the list

