Feature: Get All Book list

    Background:
        Given I am authenticated as "admin"

    Scenario: Successfully retrieve the list of books
        When I retrieve the list of books
        Then the list of books should be retrieved successfully
        And I should see the books in the list

