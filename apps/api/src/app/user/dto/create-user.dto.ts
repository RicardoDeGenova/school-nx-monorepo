import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { AccessIsCorrect } from '../validation/access-is-correct.validator';
import { EmailIsUnique } from '../validation/email-is-unique.validator';

export class CreateUserDTO {
    @IsNotEmpty({ message: 'name cannot be empty.' })
    name: string;

    @IsEmail(undefined, { message: 'the email is invalid.' })
    @EmailIsUnique({ message: 'email already exists' })
    email: string;

    @MinLength(6, { message: 'password must have at least 6 characters.' })
    password: string;

    //@IsNotEmpty({ message: 'access cannot be empty.' })
    @AccessIsCorrect({ message: 'access is invalid' })
    access: string;
}