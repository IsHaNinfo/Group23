Feature: API Testing to Delete Books Data

  Background:
    Given user is logged into the service

  Scenario: Successfully delete a book by ID
    Given the following book exists:
      | id    | title        | author    |
      | 2     | "Book 3"     | "Author"  |
    When user sends a DELETE request for the book with ID 2
    Then the delete response status should be 200
    And the response should confirm deletion with message "Successfully deleted the book"

  Scenario: Attempt to delete a book with an invalid ID
    When user sends a DELETE request for the book with ID 9999
    Then the delete response status should be 404
    And the response should contain the error message "Book not found"

  Scenario: Attempt to delete a book without proper authorization
    Given user is authenticated as "user"
    When user sends a DELETE request for the book with ID 2
    Then the delete response status should be 403
    And the response should contain the error message "User is not permitted."
