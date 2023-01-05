
import { User } from '@school-nx-monorepo/api-interfaces';


Cypress.Commands.add('loginByApi', (email = "ricgnv@gmail.com", password = "123123") => {
  return cy.api({
    method: 'POST',
    url: '/api/auth/login',
    body: { email, password },
    failOnStatusCode: false
  });
});

Cypress.Commands.add('getOneOrAllUsers', (token = '', userId = '') => {
  if (userId !== '') userId = '/' + userId;

  return cy.api({
    method: 'GET',
    url: '/api/users' + userId,
    headers: { Authorization: 'Bearer ' + token },
    failOnStatusCode: false
  });
});

Cypress.Commands.add('createUser', (user: User, token?: string) => {
  return cy.api({
    method: 'POST',
    url: '/api/users',
    headers: { Authorization: 'Bearer ' + token },
    body: { user },
    failOnStatusCode: false
  });
});

Cypress.Commands.add('patchUser', (userId: string, user: User, token?: string) => {
  return cy.api({
    method: 'PATCH',
    url: '/api/users/' + userId,
    headers: { Authorization: 'Bearer ' + token },
    body: { user },
    failOnStatusCode: false
  });
});