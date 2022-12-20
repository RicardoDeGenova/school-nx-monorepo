import { Classroom, ClassTime, Subject } from '@school-nx-monorepo/api-interfaces';
import { IsNotEmpty } from 'class-validator';

export class CreateClassroomRequest implements Classroom {
    @IsNotEmpty({message: 'type cannot be empty.'})
    type: 'tradicional' | 'laboratório seco' | 'laboratório molhado';

    @IsNotEmpty({message: 'time cannot be empty.'})
    time: ClassTime;

    @IsNotEmpty({message: 'subject cannot be empty.'})
    subject: Subject;
}