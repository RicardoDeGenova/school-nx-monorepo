import { ClassTime } from "./classtime";
import { Subject } from "./subject";

export interface Classroom {
  type: 'tradicional' | 'laboratório seco' | 'laboratório molhado',
  time: ClassTime,
  subject: Subject,
}