import { Classroom } from "./classroom";
import { Subject } from "./subject";

export interface Teacher {
    classrooms: Classroom[]
    subjects: Subject[],
    isCordinator: boolean,
}