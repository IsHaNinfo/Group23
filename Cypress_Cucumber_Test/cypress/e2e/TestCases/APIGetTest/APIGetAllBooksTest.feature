Feature: API Testing to Retrieve All Books

  Scenario: A033-Retrieve a list of books as a user
    Given a "user" is logged into the service
    When the "user" sends a POST request to create a new book with the following details:
      | id | title       | author       |
      | 1  | New Title | New Author |
    When "user" sends a GET request to retrieve all books
    Then the GET response status code should be 200
    And the response should contain a list of books

  Scenario: A034-Retrieve a list of books as an admin
    Given a "admin" is logged into the service
    When the "admin" sends a POST request to create a new book with the following details:
      | id | title       | author       |
      | 1  | New Title | New Author |
    When "admin" sends a GET request to retrieve all books
    Then the GET response status code should be 200
    And the response should contain a list of books