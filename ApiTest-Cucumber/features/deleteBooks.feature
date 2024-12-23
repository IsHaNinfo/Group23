Feature: Delete a Book

    Background: Given I am authenticated as "admin" for delete operation
    
    Scenario: Successfully delete a book by ID
        When I delete the book with ID 1
        Then the book should be deleted successfully
        And I should not see the book in the list

    Scenario: Attempt to delete a book with an invalid ID
        When I delete the book with ID 999999
        Then the book should not be deleted
        And I should see an error message "Book is not found"