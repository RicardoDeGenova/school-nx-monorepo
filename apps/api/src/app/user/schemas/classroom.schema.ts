import { Prop, Schema } from '@nestjs/mongoose';
import { ClassTime } from './classtime.schema';
import { Classroom as IClassroom } from '@school-nx-monorepo/api-interfaces';
import { Subject } from './subject.schema';

@Schema()
export class Classroom implements IClassroom{
    @Prop()
    type: 'traditional' | 'experimental';

    @Prop()
    time: ClassTime;

    @Prop()
    subject: Subject;    
}
