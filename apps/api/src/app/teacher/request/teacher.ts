import { Teacher } from "@school-nx-monorepo/api-interfaces";

export class TeacherRequest implements Pick<Teacher, 'id'>{
    id: string;
}