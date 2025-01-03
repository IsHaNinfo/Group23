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

 Scenario: User successfully adds a new book
    Given user is authenticated as "user"
    When the user sends a POST request to create a new book with the following details:
      | id | title       | author       |
      | 2  | User Title | User Author |
    Then the response status should be 201
    And the responses should contain the inserted title and author
      | id | title       | author       |
      | 2  | User Title | User Author |

  Scenario: User Adding book with missing data
    Given user is authenticated as "user"
    When the user sends a POST request to create a new book with the following details:
      | id | title | author  |
      | 3  |       | author2 |
    Then the response status should be 400
    And the responses should contain the inserted title and author
      | id | title | author  |
      | 3  |       | author2 |

    Scenario: Admin Adding book with missing data
    Given user is authenticated as "admin"
    When the user sends a POST request to create a new book with the following details:
      | id | title | author  |
      | 4  |       | adminauthor2 |
    Then the response status should be 400
    And the responses should contain the inserted title and author
      | id | title | author  |
      | 4  |       | adminauthor2 |


