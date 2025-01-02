Feature: API Testing to Insert Empty Id Value with Books Data

  Background:
    Given user is logged into the service

  Scenario: Insert Empty value for id
     Given user sends a POST request to add the following book:
      | id | title | author |
      |   |  "NewBook"     | "author" |
    Then the insert response status should be 201 