import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Classroom, Subject, Teacher as ITeacher } from '@school-nx-monorepo/api-interfaces';
import { Document } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher implements ITeacher{
    id: string;

    @Prop()
    classrooms: Classroom[];

    @Prop()
    subjects: Subject[];

    @Prop()
    isCordinator: boolean;
}
export const TeacherSchema = SchemaFactory.createForClass(Teacher);