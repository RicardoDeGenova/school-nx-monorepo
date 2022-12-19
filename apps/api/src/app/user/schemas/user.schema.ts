import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role,Teacher, User as IUser } from '@school-nx-monorepo/api-interfaces';
import { Interface } from 'readline';
import { RoleIsCorrect } from '../validation/role-is-correct.validator';

export type UserDocument = User & Document;

@Schema()
export class User implements IUser {
    id: string;

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({type: Role, discriminators: () => [Teacher | 'admin']})
    role: Role;

    @Prop()
    lastLogin: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);