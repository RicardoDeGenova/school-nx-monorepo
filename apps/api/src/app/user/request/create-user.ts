import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/email-is-unique.validator';
import { User } from '@school-nx-monorepo/api-interfaces';
import { CreateTeacherRequest } from './create-teacher';

export class CreateUserRequest implements Omit<User, '_id'> {
    @IsNotEmpty({ message: 'name cannot be empty.' })
    name: string;

    @IsEmail(undefined, { message: 'the email is invalid.' })
    @EmailIsUnique({ message: 'email already exists' })
    email: string;

    @MinLength(6, { message: 'password must have at least 6 characters.' })
    password: string;

    @IsNotEmpty({ message: 'teacher cannot be empty.' })
    @IsOptional()
    teacher: CreateTeacherRequest;

    @IsNotEmpty({ message: 'isAdmin cannot be empty.' })
    isAdmin: boolean;
}