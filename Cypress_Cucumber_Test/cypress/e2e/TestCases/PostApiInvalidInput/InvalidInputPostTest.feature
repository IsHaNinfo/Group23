Feature: API Testing to Insert Invalid Author Data

  Background:
    Given user is logged into the service    

  Scenario: Insert Integer value for author when inserting new book using POST request
     Given user sends a POST request to add the following book with invalid author:
      | id | title | author |
      | 10  |  Mother | 123 |
    Then the insert response status for Invalid Input test should be 400
