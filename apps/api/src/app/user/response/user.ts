import { User } from "@school-nx-monorepo/api-interfaces";
import { TeacherResponse } from "./teacher";

export class UserResponse implements Omit<User, 'password'> {
    _id: string;
    name: string;
    email: string;
    teacher: TeacherResponse;
    isAdmin: boolean;

    constructor(partial: Partial<User>) {
        this._id = partial._id;
        this.name = partial.name;
        this.email = partial.email;
        this.isAdmin = partial.isAdmin;
        this.teacher = new TeacherResponse(partial.teacher);
    }
}
