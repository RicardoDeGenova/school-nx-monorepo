import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateUserRequest, UpdateUserRequest, UserRequest } from './request';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard as IsAdminGuard } from '../auth/guards/roles.guard';
import { UserResponse } from './response';

@Controller('/users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllUsers(): Promise<UserResponse[]> {
        return await this.userService.findAll();
    }

    @Get(':userId')
    @UseGuards(JwtAuthGuard)
    async getUser(@Param('userId') userId: UserRequest): Promise<UserResponse> {
        return await this.userService.findById(userId._id);
    }

    @Post()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async createUser(@Body() createUserRequest: CreateUserRequest): Promise<UserResponse> {
        return await this.userService.create(
            createUserRequest.name,
            createUserRequest.email,
            createUserRequest.password,
            createUserRequest.teacher,
            createUserRequest.isAdmin);
    }

    @Patch(':userId')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async updateUser(
        @Param('userId') userId: string,
        @Body() updateUserDTO: UpdateUserRequest): Promise<UserResponse> {
        return await this.userService.update(userId, updateUserDTO);
    }
}