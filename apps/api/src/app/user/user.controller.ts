import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateUserRequest, UpdateUserRequest } from './request';
import { UserService } from './user.service';
import { Roles } from '../auth/roles/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserResponse } from './response';
import { UserRequest } from './request/user';

@Controller('/users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    async getAllUsers(): Promise<UserResponse[]> {
        return await this.userService.getUsers();
    }

    @Get(':userId')
    @UseGuards(JwtAuthGuard, RolesGuard)
    async getUser(@Param('userId') userId: Pick<UserRequest, 'id'>): Promise<UserResponse> {
        return await this.userService.getUserById(userId.id);
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    async createUser(@Body() createUserDTO: CreateUserRequest): Promise<UserResponse> {
        return await this.userService.createUser(
            createUserDTO.name,
            createUserDTO.email,
            createUserDTO.password,
            createUserDTO.role);
    }

    @Patch(':userId')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    async updateUser(
        @Param('userId') userId: string,
        @Body() updateUserDTO: UpdateUserRequest): Promise<UserResponse> {
        return this.userService.updateUser(userId, updateUserDTO);
    }
}