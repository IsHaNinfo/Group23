Feature: API Testing to Retrieve Book Details

  Background:
    Given admin is logged into the service

  Scenario: Successfully retrieve a book by valid ID
    When admin sends a GET request to retrieve a book with ID 1
    Then the response status should 200
    And the response should contain the book data with ID 1

  Scenario: Attempt to retrieve a book with an invalid ID
    When admin sends a GET request to retrieve a book with ID 9999
    Then the response status should 404
    And the response should contain the error message "Book not found"
