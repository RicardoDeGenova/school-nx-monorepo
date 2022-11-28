import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "@school-nx-monorepo/shared/interfaces";
import { Model } from "mongoose";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async insertUser(user: CreateUserDTO){
        const newUser = new this.userModel({
            name: user.name,
            email: user.email,
            password: user.password,
            access: user.access,
            lastLogin: Date.now()
        });

        const result = await newUser.save();
        return result as User;
    }

    async getAllUsers() {
        const users = await this.userModel.find().exec();
        return users as User[];
    }

    async getOneUser(userId: string) {
        const user = await this.userModel.findById(userId);
        return user as User;
    }

    async userExistWithEmail(email: string) {
        const userWithMail = await this.userModel.findOne({email: email});
        return userWithMail !== null;
    }

    async update(userId: string, infoToUpdate: UpdateUserDTO){
        const userToUpdate = await this.getOneUser(userId);

        Object.entries(infoToUpdate).forEach( ([key, value]) => {
            if (key === 'id') return;
            userToUpdate[key] = value;
        });

       userToUpdate.save();

        return userToUpdate;
    }

    async delete(id: string){
        const userToDelete = this.userModel.findByIdAndDelete(id);
        return userToDelete;
    }
}