/// <reference types="cypress" />

declare namespace Cypress {
    import { User } from '@school-nx-monorepo/api-interfaces';
    interface Chainable {
        loginByApi(email?: string, password?: string): Chainable<Response>;

        getOneOrAllUsers(token?: string, userId?: string): Chainable<Response>;

        createUser(user: User, token?: string): Chainable<Response>;
        
        patchUser(userId: string, user: User, token?: string): Chainable<Response>;
    }
}


