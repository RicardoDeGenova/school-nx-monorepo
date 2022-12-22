import { Prop, Schema } from '@nestjs/mongoose';
import { Teacher as ITeacher } from '@school-nx-monorepo/api-interfaces';
import { Classroom } from './classroom.schema';
import { Subject } from './subject.schema';

@Schema()
export class Teacher implements ITeacher {
    @Prop()
    classrooms: Classroom[];

    @Prop()
    subjects: Subject[];

    @Prop()
    isCordinator: boolean;
}
