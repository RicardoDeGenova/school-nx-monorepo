import { IsNotEmpty, IsOptional } from 'class-validator';
import { Classroom, Subject, Teacher } from '@school-nx-monorepo/api-interfaces';

export class UpdateTeacherRequest implements Teacher {    
    @IsNotEmpty({ message: 'name cannot be empty.' })
    @IsOptional()
    classrooms: Classroom[];

    @IsNotEmpty({ message: 'name cannot be empty.' })
    @IsOptional()
    subjects: Subject[];
    
    @IsNotEmpty({ message: 'name cannot be empty.' })
    @IsOptional()
    isCordinator: boolean;
}