describe('user.controller.ts', () => {
    let token = '';
    describe('api/login', () => {
        it('successfully logs in', () => {
            cy.login(201);
        });        
    }).afterAll(() => token = localStorage.getItem('authToken'));

    describe('api/users', () => {
        it('successfully gets users', () => {
            cy.api({
                method: 'get',
                url: '/api/users',
                headers: { Authorization: 'Bearer ' + token },
                failOnStatusCode: false
            }).then( (response) => expect(response.status).to.equal(200));
        });
    });
});