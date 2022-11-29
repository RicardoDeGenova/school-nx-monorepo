import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { AccessIsCorrect as RoleIsCorrect } from '../validation/role-is-correct.validator';
import { EmailIsUnique } from '../validation/email-is-unique.validator';

export class CreateUserDTO {
    @IsNotEmpty({ message: 'name cannot be empty.' })
    name: string;

    @IsEmail(undefined, { message: 'the email is invalid.' })
    @EmailIsUnique({ message: 'email already exists' })
    email: string;

    @MinLength(6, { message: 'password must have at least 6 characters.' })
    password: string;

    @IsNotEmpty({ message: 'role cannot be empty.' })
    @RoleIsCorrect({ message: 'role is invalid' })
    role: string;
}