import { Classroom } from "@school-nx-monorepo/api-interfaces";

export type Teacher = 'Teacher A' | 'Teacher B';

export type ScheduleRow = {
    classroom: Classroom;
    teacher: Teacher;
}