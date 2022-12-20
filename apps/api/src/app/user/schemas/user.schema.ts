import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User as IUser } from '@school-nx-monorepo/api-interfaces';
import { Teacher } from './teacher.schema';

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

    @Prop()
    teacher: Teacher;

    @Prop()
    isAdmin: boolean;

    @Prop()
    lastLogin: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);