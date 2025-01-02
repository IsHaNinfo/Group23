Feature: API Testing to Insert Empty Id Value with Books Data

  Background:
    Given user is logged into the service

  Scenario: Insert Empty value for id
    When the user sends a POST request to create a new book with empty id:
  | id | title   | author  |
  |    | "NewBook" | "Newauthor"  |
    Then the insert response status should be 201
