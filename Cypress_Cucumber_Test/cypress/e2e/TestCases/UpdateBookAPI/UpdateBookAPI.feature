Feature: API Testing to Update Books Data


  Scenario: A039-Successfully updating a book's title and author
    Given user is authenticated as "admin"
    When user post book details with ID 5
    When the user sends update to following details:
      | id | title       | author       |
      | 5  | New Title 1 | New Author 1 |
    Then the response status should be 200 status
    And the responses should contain the updated title and author
      | id | title       | author       |
      | 5  | New Title 1 | New Author 1 |

  Scenario: A040-User is not authenticated when updating a book
    Given user is not authenticated as "user"
    When user post book details with ID 6
    When the user sends update to following details:
      | id | title       | author       |
      | 6  | New Title6 | New Author6 |
    Then the response status should be 401 status
    And the response body show "Unauthorized"

  Scenario: A041-Updating book with missing values
    Given user is authenticated as "admin"
    When user post book details with ID 7
    When the user sends update to following details:
      | id | title | author |
      | 7  | title |        |
    Then the response status should be 400 status
    And the response body show "Mandatory parameters should not be null"

