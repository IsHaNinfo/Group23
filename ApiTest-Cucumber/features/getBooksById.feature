Feature: retrieve the details of a book by entering book id

    Background:
        Given I am authenticated as "admin"

    Scenario: Successfully retrieve book details by ID
        When I retrieve the book with ID 1
        Then the book details should be retrieved successfully
        And the book should have the title "new nea - 1"
        And the book should have the author "Test Author"

    Scenario: Attempt to retrieve book details with an invalid ID
        When I retrieve the book with ID 345322
        Then the book details should not be retrieved
        And I should see an error message "Book not found"
