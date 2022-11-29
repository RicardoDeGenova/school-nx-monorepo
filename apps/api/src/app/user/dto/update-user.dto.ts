import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { AccessIsCorrect } from '../validation/role-is-correct.validator';
import { EmailIsUnique } from '../validation/email-is-unique.validator';

export class UpdateUserDTO {
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

    @IsNotEmpty({ message: 'access cannot be empty.' })
    @AccessIsCorrect({ message: 'access is invalid' })
    @IsOptional()
    access: string;
}