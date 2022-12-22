import { IsNotEmpty, IsOptional } from 'class-validator';
import { Subject, Teacher } from '@school-nx-monorepo/api-interfaces';
import { UpdateClassroomRequest } from './update-classroom';

export class UpdateTeacherRequest implements Teacher {
    @IsNotEmpty({ message: 'classrooms cannot be empty.' })
    @IsOptional()
    classrooms: UpdateClassroomRequest[];

    @IsNotEmpty({ message: 'subjects cannot be empty.' })
    @IsOptional()
    subjects: Subject[];

    @IsNotEmpty({ message: 'isCordinator cannot be empty.' })
    @IsOptional()
    isCordinator: boolean;
}