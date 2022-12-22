import { Injectable } from '@nestjs/common';
import { Classroom } from '@school-nx-monorepo/api-interfaces';
import { UserResponse } from '../user/response';
import { UserRespository } from '../user/user.repository';
import { ClassroomScheduleResponse, TeacherScheduleResponse } from './response';

@Injectable()
export class ScheduleService {
    constructor(private readonly userRepository: UserRespository) { }

    async getSchedule(): Promise<TeacherScheduleResponse[]> {
        const allUsers: UserResponse[] = await this.userRepository.findAll({}) as UserResponse[];
        const schedule: TeacherScheduleResponse[] = allUsers.map(
            (user) => new TeacherScheduleResponse(user.name, user.teacher)
        );
        return schedule;
    }

    async getTeacherScheduleById(_id: string): Promise<TeacherScheduleResponse | null> {
        const user = await this.userRepository.findOne({ _id });

        if (!user) return null;
        return new TeacherScheduleResponse(user.name, user.teacher);
    }

    async getClassroomScheduleByName(name: string): Promise<ClassroomScheduleResponse | null> {
        const query = { teacher: { $not: { $eq: null } } };

        const users: UserResponse[] = await this.userRepository.findAll(query) as UserResponse[];
        if (!users) return null;

        const classrooms: Classroom[][] = users.map(
            (user) => user.teacher.classrooms.filter((classroom => classroom.name === name))
        );

        const flatClassrooms: Classroom[] = classrooms.flat().sort((n1: Classroom, n2: Classroom) => {
            if (n1.time.timeSlot > n2.time.timeSlot) return 1;
            if (n1.time.timeSlot < n2.time.timeSlot) return -1;
            return 0;
        });

        return new ClassroomScheduleResponse(name, flatClassrooms);
    }
}
