import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ListUserDTO } from './dto/list-user.dto';

@Controller('/users')
export class UserController{
    constructor(private userService: UserService) {}

    @Post()
    async createUser(@Body() userData: CreateUserDTO){
        const generateUser = await this.userService.insertUser(userData);

        return {
            user: new ListUserDTO(generateUser.id, generateUser.name),
            message: 'User successfully created.'
        };
    }

    @Get()
    async getAllUsers() {
        const savedUsers = await this.userService.getAllUsers();
        const usersList = savedUsers.map(
            (user) => new ListUserDTO(user.id, user.name),
        );

        return usersList;
    }
}