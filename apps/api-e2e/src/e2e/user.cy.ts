import { User } from "@school-nx-monorepo/api-interfaces";

describe('user.controller.ts', () => {
    const id = '63a1bc84cfd558b4e963a5d2';
    const email = 'ricgnv@gmail.com';
    const password = '123123';
    let token = '';

    const newUser: User = {
        _id: '',
        name: 'Test123',
        email: 'test123@test.com',
        password: '12345',
        teacher: undefined,
        isAdmin: false
    }

    describe('GET /api/login', () => {
        it('logs in and gets token', () => {
            cy.loginByApi(email, password)
                .then(response => { expect(response.status).to.eq(201) })
                .then(response => { token = response.body.access_token; });
        });
    });

    describe('GET /api/users', () => {
        it('get users WITHOUT auth token', () => {
            cy.getOneOrAllUsers()
                .then((response) => expect(response.status).to.equal(401));
        });

        it('get users with auth token', () => {
            cy.getOneOrAllUsers(token)
                .then((response) => expect(response.status).to.equal(200));
        });
    });

    describe('GET /api/user/userId', () => {
        it('get one user WITHOUT auth token', () => {
            cy.getOneOrAllUsers('', id)
                .then((response) => expect(response.status).to.equal(401));
        });

        it('get one user with auth token', () => {
            cy.getOneOrAllUsers(token, id)
                .then((response) => expect(response.status).to.equal(200));
        });
    });

    describe('POST /api/users', () => {
        it('fail to create new user WITHOUT auth token', () => {
            const user: Omit<User, '_id'> = {
                name: 'Test123',
                email: 'test123@test.com',
                password: 'pass123',
                teacher: undefined,
                isAdmin: false
            }
            cy.createUser(user)
                .then((response) => expect(response.status).to.equal(401));
        });

        it('fail to create new user WITHOUT name', () => {
            const user = newUser;
            user.name = '';
            
            cy.createUser(user, token)
                .then((response) => expect(response.status).to.equal(401));
        });

        it('fail to create new user WITHOUT email', () => {
            const user = newUser;
            user.email = '';

            cy.createUser(user, token)
                .then((response) => expect(response.status).to.equal(401));
        });

        it('fail to create new user WITHOUT password', () => {
            const user = newUser;
            user.password = '';

            cy.createUser(user, token)
                .then((response) => expect(response.status).to.equal(401));
        });

        it('fail to create new user WITHOUT correct password length (6)', () => {
            const user = newUser;
            user.password = '12345';

            cy.createUser(user, token)
                .then((response) => expect(response.status).to.equal(401));
        });

        it('fail to create new user WITHOUT isAdmin defined', () => {
            const user = newUser;
            user.isAdmin = undefined;

            cy.createUser(user, token)
                .then((response) => expect(response.status).to.equal(401));
        });

        it('create new user WITHOUT teacher', () => {
            cy.createUser(newUser, token)
                .then((response) => { newUser._id = response.body._id })
                .then((response) => expect(response.status).to.equal(200));
        });
    });

    describe('PATCH /api/user/userId', () => {
        it('fail to patch user WITHOUT token', () => {
            const user = newUser;
            user.name = 'new user name';

            cy.patchUser(newUser._id, user)
            .then((response) => expect(response.status).to.equal(401));
        });

        it('fail to patch user WITHOUT correct userId', () => {
            const user = newUser;
            user.name = 'new user name';

            cy.patchUser('incorrect id', user, token)
            .then((response) => expect(response.status).to.equal(401));
        });
        
        it('fail to patch user WITHOUT name', () => {
            const user = newUser;
            user.name = '';

            cy.patchUser(newUser._id, user, token)
            .then((response) => expect(response.status).to.equal(401));
        });

        it('patch newly created user', () => {
            const user = newUser;
            user.name = 'new user name';

            cy.patchUser(newUser._id, user, token)
            .then((response) => expect(response.status).to.equal(200));
        });
    });
});