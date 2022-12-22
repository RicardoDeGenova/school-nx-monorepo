import { IsEmail, IsNotEmpty } from 'class-validator';
import { User } from '@school-nx-monorepo/api-interfaces';

export class UserloginRequest implements Pick<User, 'email' | '_id'> {
    @IsNotEmpty({ message: 'id cannot be empty' })
    _id: string;

    @IsEmail(undefined, { message: 'the email is invalid.' })
    email: string;

}