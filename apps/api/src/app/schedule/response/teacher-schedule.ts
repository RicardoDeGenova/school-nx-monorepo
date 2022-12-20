import { Classroom, Subject } from "@school-nx-monorepo/api-interfaces";
import { Teacher } from "../../user/schemas";

export class TeacherScheduleResponse implements Omit<Teacher, 'id' | 'isCordinator'>{
    teacherName: string;
    classrooms: Classroom[];
    subjects: Subject[];

    constructor(name: string, partial: Partial<Teacher>){
        if (partial == null) return;
        this.teacherName = name;
        this.classrooms = partial.classrooms;
        this.subjects = partial.subjects;
    }
}