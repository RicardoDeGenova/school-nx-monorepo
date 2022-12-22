import { Teacher } from "./teacher";

export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    teacher: Teacher;
    isAdmin: boolean;
}

