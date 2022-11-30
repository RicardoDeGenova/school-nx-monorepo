import { ClassSerializerInterceptor, Injectable, UseInterceptors } from "@nestjs/common";
import { UpdateUserRequest } from "./request/update-user";
import { UserRespository } from "./user.repository";
import { v4 as uuid } from 'uuid';
import { hashPassword, validatePassword } from "../utils/bcrypt";
import { UserResponse as UserResponse } from "./response";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRespository) { }

    async createUser(name: string, email: string, password: string, role: string): Promise<UserResponse> {
        password = hashPassword(password);
        return this.userRepository.create({
            id: new uuid(),
            name,
            email,
            password,
            role,
            lastLogin: Date.now()
        });
    }

    @UseInterceptors(ClassSerializerInterceptor)
    async getUsers(): Promise<UserResponse[]> {
        const users = await this.userRepository.findAll({}) as UserResponse[];

        return users.map((user) => new UserResponse(user));
    }

    @UseInterceptors(ClassSerializerInterceptor)
    async getUserById(userId: string): Promise<UserResponse> {
        const user = await this.userRepository.findOne({ id: userId });
        return new UserResponse(user);
    }

    async getUserByEmail(email: string): Promise<UserResponse> {
        const user = await this.userRepository.findOne({ email });
        return new UserResponse(user);
    }

    async validateWithEmail(email: string, password: string): Promise<UserResponse | null> {  
        const user = await this.userRepository.findOne({ email });
        
        if (!user) return null;

        const passwordIsValid = validatePassword(password, user.password);
        return (passwordIsValid) ? new UserResponse(user) : null;
    }

    async updateUser(userId: string, infoToUpdate: UpdateUserRequest): Promise<UserResponse> {
        const updatedUser = await this.userRepository.findOneAndUpdate({ id: userId }, infoToUpdate);
        return new UserResponse(updatedUser);
    }

    async delete(userId: string): Promise<boolean> {
        return await this.userRepository.deleteMany({ id: userId });
    }
}