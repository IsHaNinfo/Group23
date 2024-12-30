Feature: API Testing to Retrieve All Books

  Background:
    Given user is logged into the service

  Scenario: Retrieve all books using GET request
    When user sends a GET request to retrieve all books
    Then the response status should be 200
    And the response should contain a list of books
