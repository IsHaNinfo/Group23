Feature: API Testing to Retrieve Book Details

Scenario: Admin retrieves a book by ID
  Given a "admin" is logged into the service
  When the "user" sends a POST request to create a new book with the following details:
      | id | title       | author       |
      | 1  | New Title | New Author |
  When "admin" sends a GET request to retrieve a book with ID 1
  Then the GET response status should 200
  And the response should contain the book data with ID 1

Scenario: User retrieves a book by ID
  Given a "user" is logged into the service
  When the "user" sends a POST request to create a new book with the following details:
      | id | title       | author       |
      | 1  | New Title | New Author |
  When "user" sends a GET request to retrieve a book with ID 1
  Then the GET response status should 200
  And the response should contain the book data with ID 1

Scenario: Admin retrieves a non-existent book
  Given a "admin" is logged into the service
  When the "user" sends a POST request to create a new book with the following details:
      | id | title       | author       |
      | 1  | New Title | New Author |
  When "admin" sends a GET request to retrieve a book with ID 999
  Then the GET response status should 404
  And the response should contain the error message "Book not found"

Scenario: User retrieves a non-existent book
  Given a "user" is logged into the service
  When the "user" sends a POST request to create a new book with the following details:
      | id | title       | author       |
      | 1  | New Title | New Author |
  When "user" sends a GET request to retrieve a book with ID 999
  Then the GET response status should 404
  And the response should contain the error message "Book not found"