Feature: Delete a book by entering book ID

  Background:
      Given I am authenticated as "admin"

  Scenario: Successfully delete a book by ID
      Given a book with ID 3 exists
      When I delete the book with ID 3
      Then the book should be deleted successfully

  Scenario: Attempt to delete a book with an invalid ID
      When I delete the book with ID 345322
      Then the book should not be deleted
      And I should see an error message "Book not found"

  Scenario: Attempt to delete a book without proper authorization
      Given I am authenticated as "user"
      When I delete the book with ID 3
      Then I should see an error message "User is not permitted."
