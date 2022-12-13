import { Injectable } from '@nestjs/common';
import { Classroom, Subject } from '@school-nx-monorepo/api-interfaces';
import { TeacherRequest, UpdateTeacherRequest } from './request';
import { TeacherResponse } from './response';
import { TeacherRepository } from './teacher.repository';

@Injectable()
export class TeacherService {
  constructor(private readonly repository: TeacherRepository) { }
  async create(classrooms: Classroom[], subjects: Subject[], isCordinator: boolean): Promise<TeacherResponse> {
    const teacher = await this.repository.create({
      classrooms,
      subjects,
      isCordinator
    });
    return new TeacherResponse(teacher);
  }

  async findAll(): Promise<TeacherResponse[]> {
    const teachers = await this.repository.findAll({}) as TeacherResponse[];

    return teachers.map((teacher) => new TeacherResponse(teacher));
  }

  async findById(teacherId: string): Promise<TeacherResponse | null> {
    const teacher = await this.repository.findOne({ id: teacherId });
    return (teacher) ? new TeacherResponse(teacher) : null;
  }

  async update(teacherId: string, infoToUpdate: UpdateTeacherRequest): Promise<TeacherResponse> {
    const teacher = await this.repository.findOneAndUpdate({ id: teacherId }, infoToUpdate);
    return new TeacherResponse(teacher);
  }

  async remove(teacherId: string): Promise<boolean> {
    return await this.repository.deleteMany({id: teacherId});
  }
}
