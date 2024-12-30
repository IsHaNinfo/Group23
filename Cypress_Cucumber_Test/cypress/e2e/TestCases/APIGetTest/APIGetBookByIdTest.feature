Feature: API Testing to Retrieve a Book by ID

  Background:
    Given admin is logged into the service

  Scenario: Retrieve a book using GET request by ID
    When admin sends a GET request to retrieve a book with ID 1
    Then the response status should 200
    And the response should contain the book data with ID 1
