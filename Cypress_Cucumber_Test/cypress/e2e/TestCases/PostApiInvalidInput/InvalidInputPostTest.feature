Feature: API Testing to Insert Invalid Books Data

  Background:
    Given user is logged into the service

  Scenario: Insert Integer value for title when inserting new book using POST request
    When user sends a POST request to add the following book:
      | id | title | author |
      | 1  |   123    | "Nethmi" |
    Then the insert response status should be 400
    

  Scenario: Insert Integer value for author when inserting new book using POST request
     Given user sends a POST request to add the following book:
      | id | title | author |
      | 1  |  "Book Title"     | 123 |
    Then the insert response status should be 400

