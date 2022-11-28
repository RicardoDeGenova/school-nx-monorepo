import { Injectable } from "@nestjs/common";
import { User } from "@school-nx-monorepo/shared/database";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UserRespository } from "./user.repository";
import { v4 as uuid } from 'uuid';
import { hashPassword } from "../utils/bcrypt";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRespository) { }

    async createUser(name: string, email: string, password: string, access: string): Promise<User> {
        password = hashPassword(password);
        return this.userRepository.create({
            id: new uuid(),
            name,
            email,
            password,
            access,
            lastLogin: Date.now()
        });
    }

    async getUsers(): Promise<User[]> {
        return this.userRepository.find({});
    }

    async getUserById(userId: string): Promise<User> {
        return this.userRepository.findOne({ id: userId });
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ email });
    }

    async updateUser(userId: string, infoToUpdate: UpdateUserDTO): Promise<User> {
        return this.userRepository.findOneAndUpdate({ id: userId }, infoToUpdate);
    }

    async delete(userId: string): Promise<boolean> {
        return this.userRepository.deleteMany({ id: userId });
    }
}