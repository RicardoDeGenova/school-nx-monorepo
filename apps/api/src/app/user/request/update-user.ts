import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { RoleIsCorrect } from '../validation/role-is-correct.validator';
import { EmailIsUnique } from '../validation/email-is-unique.validator';
import { Classroom, Subject, Teacher, User } from '@school-nx-monorepo/api-interfaces';

export class UpdateUserRequest implements Omit<User, 'id'> {
    @IsNotEmpty({ message: 'name cannot be empty.' })
    @IsOptional()
    name: string;

    @IsEmail(undefined, { message: 'the email is invalid.' })
    @EmailIsUnique({ message: 'email already exists' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'password must have at least 6 characters.' })
    @IsOptional()
    password: string;

    @IsNotEmpty({ message: 'role cannot be empty.' })
    @RoleIsCorrect({ message: 'role is invalid' })
    @IsOptional()
    role: UpdateTeacherRequest | 'admin';
}

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