describe('auth.controller.ts', () => {
    describe('api/login', () => {
        it('does not successfully logs in', () => {
            cy.loginByApi("123123", "123123")
            .then(response => {expect(response.status).to.eq(401)});
        });

        it('successfully logs in', () => {
            cy.loginByApi()
            .then(response => {expect(response.status).to.eq(201)});
        });
    });
});