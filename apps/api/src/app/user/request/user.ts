import { User } from "@school-nx-monorepo/api-interfaces";

export interface UserRequest extends Pick<User, '_id'>{
    _id: string;
}