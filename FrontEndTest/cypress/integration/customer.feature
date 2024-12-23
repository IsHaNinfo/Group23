Feature:Add a new customer

    Through this feature Admin should be able to login into opencart Website and enter the customer details

    Scenario: Add a new customer to the system
    Given I am logged into the OpenCart admin panel
    When I navigate to the Customers section
    And I click on the "Add New" button
    And I fill in the customer details
      | First Name | John    |
      | Last Name  | Doe     |
      | Email      | john.doe@example.com |
      | Telephone  | 123456789 |
    And I save the customer details
    Then I should see the new customer in the customer list