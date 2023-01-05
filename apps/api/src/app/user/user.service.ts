import { ClassSerializerInterceptor, Injectable, UseInterceptors } from "@nestjs/common";
import { UpdateUserRequest } from "./request/update-user";
import { UserRespository } from "./user.repository";
import { hashPassword, validatePassword } from "../utils/bcrypt";
import { UserResponse as UserResponse } from "./response";
import { Teacher } from "@school-nx-monorepo/api-interfaces";
import { FilterQuery } from "mongoose";
import { UserDocument } from "./schemas";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRespository) { }

    async create(name: string, email: string, password: string,
        teacher: Teacher, isAdmin: boolean): Promise<UserResponse> {
        password = hashPassword(password);

        const user = await this.userRepository.create({
            name,
            email,
            password,
            teacher,
            isAdmin,
            lastLogin: Date.now()
        });
        return new UserResponse(user);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    async findAll(): Promise<UserResponse[]> {
        const users = await this.userRepository.findAll({}) as UserResponse[];
        return users.map((user) => new UserResponse(user));
    }

    @UseInterceptors(ClassSerializerInterceptor)
    async findAllByFilter(entityFilterQuery: FilterQuery<UserDocument>): Promise<UserResponse[]> {
        const users = await this.userRepository.findAll(entityFilterQuery) as UserResponse[];

        return users.map((user) => new UserResponse(user));
    }

    @UseInterceptors(ClassSerializerInterceptor)
    async findById(userId: string): Promise<UserResponse | null> {
        const user = await this.userRepository.findOne({ _id: userId });
        return (user) ? new UserResponse(user) : null;
    }

    async findByEmail(email: string): Promise<UserResponse | null> {
        const user = await this.userRepository.findOne({ email });
        return (user) ? new UserResponse(user) : null;
    }

    async validateWithEmail(email: string, password: string): Promise<UserResponse | null> {
        const user = await this.userRepository.findOne({ email });
        if (!user) return null;

        const passwordIsValid = validatePassword(password, user.password);
        return (passwordIsValid) ? new UserResponse(user) : null;
    }

    async update(userId: string, infoToUpdate: UpdateUserRequest): Promise<UserResponse> {
        const updatedUser = await this.userRepository.findOneAndUpdate({ _id: userId }, infoToUpdate);
        return new UserResponse(updatedUser);
    }

    async remove(userId: string): Promise<boolean> {
        return await this.userRepository.deleteMany({ _id: userId });
    }
}