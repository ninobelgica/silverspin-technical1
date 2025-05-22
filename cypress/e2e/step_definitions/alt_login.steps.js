import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

// Could put this in a separate js or json file for data retrieval
const creds = {
    password: "secret_sauce",
    username: "standard_user",
    url: "/inventory.html",
    title: "Products"
}

Given("The user is on the alt login page", () => {
    cy.visit('https://www.saucedemo.com/')
    cy.screenshot('login-page-alt')
})

When("They enter valid credentials on alt", () => {
    cy.get('input[name="user-name"]').type(creds.username)
    cy.get('input[name="password"]').type(creds.password)
    cy.get('input#login-button').click()
})

Then("They should be redirected to the user dashboard on alt", () => {
    cy.url().should('contain', creds.url)
    cy.get('span.title').should('contain', creds.title)
    cy.screenshot('homepage-logged-in-alt')
})