Feature: Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid username and password
    And clicks the login button
    Then the user should be redirected to the dashboard

  @smoke
  Scenario: Unsuccessful login with invalid credentials
    Given the user is on the login page
    When the user enters invalid username or password
    And clicks the login button
    Then an error message should be displayed indicating invalid credentials

  Scenario Outline: Verify login with multiple users
    Given the user is on the login page
    When User enters "<username>" and "<password>"
    Then the user should be redirected to the dashboard

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |

  @smoke
  Scenario Outline: Verify login with multiple users with invalid Credentials
    Given the user is on the login page
    When User enters "<username>" and "<password>"
    Then an error message should be displayed indicating invalid credentials

    Examples:
      | username                | password |
      | standard_user           | sauce    |
      | problem_user            | sauce    |
      | performance_glitch_user | sauce    |
      | error_user              | sauce    |
      | visual_user             | sauce    |
