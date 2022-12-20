import { Teacher, User } from "@school-nx-monorepo/api-interfaces";

export interface UserRequest extends Pick<User, 'id' | 'isAdmin'>{
    id: string;
    teacher: Teacher;
}