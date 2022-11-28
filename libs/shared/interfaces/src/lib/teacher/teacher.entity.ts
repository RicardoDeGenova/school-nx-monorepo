import { Classroom } from "../classroom/classroom.entity";
import { Subject } from "../subject/subject.entity";

export interface Teacher {
    classrooms: Classroom[]
    subjects: Subject[],
    isCordinator: boolean,
}