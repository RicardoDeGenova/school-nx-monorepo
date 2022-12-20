import { Classroom, Subject, Teacher } from '@school-nx-monorepo/api-interfaces';
import { IsNotEmpty } from 'class-validator';

export class CreateTeacherRequest implements Teacher {
    @IsNotEmpty({ message: 'classrooms cannot be empty.' })
    classrooms: Classroom[];

    @IsNotEmpty({ message: 'subjects cannot be empty.' })
    subjects: Subject[];

    @IsNotEmpty({ message: 'isCordinator cannot be empty.' })
    isCordinator: boolean;
}