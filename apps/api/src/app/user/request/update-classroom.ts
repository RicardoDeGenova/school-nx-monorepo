import { Classroom, ClassTime, Subject } from '@school-nx-monorepo/api-interfaces';
import { IsNotEmpty } from 'class-validator';

export class UpdateClassroomRequest implements Classroom {
    @IsNotEmpty({message: 'type cannot be empty.'})
    type: 'traditional' | 'experimental';

    @IsNotEmpty({message: 'time cannot be empty.'})
    time: ClassTime;

    @IsNotEmpty({message: 'subject cannot be empty.'})
    subject: Subject;
}