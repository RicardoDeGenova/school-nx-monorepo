import { Body, Controller, Get, Param, Patch, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { CreateUserRequest, UpdateUserRequest } from './request';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard as IsAdminGuard } from '../auth/guards/roles.guard';
import { UserResponse } from './response';
import { UserRequest } from './request/user';

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
    async getUser(@Param('userId') userId: Pick<UserRequest, 'id'>): Promise<UserResponse> {
        return await this.userService.findById(userId.id);
    }

    @Post()
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async createUser(@Body() createUserDTO: CreateUserRequest): Promise<UserResponse> {
        return await this.userService.create(
            createUserDTO.name,
            createUserDTO.email,
            createUserDTO.password,
            createUserDTO.teacher,
            createUserDTO.isAdmin);
    }

    @Patch(':userId')
    @UseGuards(JwtAuthGuard, IsAdminGuard)
    async updateUser(
        @Param('userId') userId: string,
        @Body() updateUserDTO: UpdateUserRequest): Promise<UserResponse> {
        return this.userService.update(userId, updateUserDTO);
    }
}