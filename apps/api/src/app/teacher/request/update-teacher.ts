import { Classroom, Subject, Teacher } from "@school-nx-monorepo/api-interfaces";
import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateTeacherRequest implements Omit<Teacher, 'id'> {
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