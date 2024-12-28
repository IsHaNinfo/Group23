Feature: API Testing to Insert Books Data

  Background:
    Given user is logged into the service

Scenario: Successfully adding a new book
    Given the user sends a POST request to create a new book with the following details:
      | id  | title           | author            |
      | 10   | "Saswile Book"   | "Sssample Author" |
    Then the response status should be 201 Created
    And the response should contain the book data with title "Sawile Book" and author "Sssample Author"


