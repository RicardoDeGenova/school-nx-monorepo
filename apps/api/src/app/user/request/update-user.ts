import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { AccessIsCorrect } from '../validation/role-is-correct.validator';
import { EmailIsUnique } from '../validation/email-is-unique.validator';
import { Role, User } from '@school-nx-monorepo/api-interfaces';

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
    @AccessIsCorrect({ message: 'role is invalid' })
    @IsOptional()
    role: Role;
}