Feature: API Testing to Insert Books Data

  Scenario: Admin successfully adds a new book
    Given user is authenticated as "admin"
    When the user sends a POST request to create a new book with the following details:
      | id | title       | author       |
      | 1  | Admin Title | Admin Author |
    Then the response status should be 201
    And the responses should contain the inserted title and author
      | id | title       | author       |
      | 1  | Admin Title | Admin Author |


  Scenario: Adding book with missing data
    Given user is authenticated as "user"
    When the user sends a POST request to create a new book with the following details:
      | id | title | author  |
      | 2  |       | author2 |
    Then the response status should be 400
    And the responses should contain the inserted title and author
      | id | title | author  |
      | 2  |       | author2 |


