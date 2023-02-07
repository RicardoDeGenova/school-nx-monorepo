import { Schedule, SubjectName } from "@school-nx-monorepo/api-interfaces";

export class ScheduleResponse implements Schedule{
    teacherName: string;
    subject: SubjectName;
    day: "monday" | "tuesday" | "wednesday" | "thrusday" | "friday";
    timeSlot: number;
    classroomName: "6A" | "6B" | "7A" | "7B" | "8A" | "8B" | "8C" | "9A" | "9B" | "9C" | "1A" | "1B" | "2A" | "2B" | "3A";
    classroomType: "traditional" | "dry lab" | "wet lab";

    constructor(schedule: Schedule) {
       this.teacherName = schedule.teacherName;
       this.subject = schedule.subject;
       this.classroomName = schedule.classroomName;
       this.classroomType = schedule.classroomType;
       this.timeSlot = schedule.timeSlot;
       this.day = schedule.day;
    }
}