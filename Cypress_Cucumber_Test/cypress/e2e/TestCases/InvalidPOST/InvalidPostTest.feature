Feature: API Testing to Insert Invalid Books Data

  Background:
    Given user is logged into the service

  Scenario: Insert empty title when inserting new book using POST request
    Given user sends a POST request to add the following book:
      | id | title | author |
      | 1  |       | "Nethmi" |
    Then the insert response status should be 400
    
    Scenario: Insert empty author when inserting new book using POST request
     Given user sends a POST request to add the following book:
      | id | title | author |
      | 1  |  "Book Title"     |  |
    Then the insert response status should be 400

    Scenario: Insert Integer value for author when inserting new book using POST request
     Given user sends a POST request to add the following book:
      | id | title | author |
      | 1  |  "Book Title"     | 123 |
    Then the insert response status should be 400