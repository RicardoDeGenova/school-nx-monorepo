import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TeacherScheduleResponse, ClassroomScheduleResponse } from './response';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<TeacherScheduleResponse[]> {
    return await this.scheduleService.getSchedule();
  }

  @Get('/teacher/:userId')
  @UseGuards(JwtAuthGuard)
  async getTeacherSchedule(@Param('userId') userId: string): Promise<TeacherScheduleResponse> {
    return await this.scheduleService.getTeacherScheduleById(userId);
  }

  @Get('/classroomName/:classroomName')
  @UseGuards(JwtAuthGuard)
  async getClassroomSchedule(@Param('classroomName') request: string): Promise<ClassroomScheduleResponse> {
    return await this.scheduleService.getClassroomScheduleByName(request);
  }
}
