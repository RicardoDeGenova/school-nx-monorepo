import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntityRepository } from "../database/entity.repository";
import { Teacher, TeacherDocument } from "./schemas/teacher.schema";

@Injectable()
export class TeacherRepository extends EntityRepository<TeacherDocument>{
    constructor(@InjectModel(Teacher.name) private readonly teacherModel: Model<TeacherDocument>) {
        super(teacherModel);
    }
}