import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User as IUser } from '@school-nx-monorepo/api-interfaces';

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
    role: 'teacher' | 'admin';

    @Prop()
    lastLogin: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);