Feature: API Testing for Login User

  Scenario: Valid login with user credentials
    Given I have valid user credentials "user" and "password"
    When I send a POST request to the login endpoint
    Then I should receive a response with status code 200

  Scenario: Invalid login with admin credentials
    Given I have invalid admin credentials "admin" and "password"
    When I send a POST request to the login endpoint
    Then I should receive a response with status code 404
