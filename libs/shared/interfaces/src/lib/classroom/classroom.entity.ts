import { Subject } from "../subject/subject.entity";

export interface Classroom {
    type: 'traditional' | 'experimental',
    time: number,
    subject: Subject,
  }