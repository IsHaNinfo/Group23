Feature: API Testing to Invalid Type Data

  Background:
    Given user is authenticated as "admin" with password "password"

Scenario: Adding book with invalid data 
  Given the user sends a POST request to create a new book with invalid data
  Then the response status should be 400 Bad Request
  And the response should contain an error message indicating that the `id`, `title`, and `author` are invalid
