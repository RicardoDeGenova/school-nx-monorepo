import { Classroom } from "./classroom";
import { ClassTime } from "./classtime";
import { Subject } from "./subject";

export interface Schedule {
  teacherName: string,
  classroomName: Classroom["name"],
  classroomType: Classroom["type"],  
  timeSlot: ClassTime["timeSlot"],
  day: ClassTime["day"],
  subject: Subject["name"],
}