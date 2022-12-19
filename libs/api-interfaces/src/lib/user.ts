import { Admin } from "./admin";
import { Teacher } from "./teacher";

export type Role = Teacher | Admin;

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
}

