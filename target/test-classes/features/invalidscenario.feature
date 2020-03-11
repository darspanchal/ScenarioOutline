Feature: user should not be able to login successfully with invalid credential

  Background:
    Given user is on home page


  @orangelogin
  Scenario Outline: user should not be able to login successfully with invalid credential


    When user enter invalid "<username>" and password "<password>"
    And  user clicks on Login
    Then user should see "<ErrorMessage>"
    Examples:
      | username | password  | ErrorMessage             |
      | Admin    | admin1234 | Invalid credentials      |
      | admin    | admin1234 | Invalid credentials      |
      | Admin    | Admin1234 | Invalid credentials  1   |
      | admin    | Admin123  | Invalid credentials      |
      |          | admin123  | Username cannot be empty |
      | Admin    |           | Password cannot be empty |
      |          |           | Username cannot be empty |
      |          | Admin123  | Username cannot be empty |
      | admin    |           | Password cannot be empty |


