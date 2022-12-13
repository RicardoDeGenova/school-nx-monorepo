import { Classroom } from "./classroom";
import { Subject } from "./subject";

export interface Teacher {
    id: string;
    classrooms: Classroom[]
    subjects: Subject[],
    isCordinator: boolean,
}