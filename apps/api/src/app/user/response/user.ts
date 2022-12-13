import { Role, User } from "@school-nx-monorepo/api-interfaces";

export class UserResponse implements Omit<User, 'password' | 'id'> {
    name: string;
    email: string;
    role: Role;

    constructor(partial: Partial<User>) {
        if (partial === null) return;
        this.name = partial.name;
        this.email = partial.email;
        this.role = partial.role;
    }
}
