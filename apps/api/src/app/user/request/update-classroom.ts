import { Classroom, ClassTime, Subject } from '@school-nx-monorepo/api-interfaces';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateClassroomRequest implements Classroom {
    @IsNotEmpty({ message: 'name cannot be empty.' })
    @IsOptional()
    name: '6A'| '6B'| '7A'| '7B'| '8A'| '8B'| '8C'| '9A'| '9B'| '9C'| '1A'| '1B'| '2A'| '2B'| '3A';

    @IsNotEmpty({ message: 'type cannot be empty.' })
    @IsOptional()
    type: 'traditional' | 'dry lab' | 'wet lab';

    @IsNotEmpty({ message: 'time cannot be empty.' })
    @IsOptional()
    time: ClassTime;

    @IsNotEmpty({ message: 'subject cannot be empty.' })
    @IsOptional()
    subject: Subject;
}