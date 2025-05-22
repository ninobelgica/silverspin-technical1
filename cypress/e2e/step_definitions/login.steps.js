import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

// Could put this in a separate js or json file for data retrieval
const creds = {
    email: "lourdes100@test.com",
    password: "Test123!",
    username: "lourdestest",
}

Given("The user is on the login page", () => {
    cy.visit('https://www.newspapers.com/')
    cy.get('.RightContainer>div').click()
    cy.screenshot('login-page')
})

When("They enter valid credentials", () => {
    cy.get('input[name="email"]').type(creds.email)
    cy.get('input[name="password"]').type(creds.password)
    cy.get('button[title="Sign in with Newspapers.com"]').invoke('removeAttr', 'disabled').click()
})

Then("They should be redirected to the user dashboard", () => {
    // Note: The website doesn't allow automation as it puts a captcha module before logging in. Need to use cy.intercept/API but risky on a public website
    cy.get('.MemberNavigation_InfoContainer__BKpZa').should('contain', creds.username)
    cy.screenshot('homepage-logged-in')
})