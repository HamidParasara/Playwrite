Feature: Login

  @Login
  Scenario: Login with Invalid credential
    Given I am on the login page
    When I enter my credentials
    And I click on the login button
    Then The warning message

  @Login
  Scenario: Check Forgot Password
    Given I am on the login page
    When I click Forgot password
    Then I validate forgot password Page open

@Login
  Scenario: Check Sign Up Page
    Given I am on the login page
    When I click Sign Up
    Then I validate Sign Up Page open