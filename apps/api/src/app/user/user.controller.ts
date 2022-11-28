import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ListUserDTO } from './dto/list-user.dto';
import { User } from '@school-nx-monorepo/shared/database';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('/users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getAllUsers() {
        const savedUsers = await this.userService.getUsers();
        const usersList = savedUsers.map(
            (user) => new ListUserDTO(user.id, user.name),
        );
        
        return usersList;
    }

    @Get(':userId')
    async getUser(@Param('userId') userId: string): Promise<User> {
        return await this.userService.getUserById(userId);
    }

    @Post()
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        const generateUser = await this.userService.createUser(
            createUserDTO.name,
            createUserDTO.email,
            createUserDTO.password,
            createUserDTO.access);

        return {
            user: new ListUserDTO(generateUser.id, generateUser.name),
            message: 'User successfully created.'
        };
    }


    @Patch(':userId')
    async updateUser(@Param('userId') userId: string, @Body() updateUserDTO: UpdateUserDTO): Promise<User> {
        return this.userService.updateUser(userId, updateUserDTO);
    }
}