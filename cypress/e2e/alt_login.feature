Feature: User Login

    Scenario: Successful Login
        Given The user is on the alt login page
        When They enter valid credentials on alt
        Then They should be redirected to the user dashboard on alt
