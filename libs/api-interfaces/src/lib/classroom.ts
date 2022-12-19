import { Subject } from "./subject";

export interface Classroom {
  type: 'traditional' | 'experimental',
  time: number,
  subject: Subject,
}