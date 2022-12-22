import { Classroom, ClassTime, Subject } from '@school-nx-monorepo/api-interfaces';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateClassroomRequest implements Classroom {
    @IsNotEmpty({ message: 'name cannot be empty.' })
    @IsOptional()
    name: string;

    @IsNotEmpty({ message: 'type cannot be empty.' })
    @IsOptional()
    type: 'tradicional' | 'laboratório seco' | 'laboratório molhado';

    @IsNotEmpty({ message: 'time cannot be empty.' })
    @IsOptional()
    time: ClassTime;

    @IsNotEmpty({ message: 'subject cannot be empty.' })
    @IsOptional()
    subject: Subject;
}