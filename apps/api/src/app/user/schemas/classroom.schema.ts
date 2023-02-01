import { Prop, Schema } from '@nestjs/mongoose';
import { ClassTime } from './classtime.schema';
import { Classroom as IClassroom } from '@school-nx-monorepo/api-interfaces';
import { Subject } from './subject.schema';

@Schema()
export class Classroom implements IClassroom{
    @Prop()
    name: '6A'| '6B'| '7A'| '7B'| '8A'| '8B'| '8C'| '9A'| '9B'| '9C'| '1A'| '1B'| '2A'| '2B'| '3A';

    @Prop()
    type: 'tradicional' | 'laboratório seco' | 'laboratório molhado';

    @Prop()
    time: ClassTime;

    @Prop()
    subject: Subject;    
}
