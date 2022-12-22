import { Classroom } from "@school-nx-monorepo/api-interfaces";

export class ClassroomScheduleResponse {
    name: string;
    classSchedule: Omit<Classroom[], 'name'>;

    constructor(name: string, partial: Partial<Classroom[]>) {
        if (partial == null) return;
        this.classSchedule = partial;
    }
}