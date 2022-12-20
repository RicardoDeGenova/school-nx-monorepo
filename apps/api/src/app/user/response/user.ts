import { Teacher, User } from "@school-nx-monorepo/api-interfaces";

export class UserResponse implements Omit<User, 'password' | 'id'> {
    name: string;
    email: string;
    teacher: Teacher;
    isAdmin: boolean;

    constructor(partial: Partial<User>) {
        if (partial === null) return;
        this.name = partial.name;
        this.email = partial.email;
        this.teacher ??= partial.teacher;
        this.isAdmin ??= partial.isAdmin;
    }
}
