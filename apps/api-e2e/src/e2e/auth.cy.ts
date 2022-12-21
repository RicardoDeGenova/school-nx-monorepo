describe('auth.controller.ts', () => {
    describe('api/login', () => {
        it('does not successfully logs in', () => {
            cy.login(401, "123123", "123123");
        });

        it('successfully logs in', () => {
            cy.login(201);
        });
    });
});