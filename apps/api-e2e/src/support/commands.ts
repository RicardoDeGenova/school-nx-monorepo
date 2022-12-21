// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(expectedStatus: number, email?: string, password?: string): void;
  }
}

Cypress.Commands.add('login', (expectedStatus: 201, email = "ricgnv@gmail.com", password = "123123"): void => {
  cy.api({
    method: 'post',
    url: '/api/auth/login',
    body: { email, password },
    failOnStatusCode: false
  }).then(response => localStorage.setItem('authToken', response.body.access_token))
  .then(response => expect(response.status).to.equal(expectedStatus));
});