import { Classroom, Subject, Teacher } from "@school-nx-monorepo/api-interfaces";

export class TeacherResponse implements Omit<Teacher, 'id'> {
    classrooms: Classroom[] = [];
    subjects: Subject[] = [];
    isCordinator = false;

    constructor(partial: Partial<Teacher>) {
        if (partial === undefined) return;

        this.classrooms = partial.classrooms;
        this.subjects = partial.subjects;
        this.isCordinator = partial.isCordinator;
    }
}