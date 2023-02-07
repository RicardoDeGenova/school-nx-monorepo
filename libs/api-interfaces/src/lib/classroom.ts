import { ClassTime } from "./classtime";
import { Subject } from "./subject";

export interface Classroom {
  name: '6A'| '6B'| '7A'| '7B'| '8A'| '8B'| '8C'| '9A'| '9B'| '9C'| '1A'| '1B'| '2A'| '2B'| '3A',
  type: 'traditional' | 'dry lab' | 'wet lab',
  time: ClassTime,
  subject: Subject,
}