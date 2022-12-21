describe('auth.controller.ts', () => {

    let token: string;
    describe('api/login', () => {
        it('successfully logs in', () => {
            cy.login();
            cy.get('[data-cy=status]').should('contain', 201).and('have.css', 'color', 'rgb(31, 169, 113)');
        })
    }).afterAll(() => {
        token = localStorage.getItem('authToken');
    });
});