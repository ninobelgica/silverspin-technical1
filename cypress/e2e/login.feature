Feature: User Login

    Scenario: Successful Login
        Given The user is on the login page
        When They enter valid credentials
        Then They should be redirected to the user dashboard
