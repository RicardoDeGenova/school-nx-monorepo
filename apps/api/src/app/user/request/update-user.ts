import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/email-is-unique.validator';
import { User } from '@school-nx-monorepo/api-interfaces';
import { UpdateTeacherRequest } from './update-teacher';

export class UpdateUserRequest implements Omit<User, '_id'> {
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

    @IsOptional()
    teacher: UpdateTeacherRequest;

    @IsNotEmpty({ message: 'isAdmin cannot be empty.' })
    @IsOptional()
    isAdmin: boolean;
}