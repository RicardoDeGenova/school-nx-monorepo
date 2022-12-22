import { User } from "@school-nx-monorepo/api-interfaces";

export interface UserRequest extends Pick<User, 'id'>{
    _id: string;
}