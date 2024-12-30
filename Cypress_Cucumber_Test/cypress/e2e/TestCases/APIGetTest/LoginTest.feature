Feature: API Testing for Login

  Scenario: Login with user credentials
    Given I send a GET request to login with username "user" and password "password"
    Then the response status should be 200

  Scenario: Login with admin credentials
    Given I send a GET request to login with username "admin" and password "password"
    Then the response status should be 200

  Scenario: Login with invalid credentials
    Given I send a GET request to login with username "invalid_user" and password "invalid_pass"
    Then the response status should be 401
