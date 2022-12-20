import { ClassTime } from "./classtime";
import { Subject } from "./subject";

export interface Classroom {
  type: 'traditional' | 'experimental',
  time: ClassTime,
  subject: Subject,
}