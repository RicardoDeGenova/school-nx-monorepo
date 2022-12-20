import { Teacher } from "./teacher";

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    teacher: Teacher;
    isAdmin: boolean;
}

