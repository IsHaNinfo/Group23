Feature: API Testing to Insert Empty Id Value with Books Data

  Background:
    Given user is logged into the service

  Scenario: A032-Insert Empty value for id
    When the user sends a POST request to create a new book with empty id:
  | id | title   | author  |
  |    | MadolDuuwa | M.Wickramasinghe  |
    Then the insert response status for Empty Id should be 201
