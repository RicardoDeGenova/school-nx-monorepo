import { Classroom, Teacher } from "@school-nx-monorepo/api-interfaces";

export class ClassroomScheduleResponse implements Pick<Teacher, 'classrooms'> {
    classrooms: Classroom[];
   
    constructor(partial: Partial<Classroom[]>){
        if (partial == null) return;
        this.classrooms = partial;
    }
}