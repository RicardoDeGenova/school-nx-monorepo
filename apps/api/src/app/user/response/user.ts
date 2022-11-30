import { User } from "@school-nx-monorepo/api-interfaces";

export class UserResponse implements Omit<User, 'password' | 'role'> {
    id: string;
    name: string;
    email: string;

    constructor(partial: Partial<User>) {
        this.id = partial.id;
        this.name = partial.name;
        this.email = partial.email;
    }
}
