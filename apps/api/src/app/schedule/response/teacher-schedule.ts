import { Classroom, Subject } from "@school-nx-monorepo/api-interfaces";
import { Teacher } from "../../user/schemas";

export class TeacherScheduleResponse implements Omit<Teacher, 'id' | 'isCordinator'>{
    teacherName = '';
    classrooms: Classroom[] = [];
    subjects: Subject[] = [];

    constructor(name: string, partial: Partial<Teacher>) {
        if (partial === undefined) return;
        this.teacherName = name;
        this.classrooms = partial.classrooms;
        this.subjects = partial.subjects;
    }
}