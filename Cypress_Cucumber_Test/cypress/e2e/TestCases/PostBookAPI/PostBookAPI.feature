Feature: API Testing to Insert Books Data

  Background:
    Given user is logged into the system

    Scenario: Successfully adding a new book
    When the user sends a POST request to create a new book with the following details:
      | id  | title    | author            |
      | 1   | New Title 1     | New Author 1|
    Then the response status should be 201 
    And the responses should contain the inserted title and author
      | id  | title          | author          |
      | 1   | New Title 1    | New Author 1    |

  Scenario: Adding book with missing data
  When the user sends a POST request to create a new book with the following details:
    | id  | title | author |
    | 2   |   | author2  |
  Then the response status should be 400
  And the responses should contain the inserted title and author
    | id | title | author |
    | 2  |       | author2  |
   Scenario: Adding book with invalid data
  When the user sends a POST request to create a new book with the following details:
    | id  | title | author |
    | abc | true  | false  |
  Then the response status should be 400
  And the responses should contain the inserted title and author
    | id  | title | author |
    | abc | true  | false  |

