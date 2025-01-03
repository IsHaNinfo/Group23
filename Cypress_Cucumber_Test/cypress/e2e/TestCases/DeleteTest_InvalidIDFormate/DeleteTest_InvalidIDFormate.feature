Feature: API Testing to Delete Books Data

  Background:
    Given user is logged into the service

  Scenario: A045-Attempt to delete a book with an invalid ID format as admin
    Given user is authenticated as "admin"
    When user sends a DELETE request for the book with ID "abc"
    Then the Delete response status should be 400
    

  Scenario: A046-Attempt to delete a book with an invalid ID format as user
    Given user is authenticated as "user"
    When user sends a DELETE request for the book with ID "abc"
    Then the Delete response status should be 400



   
