Feature: API Testing to Insert Books Data

  Background:
    Given user is logged into the service

  Scenario: Insert new book using POST request
    Given user sends a POST request to add the following book:
      | id    | title             | author          |
      | 1     | "Sample Book"       | "Anuja"  |
    Then the insert response status should be 201
    And the response should contain the book data with title "Sample Book" and author "Anuja"
