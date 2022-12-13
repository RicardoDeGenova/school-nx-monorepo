import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherRequest, UpdateTeacherRequest } from './request';
import { TeacherResponse } from './response';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async create(@Body() teacherRequest: CreateTeacherRequest): Promise<TeacherResponse> {
    return await this.teacherService.create(
      teacherRequest.classrooms,
      teacherRequest.subjects,
      teacherRequest.isCordinator
    );
  }

  @Get()
  async findAll(): Promise<TeacherResponse[]> {
    return await this.teacherService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TeacherResponse> {
    return await this.teacherService.findById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, 
  @Body() updateTeacherRequest: UpdateTeacherRequest): Promise<TeacherResponse> {
    return await this.teacherService.update(id, updateTeacherRequest);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return await this.teacherService.remove(id);
  }
}
