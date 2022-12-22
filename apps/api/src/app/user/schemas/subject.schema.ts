import { Prop, Schema } from '@nestjs/mongoose';
import { Subject as ISubject, SubjectName, SubjectGroup } from '@school-nx-monorepo/api-interfaces';

@Schema()
export class Subject implements ISubject {
    @Prop()
    name: SubjectName;

    @Prop()
    group: SubjectGroup;
}
