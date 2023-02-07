import { Classroom, Subject, Teacher } from "@school-nx-monorepo/api-interfaces";

export class TeacherScheduleResponse implements Omit<Teacher, 'id' | 'isCordinator'>{
    teacherName = '';
    classrooms: Classroom[] = [];
    subjects: Subject[] = [];

    constructor(name: string, partial: Teacher) {
        if (partial === undefined) return;
        this.teacherName = name;
        this.classrooms = partial.classrooms;
        this.subjects = partial.subjects;
    }
}