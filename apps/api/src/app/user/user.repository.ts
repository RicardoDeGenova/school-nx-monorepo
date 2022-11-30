import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from './schemas/user.schema';
import { Model } from "mongoose";
import { EntityRepository } from "../database/entity.repository";

@Injectable()
export class UserRespository extends EntityRepository<UserDocument> {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {
        super(userModel)
    }
}