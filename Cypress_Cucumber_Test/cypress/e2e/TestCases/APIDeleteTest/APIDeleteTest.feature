Feature: API Testing to Delete Books Data

  Background:
    Given user is logged into the service

  Scenario: A042-Successfully delete a book by ID
    Given user is authenticated as "admin"
    When the user sends a POST request to create a new book with the following details:
      | id | title       | author       |
      | 8  | Admin Title | Admin Author |
    When user sends a DELETE request for the book with ID 8
    Then the delete response status should be 200
    And the response should confirm deletion with message "Successfully deleted the book"

  Scenario: A043-Attempt to delete a book with a non-existence ID
    Given user is authenticated as "admin"
    When user sends a DELETE request for the book with ID 9999
    Then the delete response status should be 404
    And the response should contain a error message "Book not found"

  Scenario: A044-Attempt to delete a book without proper authorization
    Given user is authenticated as "user"
    When the user sends a POST request to create a new book with the following details:
      | id | title       | author       |
      | 9  | Admin Title | Admin Author |
    When user sends a DELETE request for the book with ID 9
    Then the delete response status should be 403
    And the response should contain a error message "User is not permitted."
