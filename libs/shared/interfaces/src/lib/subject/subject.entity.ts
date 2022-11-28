import { SubjectGroup } from "./subject-group.entity";
import { SubjectName } from "./subject-name.entity";

export interface Subject {
    name: SubjectName,
    group: SubjectGroup,
}


