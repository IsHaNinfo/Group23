Feature: API Testing to Retrieve All Books

  Scenario: Retrieve a list of books as a user
    Given a "user" is logged into the service
    When "user" sends a GET request to retrieve all books
    Then the response status should be 200
    And the response should contain a list of books

  Scenario: Retrieve a list of books as an admin
    Given a "admin" is logged into the service
    When "admin" sends a GET request to retrieve all books
    Then the response status should be 200
    And the response should contain a list of books

