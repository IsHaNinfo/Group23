Feature: API Testing to Delete Books Data

  Background:
    Given user is logged into the service

  Scenario: Attempt to delete a book with an invalid ID format as admin
    Given user is authenticated as "admin"
    When user sends a DELETE request for the book with ID "abc"
    Then the delete response status should be 400
    And the response should contain an error message "Invalid ID format"

  Scenario: Attempt to delete a book with an invalid ID format as user
    Given user is authenticated as "user"
    When user sends a DELETE request for the book with ID "abc"
    Then the delete response status should be 400
    And the response should contain an error message "Invalid ID format"
