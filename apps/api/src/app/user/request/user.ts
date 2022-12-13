import { Role, User } from "@school-nx-monorepo/api-interfaces";

export interface UserRequest extends Pick<User, 'id' | 'role'>{
    id: string;
    role: Role;
}